import * as Vue from "vue";
import {AppContext, inject} from "vue";

export function getAppContext() {
    return inject<AppContext>("declarative-app-context");
}