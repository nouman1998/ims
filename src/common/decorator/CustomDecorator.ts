export const Trim = (target: any, propertyName: string) => {
    let trimmedValue: string = target[propertyName];
    Object.defineProperty(target, propertyName, {
        set: (value: string) => {
            trimmedValue = value.trim()
        },
        get: () => trimmedValue
    });
}