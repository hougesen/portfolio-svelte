/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                black: "#101010",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
