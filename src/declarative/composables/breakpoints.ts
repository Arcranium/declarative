import {useBreakpoints} from "@vueuse/core";
import {inject} from "vue";

export function useTailwindBreakpoints() {
    const config = inject<any>("tailwind-config");
    const screens = config?.theme?.screens;
    if(!screens) {
        return useBreakpoints({
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        })
    }

    function parse(input: string) {
        return parseInt(input.replace("px", ""));
    }

    return useBreakpoints({
        sm: parse(screens.sm),
        md: parse(screens.sm),
        lg: parse(screens.sm),
        xl: parse(screens.sm),
        '2xl': parse(screens["2xl"]),
    });
}