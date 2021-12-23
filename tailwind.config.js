const { spacing, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './ui/**/*.tsx', './layouts/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)',
        'gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
        },

        'zinc': {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b'
        },
        'onyx': { 900: '#1C1F21', 800: '#262A2C', 700: '#2F3437', 600: '#3C4144', 500: '#42494D' },
        'cultured': '#F1F1EF',
        'cerulean': { 500: '#2DAADC', 600: '#2193C0', 700: '#1E85AE' }
      },
      fontFamily: {
        sans: ['IBM Plex Sans', ...fontFamily.sans]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'color': theme('colors.gray.700'),
            'a': {
              'color': theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700')
              },
              'code': { color: theme('colors.blue.400') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            'thead': {
              borderBottomColor: theme('colors.gray.200')
            },
            'code': { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            'color': theme('colors.gray.200'),
            'a': {
              'color': theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600')
              },
              'code': { color: theme('colors.blue.400') }
            },
            'blockquote': {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300')
            },
            'h2,h3,h4': {
              'color': theme('colors.gray.100'),
              'scroll-margin-top': spacing[32]
            },
            'hr': { borderColor: theme('colors.gray.700') },
            'ol': {
              li: {
                '&:before': { color: theme('colors.gray.500') }
              }
            },
            'ul': {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') }
              }
            },
            'strong': { color: theme('colors.gray.100') },
            'thead': {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.600')
            },
            'tbody': {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')]
}
