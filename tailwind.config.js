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
      
      'border_color1': 'var(--border_color1)',
      'bg_color1': 'var(--bg_color1)',
      'highlighted_text_color': 'var(--highlighted_text_color)',
      'link_color': 'var(--link_color)',
      'link_color_hover': 'var(--link_color_hover)',
      'link_disabled_color': 'var(--link_disabled_color)',
      'container_color': 'var(--container_color)',
      'container_color2': 'var(--container_color2)',
      'container_color3': 'var(--container_color3)',
      
      'default_md_text_size': 'var(--default_md_text_size)',
      'default_sm_text_size': 'var(--default_sm_text_size)',
      'gradient_color1': 'var(--gradient_color1)',
      'gradient_color2': 'var(--gradient_color2)',
      
      'normal-font-family1': 'var(--normal-font-family)',
      'styled-font-family1': 'var(--styled-font-family1)',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
            
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lgxl': '1070px',
      // => @media (min-width: 1070px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}


