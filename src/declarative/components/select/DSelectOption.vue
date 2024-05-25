<script setup lang="ts">
import {computed, onMounted, Ref} from "vue";
import {inject} from "vue";

const props = withDefaults(defineProps<{
  value?: string | number,
  default?: boolean,
  action?: boolean
}>(), {
  value: Math.random(),
  default: false,
  action: false
});

const emit = defineEmits([
    "action"
]);

onMounted(() => {
  if(props.default && selectUpdate) {
    selectUpdate(props.value);
  }
});

const selectOpen = inject<Ref<boolean>>("select-open");
const selectMultiselect = inject<boolean>("select-multiselect");
const selectRender = inject<Readonly<Ref<HTMLElement>>>("select-render");
const selectSize = inject<"small" | "medium" | "large">("select-size");
const selectCurrent = inject<Ref<any>>("select-current");
const selectUpdate = inject<(value: any) => void>("select-update");

function onClick() {
  if(!selectUpdate)
    return;

  if(props.action) {
    emit("action");

    if(selectOpen)
      selectOpen.value = false;

    return;
  }

  selectUpdate(props.value);

  if(selectOpen?.value && !selectMultiselect) {
    selectOpen.value = false;
  }
}

const classes = computed(() => {
  return [
    selectSize,
    {
      selected: isSelected.value
    }
  ];
})

const isSelected = computed(() => {
  if(!selectCurrent?.value)
    return false;

  if(Array.isArray(selectCurrent.value)) {
    return selectCurrent.value.includes(props.value);
  } else {
    return selectCurrent.value == props.value;
  }
});

const shouldRenderDisplay = computed(() => {
  if(!selectCurrent?.value)
    return false;

  if(selectMultiselect && Array.isArray(selectCurrent.value)) {
    return selectCurrent.value.indexOf(props.value) == 0;
  } else {
    return selectCurrent.value == props.value;
  }
})
</script>

<template>
  <div>
    <button class="d-select-option" :class="classes" @click="onClick">
      <slot/>
    </button>

    <Teleport v-if="selectRender && shouldRenderDisplay" :to="selectRender">
      <span v-if="isSelected">
        <slot/>
      </span>
    </Teleport>
  </div>
</template>

<style scoped lang="postcss">
.d-select-option {
  @apply bg-white border-2 rounded-md outline-0 transition-all whitespace-nowrap w-full effect
}

.d-select-option.small {
  @apply px-2 py-1
}

.d-select-option.medium {
  @apply p-2
}

.d-select-option.large {
  @apply p-3
}

.d-select-option.selected {
  @apply font-bold opacity-75 scale-95 bg-gray-200
}
</style>