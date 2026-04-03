import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'

const ProfilePreset = definePreset(Aura, {
  components: {
    button: {
      colorScheme: {
        light: {
          root: {
            primary: {
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
            },
          },
        },
        dark: {
          root: {
            primary: {
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
            },
          },
        },
      },
    },
  },
  semantic: {
    primary: {
      50:  '#fef3ee',
      100: '#fde3d4',
      200: '#fbcaad',
      300: '#f8a87b',
      400: '#ef8354',
      500: '#e8622e',
      600: '#d94a1f',
      700: '#b4371b',
      800: '#8f2e1e',
      900: '#75291c',
      950: '#3f120c',
      inverseColor: '#ffffff',
      contrastColor: '#ffffff',
    },
    colorScheme: {
      light: {
        surface: {
          0:   '#111111',
          50:  '#161616',
          100: '#1a1a1a',
          200: '#222222',
          300: '#2a2a2a',
          400: '#444444',
          500: '#666666',
          600: '#888888',
          700: '#aaaaaa',
          800: '#cccccc',
          900: '#e5e5e5',
          950: '#ffffff',
        },
        formField: {
          background: '#1a1a1a',
          disabledBackground: '#222222',
          filledBackground: '#222222',
          filledFocusBackground: '#2a2a2a',
          borderColor: '#2a2a2a',
          hoverBorderColor: '#444444',
          focusBorderColor: '{primary.400}',
          color: '#e5e5e5',
          placeholderColor: '#666666',
        },
        overlay: {
          modal: {
            background: '#1a1a1a',
            borderColor: '#2a2a2a',
            color: '#e5e5e5',
          },
          select: {
            background: '#1a1a1a',
            borderColor: '#2a2a2a',
            color: '#e5e5e5',
          },
          popover: {
            background: '#1a1a1a',
            borderColor: '#2a2a2a',
            color: '#e5e5e5',
          },
        },
        content: {
          background: '#1a1a1a',
          hoverBackground: '#222222',
          borderColor: '#2a2a2a',
          color: '#e5e5e5',
          hoverColor: '#ffffff',
        },
        navigation: {
          item: {
            focusBackground: '#222222',
            activeBackground: '#222222',
            color: '#e5e5e5',
            focusColor: '#ffffff',
            activeColor: '#ffffff',
          },
        },
        highlight: {
          background: '{primary.400}',
          color: '#ffffff',
          focusBackground: '{primary.500}',
          focusColor: '#ffffff',
        },
        mask: {
          background: 'rgba(0, 0, 0, 0.7)',
          color: '#e5e5e5',
        },
      },
      dark: {
        surface: {
          0:   '#111111',
          50:  '#161616',
          100: '#1a1a1a',
          200: '#222222',
          300: '#2a2a2a',
          400: '#444444',
          500: '#666666',
          600: '#888888',
          700: '#aaaaaa',
          800: '#cccccc',
          900: '#e5e5e5',
          950: '#ffffff',
        },
        formField: {
          background: '#1a1a1a',
          disabledBackground: '#222222',
          filledBackground: '#222222',
          filledFocusBackground: '#2a2a2a',
          borderColor: '#2a2a2a',
          hoverBorderColor: '#444444',
          focusBorderColor: '{primary.400}',
          color: '#e5e5e5',
          placeholderColor: '#666666',
        },
        overlay: {
          modal: {
            background: '#1a1a1a',
            borderColor: '#2a2a2a',
            color: '#e5e5e5',
          },
          select: {
            background: '#1a1a1a',
            borderColor: '#2a2a2a',
            color: '#e5e5e5',
          },
          popover: {
            background: '#1a1a1a',
            borderColor: '#2a2a2a',
            color: '#e5e5e5',
          },
        },
        content: {
          background: '#1a1a1a',
          hoverBackground: '#222222',
          borderColor: '#2a2a2a',
          color: '#e5e5e5',
          hoverColor: '#ffffff',
        },
        navigation: {
          item: {
            focusBackground: '#222222',
            activeBackground: '#222222',
            color: '#e5e5e5',
            focusColor: '#ffffff',
            activeColor: '#ffffff',
          },
        },
        highlight: {
          background: '{primary.400}',
          color: '#ffffff',
          focusBackground: '{primary.500}',
          focusColor: '#ffffff',
        },
        mask: {
          background: 'rgba(0, 0, 0, 0.7)',
          color: '#e5e5e5',
        },
      },
    },
  },
})

export function setupPrimeVue(app) {
  app.use(PrimeVue, {
    theme: {
      preset: ProfilePreset,
      options: {
        prefix: 'p',
        darkModeSelector: '.dark-mode',
        cssLayer: false,
      },
    },
  })
  app.use(ToastService)
}
