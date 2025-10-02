import tailwindcss from '@tailwindcss/postcss7-compat';  // Corrected import
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
  ],
};
