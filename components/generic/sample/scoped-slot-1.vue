<template>
  <div>
    <div>I'm a scoped component!</div>
    <div>
      <strong>
        <slot name="content" :attribute1="attribute1"></slot>
      </strong>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Data
const attribute1 = ref("ScopedSlotComponent");
</script>
