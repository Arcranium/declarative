import plugin from "tailwindcss/plugin";

export const declarativeTailwindPlugin = plugin(function ({ addUtilities }) {
    addUtilities({
        ".effect": {
            '@apply hover:ring-2 ring-offset-2 active:ring-4 focus:ring-2 invalid:ring-red-400 invalid:ring-2 transition-all': {}
        }
    })
});