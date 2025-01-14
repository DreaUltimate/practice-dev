const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                '1': '#5267df',
                '2': '#FA5959',
                '3': '#242A45',
                '4': '#9194A2',
            },
            backgroundImage: {
                main: "url('./src/assets/bg.jpg')"
            }
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
};
