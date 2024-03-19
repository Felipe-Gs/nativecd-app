import { colors } from "./src/styles/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{ts,tsx}"],
   presets: [require("nativewind/preset")],
   theme: {
      extend: {
         colors,
      },
   },
   plugins: [],
};
