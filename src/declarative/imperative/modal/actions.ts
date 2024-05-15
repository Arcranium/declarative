import * as Vue from "vue";
import {
    ImperativeModalOptions,
    imperativeModalOptionsDefaults,
    ImperativeModalOptionsFilled, ImperativeModalRenderData,
    useImperativeModalStore
} from "@lib/imperative/modal";
import {fillDefaults} from "@lib/util";
import {v4 as uuid} from "uuid";
import {ref} from "vue";

export function createModalIdentifier(identifier: string) {
    return `imperative_modal_${identifier}`;
}

export function createModal(appContext: Vue.AppContext, options: ImperativeModalOptions, showAfter: boolean | number = options.show == true) {
    const store = useImperativeModalStore();

    const filledOptions = fillDefaults<ImperativeModalOptionsFilled>(options, imperativeModalOptionsDefaults);
    if(showAfter && filledOptions.show) filledOptions.show = false;

    const identifier = uuid();
    const modalRenderData: ImperativeModalRenderData = {
        appContext: appContext,
        identifier: identifier,

        options: filledOptions
    };

    store.modals.push(ref(modalRenderData).value);

    if(showAfter) {
        setTimeout(() => {
            updateModal(identifier, {
                show: true
            });
        }, typeof showAfter == "number" ? showAfter : 0);
    }

    return identifier;
}

export function updateModal(identifier: string, options: ImperativeModalOptions) {
    const modal = getModalRenderData(identifier);
    if(!modal) return;

    modal.options = fillDefaults<ImperativeModalOptionsFilled>(options, modal.options);
}

export function getModalRenderData(identifier: string) {
    const store = useImperativeModalStore();
    return store.getModal(identifier);
}

export function destroyModal(identifier: string) {
    const store = useImperativeModalStore();
    return store.removeModalByIdentifier(identifier);
}