export const topLevelElementIdPrefix = "$__declarative_";
export const topLevelRootElementId=  topLevelElementIdPrefix  + "root";

export function createTopLevelRootElement(tagName = "div"): HTMLElement {
    const resolve = document.getElementById(topLevelRootElementId);
    if(resolve) return resolve;

    const element = document.createElement(tagName);
    element.id = topLevelRootElementId;
    element.style.position = "fixed";
    element.style.top = "0";
    element.style.left = "0";
    element.style.zIndex = "2147483647";

    document.body.appendChild(element);

    return element;
}

export function createTopLevelElement(name: string, tagName: string = "div"): HTMLElement {
    const root = createTopLevelRootElement(tagName);

    const id = topLevelElementIdPrefix + name;
    const resolve = document.getElementById(id);
    if(resolve) return resolve;

    const element = document.createElement(tagName);
    element.id = id;

    root.appendChild(element);

    return element;
}