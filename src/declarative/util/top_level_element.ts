export const topLevelElementIdPrefix = "$__declarative_"
export const topLevelRootElementId=  topLevelElementIdPrefix  + "root"

export function createTopLevelRootElement(tagName = "div"): HTMLElement {
    const topLevelRootElement = createTopLevelRootElementOrNull(tagName)
    if(!topLevelRootElement) throw new Error("Failed to create top level root element because document was unavailable")

    return topLevelRootElement
}

export function createTopLevelRootElementOrNull(tagName = "div"): HTMLElement | null {
    if(!document) return null

    const resolve = document.getElementById(topLevelRootElementId)
    if(resolve) return resolve

    const element = document.createElement(tagName)
    element.id = topLevelRootElementId
    element.style.position = "fixed"
    element.style.top = "0"
    element.style.left = "0"
    element.style.zIndex = "2147483647"

    document.body.appendChild(element)

    return element
}

/**
 * Create a top level element and return or throw error if document is not available
 * @param name name of the top level element
 * @param tagName tag to create the top level element
 */
export function createTopLevelElement(name: string, tagName: string = "div"): HTMLElement {
    const topLevelElement = createTopLevelElementOrNull(name, tagName)
    if(!topLevelElement) throw new Error("Failed to create top level element because document was unavailable")
    
    return topLevelElement
}

/**
 * Create a top level element and return if document is available
 * @param name name of the top level element
 * @param tagName tag to create the top level element
 */
export function createTopLevelElementOrNull(name: string, tagName: string = "div"): HTMLElement | null {
    if(!document) return null

    const root = createTopLevelRootElement(tagName)

    const id = topLevelElementIdPrefix + name
    const resolve = document.getElementById(id)
    if(resolve) return resolve

    const element = document.createElement(tagName)
    element.id = id

    root.appendChild(element)

    return element
}