/** Figma Input Field component set `99:960` — State property */
export type InputFieldState = 'default' | 'ghost' | 'filled';

export function resolveInputFieldState(
  state: InputFieldState | undefined,
  hasValue: boolean,
): InputFieldState {
  if (state) return state;
  return hasValue ? 'filled' : 'default';
}

/** Input value typography — default `#68707C`, ghost `#B2B8C1`, filled `#29344A` */
export function inputFieldValueClassName(resolvedState: InputFieldState): string {
  switch (resolvedState) {
    case 'ghost':
      return 'text-text-caption';
    case 'filled':
      return 'text-text-body';
    default:
      return 'text-text-subtitle';
  }
}
