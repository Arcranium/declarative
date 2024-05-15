import * as Vue from "vue";

export type ImperativeModalRenderData = {
    appContext: Vue.AppContext
    identifier: string

    options: ImperativeModalOptionsFilled
};

export type ImperativeModalOptionsFilled = {
    show: boolean,

    title: string,
    description: string,

    loading: boolean,
    loadingColor: string | null,

    deniable: boolean,
    acceptable: boolean,

    denyLabel: string,
    acceptLabel: string,

    onDenyRequest: () => boolean,

    onDeny: () => void,
    onAccept: () => void,
}

export type ImperativeModalOptions = Partial<ImperativeModalOptionsFilled>;

export const imperativeModalOptionsDefaults: ImperativeModalOptionsFilled = {
    show: false,

    title: "",
    description: "",

    loading: false,
    loadingColor: null,

    deniable: false,
    acceptable: false,

    denyLabel: "Deny",
    acceptLabel: "Accept",

    onDenyRequest: () => true,

    onDeny: () => {},
    onAccept: () => {}
}