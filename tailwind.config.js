/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/marbles.webp')",
                'divider-pattern': "url('/marbles2.webp')"
            }
        },
    },
    plugins: [],
}

