declare let __VLS_typeProps: {
    size: "small" | "medium" | "large";
    placeholder: string;
    validity?: null | string | boolean;
};
type __VLS_PublicProps = {
    modelValue?: any;
} & typeof __VLS_typeProps;
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    size: string;
    placeholder: string;
    validity: null;
}>, {
    inputRef: import("vue").Ref<HTMLInputElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    size: string;
    placeholder: string;
    validity: null;
}>>>, {
    size: "small" | "medium" | "large";
    placeholder: string;
    validity: string | boolean | null;
}, {}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
