import { radii } from './border';
import { colors } from './colors';
import { shadows } from './shadow';
import { spacing } from './spacing';
import { typography } from './typography';

export const sharedTheme = {
  colors,
  spacing,
  ...typography,
  radii,
  shadows
};
