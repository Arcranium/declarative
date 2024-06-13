import {ImperativeModalRenderData} from "@lib/imperative";
import {reactive} from "vue";

export namespace ImperativeModalState {

    export const modals = reactive<ImperativeModalRenderData[]>([])

    export function add(modal: ImperativeModalRenderData): void {
        modals.push(modal)
    }

    export function get(identifier: string): ImperativeModalRenderData | undefined {
        return modals.find((it) => it.identifier == identifier);
    }

    export function remove(modal: ImperativeModalRenderData) {
        modals.splice(modals.indexOf(modal));
    }
    export function removeByIdentifier(identifier: string): boolean {
        const modal = get(identifier);
        if(!modal) return false;

        remove(modal);
        return true;
    }
}