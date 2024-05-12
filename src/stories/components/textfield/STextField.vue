<script setup lang="ts">
import "@lib/styles/index.css";

import DTextField from "../../../declarative/components/textfield/DTextField.vue";
import {TransitionExpand} from "@morev/vue-transitions";
import {computed, reactive, ref} from "vue";
import {DButton, DSelect, DSelectOption, DTextFieldAction} from "@lib/components";

const props = withDefaults(defineProps<{
  size?: "small" | "medium" | "large",
  placeholder?: string,
  useAction?: boolean,
  useValidator?: boolean
}>(), {
  size: "medium",
  placeholder: "",
  useAction: false,
  useValidator: false
});

const validateType = ref<"validity" | "rules">("validity");
const validity = ref("Invalid");
const validatorCode = reactive(["return input == \"true\""] as string[]);
const validatorFunction = computed(() => {
  let arr = [] as (Function | null)[];
  for(const code of validatorCode.values()) {
    try {
      const fn = new Function("input", code);
      fn("");
      arr.push(fn);
    } catch (_: any) {
      arr.push(null);
    }
  }

  return arr;
});
</script>

<template>
  <div>
    <d-text-field :validity="validateType == 'validity' && useValidator ? validity : null" :size="size" :placeholder="placeholder" :rules="useValidator && validateType == 'rules' ? validatorFunction.filter(it => it != null) : null">
      <template #default v-if="useAction">
        <d-text-field-action>

        </d-text-field-action>
      </template>
    </d-text-field>
  </div>

  <div v-if="useValidator" class="mt-5 pt-5 border-t-2">
    <d-select v-model="validateType" class="mb-5">
      <d-select-option value="validity">Validity</d-select-option>
      <d-select-option value="rules">Rule</d-select-option>
    </d-select>

    <TransitionExpand>
      <div v-if="validateType == 'validity'">
        Validity<br>
        <d-text-field placeholder="Validity" v-model="validity"/>
      </div>
      <div v-if="validateType == 'rules'">
        <div class="flex gap-4 items-center text-xl mb-4">
          Rule Functions
          <d-button size="small" class="size-10" @click="validatorCode.push('')">+</d-button>
        </div>
        <TransitionExpand group>
          <div class="flex gap-2 my-2" v-for="(code, i) in validatorCode" :key="i">
            <d-text-field :validity="validatorFunction[i] == null ? 'Failed to parse' : null" placeholder="Validator Function" v-model="validatorCode[i]"/>
            <d-button size="medium" class="size-12" @click="validatorCode.splice(i, 1)">-</d-button>
          </div>
        </TransitionExpand>
      </div>
    </TransitionExpand>
  </div>
</template>

<style scoped lang="postcss">

</style>