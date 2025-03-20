const hasOwn = {}.hasOwnProperty;

export function noop() {
    return null;
}

export function formatDollars(value: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
}

export function classNames(...args: any[]): string {
    let classes: string[] = [];

    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        if (!arg) continue;

        let argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        } else if (Array.isArray(arg)) {
            if (arg.length) {
                let inner = classNames.apply(null, arg);
                if (inner) {
                    classes.push(inner);
                }
            }
        } else if (argType === 'object') {
            if (arg.toString !== Object.prototype.toString) {
                classes.push(arg.toString());
            } else {
                for (let key in arg) {
                    if (hasOwn.call(arg, key) && arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }

    return classes.join(' ');
}

export const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
    });
};