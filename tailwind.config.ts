import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        'pizza-red': 'hsl(var(--pizza-red))',
        'pizza-cream': 'hsl(var(--pizza-cream))',
        'pizza-orange': 'hsl(var(--pizza-orange))',
        'pizza-gold': 'hsl(var(--pizza-gold))',
        'pizza-warm': 'hsl(var(--pizza-warm))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.8'
          },
          '50%': {
            transform: 'translateY(-15px) rotate(5deg)',
            opacity: '1'
          }
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 30px hsla(var(--pizza-orange), 0.3)',
            transform: 'scale(1)'
          },
          '50%': {
            boxShadow: '0 0 50px hsla(var(--pizza-orange), 0.5)',
            transform: 'scale(1.02)'
          }
        },
        drift: {
          '0%, 100%': {
            transform: 'translateX(0px) translateY(0px) rotate(0deg)'
          },
          '25%': {
            transform: 'translateX(10px) translateY(-10px) rotate(5deg)'
          },
          '50%': {
            transform: 'translateX(5px) translateY(-20px) rotate(-3deg)'
          },
          '75%': {
            transform: 'translateX(-5px) translateY(-10px) rotate(3deg)'
          }
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        'slide-down': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 4s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite alternate',
        drift: 'drift 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'slide-down': 'slide-down 1s ease-out forwards'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
