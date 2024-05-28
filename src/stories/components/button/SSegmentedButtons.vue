<script setup lang="ts">
import {DSegmentedButtons} from "@lib/components/button";
import {DButton} from "@lib/components";
import DSegmentedButton from "@lib/components/button/DSegmentedButton.vue";
</script>

<template>
  <d-segmented-buttons select multiselect>
    <d-segmented-button>Button 1</d-segmented-button>
    <d-segmented-button>Button 2</d-segmented-button>
    <d-segmented-button>Button 3</d-segmented-button>
    <d-segmented-button>Button 4</d-segmented-button>
  </d-segmented-buttons>
</template>

<style scoped lang="postcss">

</style>