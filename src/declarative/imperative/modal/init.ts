import * as Vue from "vue";
import {createTopLevelElement} from "@lib/util";
import {ImperativeModalRenderer} from "@lib/imperative";

export function initializeImperativeModalRenderer(appContext: Vue.AppContext) {
    const mount = createTopLevelElement("imperative");

    const vNode = Vue.createVNode(ImperativeModalRenderer);
    vNode.appContext = appContext;
    Vue.render(vNode, mount);
}