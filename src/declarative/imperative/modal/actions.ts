import * as Vue from "vue";
import {
    ImperativeModalOptions,
    imperativeModalOptionsDefaults,
    ImperativeModalOptionsFilled, ImperativeModalRenderData,
    useImperativeModalStore
} from "@lib/imperative/modal";
import {fillDefaults} from "@lib/util";
import {v4 as uuid} from "uuid";

export function createModalIdentifier(identifier: string) {
    return `imperative_modal_${identifier}`;
}

export function createModal(options: ImperativeModalOptions, showAfter: boolean | number = options.show == true) {
    const store = useImperativeModalStore();

    const filledOptions = fillDefaults<ImperativeModalOptionsFilled>(options, imperativeModalOptionsDefaults);
    if(showAfter && filledOptions.show) filledOptions.show = false;

    const identifier = uuid();
    const modalRenderData: ImperativeModalRenderData = {
        identifier: identifier,

        options: filledOptions
    };

    store.modals.push(modalRenderData);

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

// TODO: Fix transition not triggered due to element life even if immediate is false
export function destroyModal(identifier: string, immediate: boolean = false) {
    const store = useImperativeModalStore();
    if(immediate) {
        return store.removeModalByIdentifier(identifier);
    } else {
        const modal = store.getModal(identifier);
        if(!modal) return false;

        modal.options = {
            ...modal.options,
            show: false
        };

        setTimeout(() => {
            store.removeModal(modal);
        });
    }
}

export function showModal(identifier: string, show: boolean = true) {
    updateModal(identifier, {
        show: show
    });
}

export function hideModal(identifier: string) {
    showModal(identifier, false);
}