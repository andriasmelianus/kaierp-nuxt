<template>
  <DxForm :form-data="value" :col-count="5" :customize-item="customizeItem">
    <template #form-item="{ data: item }">
      <span class="form-item">{{ item.editorOptions.value }}</span>
    </template>
  </DxForm>
</template>

<script lang="ts" setup>
import { DxForm, type DxFormTypes } from "devextreme-vue/form";

// Data
const value = defineModel({
  type: Object,
  default: undefined,
});

// Methods
function customizeItem(item: DxFormTypes.SimpleItem) {
  item.template = "form-item";
}
</script>

<style scoped>
.form-item {
  margin-left: 12px;
  font-weight: bold;
  text-wrap: balance;
}
</style>
