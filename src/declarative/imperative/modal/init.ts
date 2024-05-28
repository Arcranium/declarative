import { AppContext, render, createVNode } from "vue";
import {createTopLevelElement} from "@lib/util";
import {ImperativeModalRenderer} from "@lib/imperative";

export function initializeImperativeModalRenderer(appContext: AppContext) {
    const mount = createTopLevelElement("imperative");

    const vNode = createVNode(ImperativeModalRenderer);
    vNode.appContext = appContext;
    render(vNode, mount);
}