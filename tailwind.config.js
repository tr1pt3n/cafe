/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/img/img-hero.png')",
        'hero-cf': "url('./assets/img/bg_img_hero.svg')",
        'hero-cf-2': "url('./assets/img/bg_img_hero2.png')",
        'rec': "url('./assets/img/Rectangle.png')",
        'about': "url('./assets/img/about.png')",
        'testi': "url('./assets/img/testimonial.png')",
        'contact': "url('./assets/img/contact.png')"
      }
    },
  },
  plugins: [],
}