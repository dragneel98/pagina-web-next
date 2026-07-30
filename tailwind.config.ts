import type { Config } from "tailwindcss"

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
  ],
} satisfies Config

export default config
