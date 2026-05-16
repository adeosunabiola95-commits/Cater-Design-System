import type { InputHTMLAttributes } from 'react';

/** Semantic input context — sets `type`, keyboard, autocomplete, and value filtering. */
export type InputFieldKind =
  | 'text'
  | 'name'
  | 'email'
  | 'phone'
  | 'url'
  | 'search'
  | 'amount'
  | 'number';

type KindConfig = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'inputMode' | 'autoComplete' | 'autoCapitalize' | 'autoCorrect' | 'spellCheck' | 'enterKeyHint'
>;

const KIND_CONFIG: Record<InputFieldKind, KindConfig> = {
  text: {
    type: 'text',
    autoComplete: 'off',
    enterKeyHint: 'next',
  },
  name: {
    type: 'text',
    autoComplete: 'name',
    autoCapitalize: 'words',
    enterKeyHint: 'next',
  },
  email: {
    type: 'email',
    inputMode: 'email',
    autoComplete: 'email',
    autoCapitalize: 'none',
    autoCorrect: 'off',
    spellCheck: false,
    enterKeyHint: 'next',
  },
  phone: {
    type: 'tel',
    inputMode: 'tel',
    autoComplete: 'tel',
    autoCapitalize: 'none',
    autoCorrect: 'off',
    spellCheck: false,
    enterKeyHint: 'done',
  },
  url: {
    type: 'url',
    inputMode: 'url',
    autoComplete: 'url',
    autoCapitalize: 'none',
    autoCorrect: 'off',
    spellCheck: false,
    enterKeyHint: 'go',
  },
  search: {
    type: 'search',
    inputMode: 'search',
    autoComplete: 'off',
    enterKeyHint: 'search',
  },
  amount: {
    type: 'text',
    inputMode: 'decimal',
    autoComplete: 'transaction-amount',
    enterKeyHint: 'done',
  },
  number: {
    type: 'text',
    inputMode: 'numeric',
    autoComplete: 'off',
    enterKeyHint: 'done',
  },
};

/** Default placeholders when none is provided. */
export const INPUT_FIELD_KIND_PLACEHOLDER: Partial<Record<InputFieldKind, string>> = {
  email: 'name@example.com',
  phone: '+1 (555) 000-0000',
  url: 'https://example.com',
  search: 'Search…',
  amount: '0.00',
  number: '0',
};

export function getInputFieldKindAttributes(
  kind: InputFieldKind | undefined,
  overrides: InputHTMLAttributes<HTMLInputElement> = {},
): InputHTMLAttributes<HTMLInputElement> {
  if (!kind) return overrides;
  return { ...KIND_CONFIG[kind], ...overrides };
}

/** Restrict typed characters to what each field context allows. */
export function sanitizeInputFieldValue(kind: InputFieldKind | undefined, value: string): string {
  if (!kind) return value;

  switch (kind) {
    case 'email':
      return value.replace(/\s/g, '');
    case 'phone':
      return value.replace(/[^\d+\s().-]/g, '');
    case 'amount': {
      let next = value.replace(/[^\d.,$]/g, '');
      const parts = next.replace(/,/g, '').split('.');
      if (parts.length > 2) {
        next = `${parts[0]}.${parts.slice(1).join('')}`;
      }
      return next;
    }
    case 'number':
      return value.replace(/\D/g, '');
    case 'name':
      return value.replace(/[^a-zA-ZÀ-ÿ\s'.-]/g, '');
    case 'url':
    case 'search':
    case 'text':
    default:
      return value;
  }
}
