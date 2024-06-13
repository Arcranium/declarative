export type ImperativeModalRenderData = {
    identifier: string

    options: ImperativeModalOptionsFilled
};

export type ImperativeModalOptionsFilled = {
    show: boolean,

    title: string,
    description: string,

    loading: boolean,
    loadingColor: string | null,

    closable: boolean | (() => boolean),
    deniable: boolean,
    acceptable: boolean,

    closeOnDeny: boolean,
    closeOnAccept: boolean

    denyLabel: string,
    acceptLabel: string,

    denyDisabled: boolean,
    acceptDisabled: boolean,

    onDenyRequest: () => boolean,

    onClose: () => void,
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

    closable: true,
    deniable: false,
    acceptable: false,

    closeOnDeny: true,
    closeOnAccept: true,

    denyLabel: "Deny",
    acceptLabel: "Accept",

    denyDisabled: false,
    acceptDisabled: false,

    onDenyRequest: () => true,

    onClose: () => {},
    onDeny: () => {},
    onAccept: () => {}
}