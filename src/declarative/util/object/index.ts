export function fillDefaults<T>(optional: Partial<T>, defaults: T): T {
    return Object.assign({}, defaults, optional);
}