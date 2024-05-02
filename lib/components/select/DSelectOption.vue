<script setup lang="ts">
import DEffect from "@lib/components/DEffect.vue";
import {computed, onMounted, Ref} from "vue";
import {inject} from "vue";

const props = withDefaults(defineProps<{
  value?: string | number
}>(), {
  value: crypto.randomUUID()
});

onMounted(() => {
  if(selectCurrent && selectUpdate) {
    if(!selectCurrent.value) {
      selectUpdate(props.value);
    }
  }
})

const selectOpen = inject<Ref<boolean>>("select-open");
const selectMultiselect = inject<Ref<boolean>>("select-multiselect");
const selectRender = inject<Readonly<Ref<HTMLElement>>>("select-render");
const selectSize = inject<"small" | "medium" | "large">("select-size");
const selectCurrent = inject<Readonly<Ref<any>>>("select-current");
const selectUpdate = inject<(value: any) => void>("select-update");

function onClick() {
  if(selectMultiselect)
    return;

  if(selectUpdate)
    selectUpdate(props.value);

  if(selectOpen?.value)
    selectOpen.value = false;
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
})
</script>

<template>
  <div>
    <d-effect>
      <button class="d-select-option" :class="classes" @click="onClick">
        <slot/>
      </button>
    </d-effect>

    <Teleport v-if="selectRender" :to="selectRender">
      <span v-if="isSelected">
        <slot/>
      </span>
    </Teleport>
  </div>
</template>

<style scoped lang="postcss">
.d-select-option {
  @apply bg-white border-2 rounded-md outline-0 transition-all whitespace-nowrap w-full
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