
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        seasalt: {
          DEFAULT: "#f8f9fa",
          100: "#29323a",
          200: "#536475",
          300: "#8496a8",
          400: "#bfc8d1",
          500: "#f8f9fa",
          600: "#fafbfc",
          700: "#fbfcfc",
          800: "#fdfdfd",
          900: "#fefefe"
        },
        "anti-flash": {
          DEFAULT: "#e9ecef",
          100: "#282f37",
          200: "#505f6e",
          300: "#7c8ea0",
          400: "#b3bec8",
          500: "#e9ecef",
          600: "#eef1f3",
          700: "#f3f4f6",
          800: "#f7f8f9",
          900: "#fbfbfc"
        },
        platinum: {
          DEFAULT: "#dee2e6",
          100: "#272d34",
          200: "#4e5b67",
          300: "#788899",
          400: "#abb6c0",
          500: "#dee2e6",
          600: "#e5e9ec",
          700: "#eceef1",
          800: "#f2f4f5",
          900: "#f9f9fa"
        },
        onyx: {
          DEFAULT: "#343a40",
          100: "#0b0c0d",
          200: "#15171a",
          300: "#202327",
          400: "#2a2f34",
          500: "#343a40",
          600: "#58626c",
          700: "#7d8995",
          800: "#a9b0b8",
          900: "#d4d8dc"
        },
        eerie: {
          DEFAULT: "#212529",
          100: "#070808",
          200: "#0e0f11",
          300: "#141719",
          400: "#1b1f22",
          500: "#212529",
          600: "#49525b",
          700: "#6f7d8b",
          800: "#9fa8b2",
          900: "#cfd4d8"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
