export namespace TextRules {
    export type Validator = (input: string) => boolean;

    export const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    export function requireMatchTo(to: string): Validator {
        return (input: string) => {
            return input == to;
        }
    }

    export function requireNoBlank(input: string) {
        return input.trim() != "";
    }

    export function requireNoEmpty(input: string) {
        return input.length > 0;
    }

    export function requireAlphabetLowercases(input: string) {
        return /^[a-z]+$/.test(input);
    }

    export function requireAlphabetUppercases(input: string) {
        return /^[A-Z]+$/.test(input);
    }

    export function requireAlphabets(input: string) {
        return /^[a-zA-Z]+$/.test(input);
    }

    export function requireAlphanumerics(input: string) {
        return /^[a-zA-Z0-9]+$/.test(input);
    }

    export function requireRegEx(regex: RegExp): Validator {
        return (input: string) => {
            return regex.test(input);
        }
    }

    export function requireGeneralIdentifier(allow_uppercase: boolean = false, allow_dash: boolean = false): Validator {
        if (allow_uppercase) {
            if (!allow_dash) return requireRegEx(/^[a-zA-Z0-9_]+$/);
            else return requireRegEx(/^[a-zA-Z0-9_\-]+$/);
        }
        else {
            if (!allow_dash) return requireRegEx(/^[a-z0-9_]+$/);
            else return requireRegEx(/^[a-z0-9_\-]+$/);
        }
    }

    export function requireEmail(input: string) {
        return requireRegEx(regexEmail)(input);
    }

    export function requireMinimum(minimum: number): Validator {
        return (input: string) => {
            return input.length >= minimum;
        }
    }

    export function requireMaximum(maximum: number): Validator {
        return (input: string) => {
            return input.length <= maximum;
        }
    }

    export function requireRange(minimum: number, maximum: number): Validator {
        return (input: string) => {
            return requireMinimum(minimum)(input) && requireMaximum(maximum)(input);
        }
    }
}