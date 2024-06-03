<script setup lang="ts">
import {computed, onMounted, provide, ref, toRef, watch} from "vue";
import {InvalidEvent} from "react";
import {TransitionExpand} from "@morev/vue-transitions";

export type DTextFieldValidator = (input: string) => string | boolean | null;

defineOptions({
  inheritAttrs: true
});

const props = withDefaults(defineProps<{
  size?: "small" | "medium" | "large",
  placeholder?: string
  type?: string

  required?: boolean | string
  noDelay?: boolean
  delayValidation?: number
  validity?: null | string | boolean
  validatingMessage?: string
  invalidMessage?: string
  rules?: null | DTextFieldValidator | DTextFieldValidator[]
}>(), {
  size: "medium",
  placeholder: "",
  type: "text",

  required: false,
  noDelay: false,
  delayValidation: 500,
  validity: null,
  validatingMessage: "Validating...",
  invalidMessage: "Invalid",
  rules: null
});

const model = defineModel();

onMounted(() => {
  updateValidityFromProp();
  updateValidityFromRules();
});

const inputRef = ref<HTMLInputElement>();

defineExpose({
  inputRef
});

let delayedValidationTimeouts: Record<string,any> = {};

const isValid = ref((props.validity == "" || props.validity == null) && (props.rules == null || (Array.isArray(props.rules) && props.rules.length < 1)));
const validityDisplay = ref(props.validity ?? props.invalidMessage);

const classes = computed(() => {
  return [
      props.size
  ];
});

provide("textfield-size", toRef(props, "size"));

function setValidity(error: string | null) {
  if(!error) inputRef.value?.setCustomValidity("");
  else {
    validityDisplay.value = error;
    inputRef.value?.setCustomValidity(error)
  }

  isValid.value = error == null || error == "";
}

function updateValidityFromProp() {
  if(typeof props.validity == "boolean") {
    setValidity(props.validity ? "" : "Invalid");
  } else if(typeof props.validity == "string") {
    setValidity(props.validity);
  } else {
    setValidity(null);
  }
}

function updateValidityFromRules() {
  if(!props.rules) return;

  const input = inputRef.value?.value!!;
  let evaluation: string | boolean | null = null;
  if(Array.isArray(props.rules)) {
    for (const rule of props.rules as DTextFieldValidator[]) {
      evaluation = rule(input);
      if(evaluation != null && evaluation != true) {
        break;
      }
    }
  } else if(props.rules) {
    const rule = props.rules as DTextFieldValidator;
    evaluation = rule(input);
  }

  if(evaluation == null) {
    setValidity(null);
  } else {
    if(typeof evaluation == "string") {
      setValidity(evaluation);
    } else {
      setValidity(evaluation ? null : props.invalidMessage);
    }
  }
}

function applyDelayForValidation(key: string, validator: Function) {
  // Don't apply delay if noDelay is enabled
  if(props.noDelay) {
    validator();
    return;
  }

  if(delayedValidationTimeouts[key])
    clearTimeout(delayedValidationTimeouts[key]);

  setValidity(props.validatingMessage);
  delayedValidationTimeouts[key] = setTimeout(() => {
    setValidity(null);
    validator();
  }, props.delayValidation);
}

// Watch custom validity property
watch(
    () => props.validity,
    () => applyDelayForValidation("updateFromProp", updateValidityFromProp)
);

// Watch rules
watch(
    [() => props.rules, () => props.invalidMessage, model],
    () => applyDelayForValidation("updateFromRules", updateValidityFromRules)
);

// Watch current validity
watch(
    model,
    () => {
      isValid.value = inputRef.value?.validity?.valid ?? isValid.value;
    }
);
</script>

<template>
  <div class="d-textfield-container group">
    <div class="d-textfield-input">
      <input v-bind="$attrs" ref="inputRef" v-model="model" class="d-textfield" :class="classes" :placeholder="placeholder" :type="type">
      <div class="d-textfield-actions">
        <slot/>
      </div>
    </div>
    <TransitionExpand>
      <div v-if="!isValid" class="d-textfield-error overflow-hidden">
        {{ validityDisplay }}
      </div>
    </TransitionExpand>
  </div>
</template>

<style scoped lang="postcss">
.d-textfield-container {
  @apply size-full
}

.d-textfield-input {
  @apply size-full flex items-center
}

.d-textfield {
  @apply border-2 rounded-xl outline-0 rounded-r-none border-r-0 effect size-full
}

.d-textfield:has(+ .d-textfield-actions:empty) {
  @apply rounded-r-xl border-r-2
}

.d-textfield-actions {
  @apply flex
}

.d-textfield-error {
  @apply mt-1 text-red-500
}

.d-textfield.small {
  @apply h-10 px-2 text-base
}

.d-textfield.medium {
  @apply h-12 px-3 text-lg
}

.d-textfield.large {
  @apply h-14 px-3 text-2xl
}
</style>