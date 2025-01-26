/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'large1': '0 20px 25px -20px rgba(0, 0, 0, 0.3)',
        'large2': '0 20px 20px -20px rgba(0, 0, 0, 0.3)',
        'shadowTop': '0px 0px 50px 20px rgba(0, 0, 0, 1)',
      },
      fontSize: {
        'xxsm': '0.79rem',
        'smmd': '1.05rem',
      },
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
        'border_color2': 'var(--border_color2)',
        'bg_color1': 'var(--bg_color1)',
        'highlighted_text_color': 'var(--highlighted_text_color)',
        'text_dark-gray': 'var(--text_dark-gray)',
        'link_color': 'var(--link_color)',
        'link_color_hover': 'var(--link_color_hover)',
        'dark_link_color': 'var(--dark_link_color)',
        'dark_link_color_hover': 'var(--dark_link_color_hover)',
        'dark_link_color_hover2': 'var(--dark_link_color_hover2)',
        'link_disabled_color': 'var(--link_disabled_color)',
        'pink_color2': 'var(--pink_color2)',
        'container_color': 'var(--container_color)',
        'container_color2': 'var(--container_color2)',
        'container_color3': 'var(--container_color3)',
        'container_color4': 'var(--container_color4)',
        'container_color5': 'var(--container_color5)',
        'container_color6': 'var(--container_color6)',
        
        'default_md_text_size': 'var(--default_md_text_size)',
        'gradient_color1': 'var(--gradient_color1)',
        'gradient_color2': 'var(--gradient_color2)',
        'neon_color1': 'var(--neon_color1)',
        'neon_color2': 'var(--neon_color2)',
        
      },
      fonts: {
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
  
        'xlNavbar': '1300px',
        // => @media (min-width: 1300px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}


