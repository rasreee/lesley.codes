export const isBrowser =
  typeof window !== 'undefined' &&
  typeof navigator !== 'undefined' &&
  typeof document !== 'undefined';

export const isProduction = () => process.env.NODE_ENV === 'production';

export const isRegisterViewEnabled = () => {
  return isProduction() || process.env.NEXT_PUBLIC_REGISTER_VIEWS === 'true';
};

export const isRegisterSearchEnabled = () => {
  return isProduction() || process.env.NEXT_PUBLIC_REGISTER_SEARCHES === 'true';
};
