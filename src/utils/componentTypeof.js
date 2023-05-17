export function isClassComponent(component) {
    return (
        typeof component === 'function' && 
        !!component.prototype.isReactComponent
    )
}

export function isFunctionComponent(component) {
    return (
        typeof component === 'function' && 
        String(component).includes('return React.createElement')
    )
}

export function isReactComponent(component) {
    console.log("entre")
    return (
        isClassComponent(component) || 
        isFunctionComponent(component)
    )
}