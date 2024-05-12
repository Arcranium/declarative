export {};

declare global {
    interface Boolean {
        ifTrue<T, R = boolean>(value: T, or?: R): T | R;
        ifFalse<T, R = boolean>(value: T, or?: R): T | R;
        runIfTrue<R>(callback: () => R): R | null;
        runIfFalse<R>(callback: () => R): R | null;
    }
}

Boolean.prototype.ifTrue = function<T, R = boolean>(value: T, or: R = false as R) {
    return this ? value : or;
}

Boolean.prototype.ifFalse = function<T, R = boolean>(value: T, or: R = true as R) {
    return !this ? value : or;
}

Boolean.prototype.runIfTrue = function<R>(callback: () => R) {
    return this ? callback() : null;
}

Boolean.prototype.runIfFalse = function<R>(callback: () => R) {
    return !this ? callback() : null;
}