import {computed, inject, ModelRef, onMounted, provide, readonly, Ref, ref} from "vue";

export type SelectCoreType = {
    update: (v: any) => void
}

export function useSelectCore(
    current: ModelRef<any>,
    multiselect: boolean = false
): SelectCoreType {
    function update(value: any) {
        if (!multiselect) {
            // Single select
            current.value = value;
            return;
        }

        if (!current.value) {
            // No prev value
            current.value = [value];
            return;
        }

        if (Array.isArray(current.value)) {
            if (current.value.includes(value)) {
                current.value = current.value.toSpliced(current.value.indexOf(value), 1);
                return;
            }

            current.value.push(value);
            current.value = [...current.value];
            return;
        }

        current.value = [current.value, value];
    }

    provide('select-multiselect', multiselect);
    provide('select-current', current);
    provide('select-update', update);

    return {
        update
    }
}

export function useSelectOptionCore(
    value: any,
    defaultOption: boolean = false
) {
    const multiselect = inject<boolean>("select-multiselect");
    const current = inject<Ref<any>>("select-current");
    const select = inject<(value: any) => void>("select-update");

    if(!current) return null;

    onMounted(() => {
        if(defaultOption && select) {
            select(value);
        }
    });

    const selected = computed(() => {
        if(!current?.value)
            return false;

        if(Array.isArray(current.value)) {
            return current.value.includes(value);
        } else {
            return current.value == value;
        }
    });

    return {
        selected,
        multiselect,
        current,
        select
    }
}