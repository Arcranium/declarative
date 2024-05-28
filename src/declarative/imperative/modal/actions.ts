import * as Vue from "vue";
import {
    ImperativeModalOptions,
    imperativeModalOptionsDefaults,
    ImperativeModalOptionsFilled, ImperativeModalRenderData, ImperativeModalState
} from "@lib/imperative/modal";
import {fillDefaults} from "@lib/util";
import {v4 as uuid} from "uuid";

export function createModalIdentifier(identifier: string) {
    return `imperative_modal_${identifier}`;
}

export function createModal(options: ImperativeModalOptions, showAfter: boolean | number = options.show == true) {
    const filledOptions = fillDefaults<ImperativeModalOptionsFilled>(options, imperativeModalOptionsDefaults);
    if(showAfter && filledOptions.show) filledOptions.show = false;

    const identifier = uuid();
    const modalRenderData: ImperativeModalRenderData = {
        identifier: identifier,

        options: filledOptions
    };

    ImperativeModalState.modals.push(modalRenderData);

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
    return ImperativeModalState.get(identifier);
}

// TODO: Fix transition not triggered due to element life even if immediate is false
export function destroyModal(identifier: string, immediate: boolean = false) {
    if(immediate) {
        return ImperativeModalState.removeByIdentifier(identifier);
    } else {
        const modal = ImperativeModalState.get(identifier);
        if(!modal) return false;

        modal.options = {
            ...modal.options,
            show: false
        };

        setTimeout(() => {
            ImperativeModalState.remove(modal);
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