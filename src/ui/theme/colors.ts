const palette = {
  primary: `#33CCFF` /*	Primary brand color for links, buttons, etc. */,
  secondary: `#884D9F` /*	A secondary brand color for alternative styling */,
  secondaryDark: `#472E50` /*	A secondary brand color for alternative styling */,
  bg: `#111111` /*	Body background color */,
  muted: `#333333` /*	A faint color for backgrounds, borders, and accents that do not require high contrast with the background color */,
  mutedLight: `#525252` /*	A faint color for backgrounds, borders, and accents that do not require high contrast with the background color */,
  text: `#eaeaea` /* Body foreground color */,
  textMd: `#cccccc` /* Body foreground color */,
  hint: `#ADADAD`,
  hintMd: `#8F8F8F`,
  hintDark: `#666666`,
  accent: `#A596ED` /* A contrast color for emphasizing UI */,
  accentLight: `#C3B9F3`,
  highlight: `#37173B` /* 	A background color for highlighting text */,
}
export const colors = {
  ...palette,
  link: {
    idle: palette.hintMd,
    hover: palette.textMd,
    active: palette.text,
  },
}
