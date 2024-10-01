import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        xs: "320px",
        md: "768px",
        lg: "1024px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        border: {
          DEFAULT: "var(--border)",
          hoverStroke: "var(--Hover-and-stroke)",
        },
        input: {
          DEFAULT: "var(--input-field-bg)",
          foreground: "var(--gray)",
        },
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        subtitle: "var(--Hover-and-stroke)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--white)",
          hoverBg: "var(--component-selected-background)",
          hoverForeground: "var(--component-selected-foreground)",
        },
        interaction: {
          DEFAULT: "var(--component-hover-background)",
          hoverBg: "var(--component-hover-background)",
          hoverForeground: "var(--component-hover-foreground)",
          selectedBg: "var(--component-selected-background)",
          selectedForeground: "var(--component-selected-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          hoverBg: "var(--component-selected-background)",
          hoverForeground: "var(--component-selected-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        boxShadow: {
          DEFAULT: "var(--box-shadow)",
          sm: "var(--box-shadow-sm)",
        },
      },
      borderWidth: {
        sm: "0.5px",
        md: "1px",
      },
      borderRadius: {
        sm: "var(--radius10)",
        md: "var(--radius20)",
        lg: "var(--radius30)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "12": "1.2rem", // 12px
        "14": "1.4rem", // 14px
        "16": "1.6rem", // 16px
        "18": "1.8rem", // 18px
        "20": "2.0rem", // 20px
        "24": "2.4rem", // 24px
        "32": "3.2rem", // 32px
        "48": "4.8rem", // 48px
        "56": "5.6rem", // 56px
        "64": "6.4rem", // 64px
        heading1: "23px",
        heading2: "19px",
        body1: "15px",
        body2: "12px",
        btnLg: "15px",
        btnSm: "12px",
        bodySm: "10px",
        link: "12px",
      },
      fontWeight: {
        medium: "500",
        extrabold: "800",
        black: "900",
        heading1: "500",
        heading2: "500",
        body1: "400",
        body2: "400",
        btnLg: "500",
        btnSm: "500",
        bodySm: "300",
        link: "400",
      },
      lineHeight: {
        none: "1",
        heading1: "140%",
        heading2: "normal",
        body1: "140%",
        body2: "140%",
        btnLg: "140%",
        btnSm: "140%",
        bodySm: "normal",
        link: "140%",
        normal: "140%",
      },
      fontStyle: {
        normal: "normal",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
