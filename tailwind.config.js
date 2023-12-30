import keepPreset from 'keep-react/preset'
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/keep-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  presets: [keepPreset]
}

// import daisyui from 'daisyui'

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {}
//   }
// plugins: [daisyui],
// daisyui: {
//   themes: ['light']
// }
// }
