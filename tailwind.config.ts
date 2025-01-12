import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'headerFont':['var(--font-poppins)'],
      'bodyFont':['var(--font-open-sans)'],

    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        headerColor: "#F45100",
        copyrightColor:"#9C9999"
      },
    },
  },
  plugins: [],
} satisfies Config;
