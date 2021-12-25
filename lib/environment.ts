export const isProduction = () => process.env.NODE_ENV === 'production';

export const isRegisterViewsEnabled = () => {
  return isProduction() || process.env.NEXT_PUBLIC_REGISTER_VIEWS === 'true';
};
