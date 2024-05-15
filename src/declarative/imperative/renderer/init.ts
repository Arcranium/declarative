import * as Vue from "vue";

import {initializeImperativeModalRenderer} from "@lib/imperative";

export function initializeImperativeRenderers(appContext: Vue.AppContext) {
    initializeImperativeModalRenderer(appContext);
}