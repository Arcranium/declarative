import {defineStore} from "pinia";
import {ImperativeModalRenderData} from "@lib/imperative";

export type State = {
    modals: ImperativeModalRenderData[]
}

export const useImperativeModalStore = defineStore("imperative-modals", {
    state: (): State => {
        return {
            modals: []
        };
    },
    actions: {
        addModal(modal: ImperativeModalRenderData) {
            this.modals.push(modal);
        },
        getModal(identifier: string): ImperativeModalRenderData | undefined {
            return this.modals.find((it) => it.identifier == identifier);
        },
        removeModal(modal: ImperativeModalRenderData) {
            this.modals.splice(this.modals.indexOf(modal));
        },
        removeModalByIdentifier(identifier: string): boolean {
            const modal = this.getModal(identifier);
            if(!modal) return false;

            this.removeModal(modal);
            return true;
        }
    }
});