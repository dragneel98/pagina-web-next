import type { Config } from "tailwindcss"
import daisyui from 'daisyui';

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#50fa7b", // Verde Matrix
        secondary: "#1f2937",
        accent: "#f43f5e",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#50fa7b",
          "secondary": "#1f2937",
          "accent": "#f43f5e",
          "neutral": "#1f2937",
          "base-100": "#ffffff",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    logs: true,
    rtl: false,
  },
} satisfies Config

export default config
