/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./hausdurchsuchung.html", "./PlanSeeStadt.html", "./WobotkaVR.html", "./SockPuppetScience.html"],
    theme: {
        colors: {
            'green': '#15db00',
            'lightGreen': '#a5e89d',
            'blue': '#00c3ff',
            'darkBlue': '#007aaa',
            'white': '#ffffff',
            'black': '#000000',
        },
        extend: {
            fontFamily: {
                sans: ['Monsterrat', 'sans-serif'],
            },
            scale: {
                '25': '0.25',
                '10': '0.1'
            },
            scrollMargin: {
                'mobile-header': '70px',
                'desktop-header': '80px'
            },
            rotate: {
                '48': '48deg'
            },
            spacing: {
                'desktop-header': '3rem',
                'desktop-header-spacer': '3rem',
                'mobile-header': '3rem',
                'mobile-header-spacer': '3rem'
            },
            sizes: {
                'mobile-small': '300px'
            },
            fontSize: {
                '5xl': '5rem',
            }
        },
    },
    plugins: [],
}

