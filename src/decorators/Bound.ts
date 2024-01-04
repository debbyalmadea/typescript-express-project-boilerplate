function Bound<T extends { new (...args: any[]): {} }>(target: T, context: ClassDecoratorContext) {
    if (context.kind !== "class") {
        throw new Error("@Bound can only be used on classes.");
    }

    return class extends target {
        constructor(...args: any[]) {
            super(...args);
            const methods = Object.getOwnPropertyNames(target.prototype);
            methods.forEach((method) => {
                if (method !== "constructor") {
                    target.prototype[method] = target.prototype[method].bind(this);
                }
            });
        }
    }
}

export default Bound;