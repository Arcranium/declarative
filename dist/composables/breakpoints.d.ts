export declare function useTailwindBreakpoints(): Record<"sm" | "md" | "lg" | "xl" | "2xl", import("vue").Ref<boolean>> & {
    greaterOrEqual: (k: import("@vueuse/shared").MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">) => import("vue").Ref<boolean>;
    smallerOrEqual: (k: import("@vueuse/shared").MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">) => import("vue").Ref<boolean>;
    greater(k: import("@vueuse/shared").MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): import("vue").Ref<boolean>;
    smaller(k: import("@vueuse/shared").MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): import("vue").Ref<boolean>;
    between(a: import("@vueuse/shared").MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">, b: import("@vueuse/shared").MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): import("vue").Ref<boolean>;
    isGreater(k: import("@vueuse/shared").MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): boolean;
    isGreaterOrEqual(k: import("@vueuse/shared").MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): boolean;
    isSmaller(k: import("@vueuse/shared").MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): boolean;
    isSmallerOrEqual(k: import("@vueuse/shared").MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): boolean;
    isInBetween(a: import("@vueuse/shared").MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">, b: import("@vueuse/shared").MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): boolean;
    current: () => import("vue").ComputedRef<string[]>;
    active(): import("vue").ComputedRef<string | undefined>;
};
