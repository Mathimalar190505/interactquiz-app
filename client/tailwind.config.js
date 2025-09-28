module.exports = {
  // The 'content' section is CRUCIAL. It tells Tailwind which files 
  // to scan for utility classes (like 'bg-white', 'flex', etc.)
  content: [
    // This pattern covers all files in the 'src' directory 
    // ending with .js, .jsx, .ts, or .tsx.
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // You can customize colors, fonts, and breakpoints here if needed.
    extend: {},
  },
  plugins: [],
}
