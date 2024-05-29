<script setup lang="ts">
import {createTopLevelElementOrNull} from "@lib/util/top_level_element"
import DDimmed from "@lib/components/modal/DDimmed.vue"
import {computed, watch} from "vue"
import {useTailwindBreakpoints} from "@lib/composables/breakpoints"
import {declarativeModalDepthMap} from "./depths"
import {TransitionScale} from "@morev/vue-transitions"

const props = withDefaults(defineProps<{
  zIndex?: number,

  closable?: boolean,
  noBackdrop?: boolean
  alignVertical?: "start" | "center" | "end",
  alignHorizontal?: "start" | "center" | "end",
  fullscreen?: boolean | "auto",
  screen?: "parent" | "screen",
  form?: boolean,

  depthNamespace: string,
  depth: number

  open?: boolean | null
}>(), {
  zIndex: 0,

  closable: true,
  noBackdrop: false,
  alignVertical: "center",
  alignHorizontal: "center",
  fullscreen: false,
  screen: "parent",
  form: false,

  depthNamespace: "global",
  depth: 0,

  open: null
})

const emit = defineEmits([
    "submit",
    "close"
])

const model = defineModel<boolean>()

const breakpoints = useTailwindBreakpoints()
const modalRoot = createTopLevelElementOrNull("modals")

const backClasses = computed(() => {
  return [
      `justify-${props.alignVertical}`,
      `items-${props.alignHorizontal}`
  ]
})

const classes = computed(() => {
  const fullscreenClasses = [
      props.screen == "parent" ? "!size-full" : "!w-dvw !h-dvh",
      "!rounded-none !border-none"
  ]

  return [shouldRenderFullscreen.value ? fullscreenClasses.join(" ") : "", {
    'pointer-events-auto': model.value || props.open
  }]
})

const shouldRenderFullscreen = computed(() => {
  if(props.fullscreen == "auto") {
    return breakpoints.smallerOrEqual("md").value
  }

  return props.fullscreen
})

const shouldRender = computed(() => props.open || model.value)

const currentDepth = computed(() => {
  return declarativeModalDepthMap[props.depthNamespace] ?? 0
})

const depthBasedScale = computed(() => {
  return (shouldRender.value ? (currentDepth.value > props.depth) : (currentDepth.value < props.depth))
      ? 1.1
      : 0.9
})

watch(shouldRender, () => {
  if(shouldRender.value) {
    declarativeModalDepthMap[props.depthNamespace] = props.depth
  }
})

function onClose() {
  if(!props.closable) return

  emit("close")
  model.value = false
}
</script>

<template>
  <Teleport :to="modalRoot">
    <d-dimmed :style="{ 'z-index': zIndex }" :show="shouldRender" :disabled="noBackdrop" :teleport="false">
      <TransitionScale appear :scale="depthBasedScale">
        <component v-if="shouldRender" :is="form ? 'form' : 'div'" class="size-full flex" :class="backClasses" @click.self="onClose" @submit.prevent="emit('submit')">
          <div class="bg-white p-4 rounded-3xl sm:min-w-96 min-w-72 border-2 shadow-2xl transition-all duration-300" :class="classes">
            <div class="m-4 font-medium text-3xl select-none empty:hidden">
              <slot name="title"/>
            </div>
            <div class="border-b-2"></div>
            <div class="py-4 px-4 empty:hidden">
              <slot></slot>
            </div>
            <div class="border-b-2"></div>
            <div class="p-3 empty:p-0 select-none empty:hidden">
              <slot name="action"/>
            </div>
          </div>
        </component>
      </TransitionScale>
    </d-dimmed>
  </Teleport>
</template>

<style scoped lang="postcss">

</style>