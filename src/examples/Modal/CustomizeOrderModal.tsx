import React from 'react';

import { Badge } from '../../components/Badge';
import { InputField } from '../../components/InputField';
import { MessageBox } from '../../components/MessageBox';
import { Modal } from '../../components/Modal';
import { ArrowDown02 } from '../../icons/icons/ArrowDown02';
import { Minus2 } from '../../icons/icons/Minus2';

import breakfastHero from '../WeCaterExplorePage/assets/images/restaurant-1.jpg';
import { OptionPill } from './OptionPill';

export interface CustomizeOrderModalProps {
  open: boolean;
  onClose: () => void;
}

function OptionSection({
  title,
  options,
  selectedId,
  onSelect,
}: {
  title: string;
  options: { id: string; label: string }[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="m-0 font-body text-[16px] font-semibold leading-[150%] tracking-[0.16px] text-text-title">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3" role="group" aria-label={title}>
        {options.map((option) => (
          <OptionPill
            key={option.id}
            selected={selectedId === option.id}
            onClick={() => onSelect(option.id)}
          >
            {option.label}
          </OptionPill>
        ))}
      </div>
    </section>
  );
}

/** Figma *Customize order* `4696:20074` — marketplace order customization dialog. */
export function CustomizeOrderModal({ open, onClose }: CustomizeOrderModalProps) {
  const [quantity, setQuantity] = React.useState('2');
  const [sideId, setSideId] = React.useState('cheesy-grits');
  const [sauceId, setSauceId] = React.useState('cheesy-grits');
  const [saladId, setSaladId] = React.useState('no-thanks');
  const [additionalInfoOpen, setAdditionalInfoOpen] = React.useState(true);
  const [additionalInfo, setAdditionalInfo] = React.useState('');

  const subtotal = React.useMemo(() => {
    const qty = Number.parseInt(quantity, 10) || 0;
    return (49 * qty).toFixed(2);
  }, [quantity]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      size="lg"
      className="w-[723px] max-w-[723px]"
      title="Basic Breakfast Bar"
      description="Classic Egg & cheese biscuit sandwich, Serves 8"
      actions={
        <button
          type="button"
          className={[
            'flex h-[58px] w-full items-center justify-between rounded-full',
            'bg-brand-sherwood-green px-[14px] py-[14px]',
            'font-title text-[20px] font-semibold leading-[120%] text-brand-gossip',
            'shadow-[0_1px_2px_rgba(16,24,40,0.05)]',
            'transition-colors hover:bg-sherwood-chelsea-gem-900',
            'focus:outline-none focus:shadow-[0_0_0_2px_#FFFFFF,0_0_0_4px_#8DE5D0]',
          ].join(' ')}
        >
          <span>Add to cart</span>
          <span>${subtotal}</span>
        </button>
      }
    >
      <div className="-mx-6 -mt-6 flex min-h-0 flex-1 flex-col">
        <div className="relative shrink-0">
          <img
            src={breakfastHero}
            alt=""
            className="h-[152px] w-full object-cover"
          />
          <Badge
            color="orange"
            size="sm"
            state="light"
            className="absolute bottom-3 left-6"
          >
            Required · Select 1
          </Badge>
        </div>

        <div className="flex flex-col gap-8 px-6 pb-6 pt-8">
          <div className="flex flex-col gap-6">
            <InputField
              label="Select quantity *"
              hint="This is a hint text to help user."
              inputKind="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              state="filled"
              trailingIcon={<ArrowDown02 width={20} height={20} />}
            />

            <div className="flex items-start justify-between border-t border-border-subtle pt-4">
              <div className="flex flex-col gap-1.5">
                <p className="m-0 font-body text-[16px] font-medium leading-[150%] tracking-[0.16px] text-text-subtitle">
                  Per tray (est.)
                </p>
                <p className="m-0 font-body text-[13px] font-semibold leading-[150%] text-text-subtitle">
                  $49.00 / Person
                </p>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <p className="m-0 font-body text-[13px] font-normal leading-[150%] text-text-subtitle">
                  Subtotal
                </p>
                <p className="m-0 font-body text-[16px] font-semibold leading-[150%] tracking-[0.16px] text-text-title">
                  ${subtotal}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <OptionSection
              title="Choice of Side"
              options={[
                { id: 'cheesy-grits', label: 'Cheesy Grits' },
                { id: 'chips', label: 'Chips' },
              ]}
              selectedId={sideId}
              onSelect={setSideId}
            />
            <OptionSection
              title="Sauce"
              options={[
                { id: 'cheesy-grits', label: 'Cheesy Grits' },
                { id: 'chips', label: 'Chips' },
                { id: 'bechamel', label: 'White bechamel (+$4)' },
              ]}
              selectedId={sauceId}
              onSelect={setSauceId}
            />
            <OptionSection
              title="Salad add-on"
              options={[
                { id: 'no-thanks', label: 'No thanks' },
                { id: 'caesar', label: 'Ceasar salad tray (+$12)' },
              ]}
              selectedId={saladId}
              onSelect={setSaladId}
            />
          </div>

          <section className="flex flex-col gap-3">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-left"
              onClick={() => setAdditionalInfoOpen((value) => !value)}
              aria-expanded={additionalInfoOpen}
            >
              <Minus2 width={24} height={24} className="shrink-0 text-text-title" aria-hidden />
              <span className="font-body text-[16px] font-semibold leading-[150%] tracking-[0.16px] text-text-title">
                Add additional info
              </span>
            </button>
            {additionalInfoOpen && (
              <MessageBox
                hint="This is a hint text to help user."
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                rows={5}
                resize="none"
                className="[&_textarea]:min-h-[121px]"
              />
            )}
          </section>
        </div>
      </div>
    </Modal>
  );
}
