export const base = 18;

export function describe(value) {
  return `module:${value}:${base + value}`;
}
