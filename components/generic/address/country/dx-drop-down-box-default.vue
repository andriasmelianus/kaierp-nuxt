<template>
  <DxDropDownBox
    v-model:value="selectedIds"
    v-model:opened="isGridBoxOpened"
    :data-source="dataSource"
    :defer-rendering="false"
    :display-expr="_displayExpression"
    :show-clear-button="true"
    :drop-down-options="{ width: 400 }"
    value-expr="id"
    placeholder="Pilih Negara"
  >
    <template #content="{}">
      <DxDataGrid
        v-model:selectedRowKeys="selectedIds"
        :data-source="dataSource"
        :hover-state-enabled="true"
        :show-borders="true"
        :height="300"
        @selection-changed="onGridSelectionChanged()"
      >
        <DxColumn
          data-field="name"
          caption="Negara"
          :allow-filtering="true"
          :allow-sorting="true"
        ></DxColumn>
        <DxColumn
          data-field="code"
          caption="Kode"
          :allow-filtering="true"
          :allow-sorting="true"
        ></DxColumn>

        <DxSelection
          mode="single"
          show-check-boxes-mode="none"
          select-all-mode="allPages"
        ></DxSelection>
        <DxFilterRow :visible="true"></DxFilterRow>
        <DxScrolling mode="virtual"></DxScrolling>
      </DxDataGrid>
    </template>
  </DxDropDownBox>
</template>

<script lang="ts" setup>
import { DxDropDownBox } from "devextreme-vue/drop-down-box";
import { DxDataGrid } from "devextreme-vue";
import {
  DxColumn,
  DxSelection,
  DxFilterRow,
  DxScrolling,
} from "devextreme-vue/cjs/data-grid";
import CustomStore from "devextreme/data/custom_store";
import countries from "~/assets/countries.json";

// Data
const value = defineModel({ type: Number });
const selectedIds = ref([value.value]); // <-- To facilitate single value to array requirements for selectedRowKeys.
const dataSource = new CustomStore({
  loadMode: "raw",
  key: "id",
  load() {
    return countries;
  },
});
const isGridBoxOpened = ref(false);

// Emits
const emits = defineEmits(["onValueChanged"]);

// Watchers
watch(selectedIds, function (_newSelectedIds, _oldSelectedIds) {
  // To facilitate single value to array requirements for selectedRowKeys.
  if (_newSelectedIds !== null) {
    let newValue;
    if (_newSelectedIds.length > 0) {
      newValue = _newSelectedIds[0];
    }
    value.value = newValue;
    emits("onValueChanged", newValue);
  }
});

// Methods
function _displayExpression(row: any) {
  return row && `${row.name} (${row.code})`;
}
function onGridSelectionChanged() {
  isGridBoxOpened.value = false;
}
</script>
