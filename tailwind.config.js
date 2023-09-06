/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      
      'default_text_size': 'var(--default_text_size)',
      'border_color1': 'var(--border_color1)',
      'bg_color1': 'var(--bg_color1)',
      'highlighted_text_color': 'var(--highlighted_text_color)',
      'link_color': 'var(--link_color)',
      'link_color_hover': 'var(--link_color_hover)',
      'link_disabled_color': 'var(--link_disabled_color)',
      'container_color': 'var(--container_color)',
      'container_color2': 'var(--container_color2)',
    },
  },
  plugins: [],
}


