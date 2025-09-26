/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./hausdurchsuchung.html", "./PlanSeeStadt.html", "./WobotkaVR.html", "./SockPuppetScience.html"],
    theme: {
        patterns: {
            opacities: {
                100: "1",
                80: ".80",
                60: ".60",
                40: ".40",
                20: ".20",
                10: ".10",
                5: ".05",
            },
            sizes: {
                1: "0.25rem",
                2: "0.5rem",
                4: "1rem",
                6: "1.5rem",
                8: "2rem",
                16: "4rem",
                20: "5rem",
                24: "6rem",
                32: "8rem",
                40: "10rem",
                48: "12rem",
                64: "16rem",
            }
        },
        colors: {
            'white': '#ffffff',
            'black': '#000000',
            'offWhite': '#fffcf8',
            'red': '#ff0000',
            'yellow': '#ffff00',
            'blue': '#0000ff',
            'green': '#00ff00',
            'pastelRed': '#e05555',
            'pastelRedDark': '#CF3232FF',
            'pastelGreen': '#A3C89EFF',
            'pastelGreenDark': '#7AB172FF',
            'pastelPurple': '#8B72B3FF',
            'pastelPurpleLight': '#B7A1DAFF',
            'pastelBlueExtraLight': '#DCE6F1FF',
            'pastelBlueLight': '#bcccdc',
            'pastelBlueDark': '#1A5D9FFF',
            'pastelYellow': '#E8C141FF',
        },
        extend: {
            fontFamily: {
                sans: ['Monsterrat', 'sans-serif'],
                home: ['HomeSweetHome', 'HomeSweetHome'],
                needle: ['NeedleWorkPerfect', 'NeedleWorkPerfect'],
                dashed: ['Quicksand', 'Quicksand'],
                stitch: ['SuperStitch', 'SuperStitch'],
                dotted: ['PWDottedFont', 'PWDottedFont'],
                pis: ['PiS_stutter', 'PiS_stutter'],
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
    plugins: [
        require('tailwindcss-bg-patterns'),
    ],
}

