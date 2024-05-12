declare let __VLS_typeProps: {
    closable?: boolean;
    noBackdrop?: boolean;
    alignVertical?: "start" | "center" | "end";
    alignHorizontal?: "start" | "center" | "end";
    fullscreen?: boolean | "auto";
    screen?: "parent" | "screen";
    form?: boolean;
};
type __VLS_PublicProps = {
    modelValue?: boolean;
} & typeof __VLS_typeProps;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    closable: boolean;
    noBackdrop: boolean;
    alignVertical: string;
    alignHorizontal: string;
    fullscreen: boolean;
    screen: string;
    form: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    closable: boolean;
    noBackdrop: boolean;
    alignVertical: string;
    alignHorizontal: string;
    fullscreen: boolean;
    screen: string;
    form: boolean;
}>>>, {
    form: boolean;
    screen: "parent" | "screen";
    closable: boolean;
    noBackdrop: boolean;
    alignVertical: "center" | "start" | "end";
    alignHorizontal: "center" | "start" | "end";
    fullscreen: boolean | "auto";
}, {}>, {
    title?(_: {}): any;
    default?(_: {}): any;
    action?(_: {}): any;
}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
