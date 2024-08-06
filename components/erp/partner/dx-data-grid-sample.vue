<template>
  <DxDataGrid
    ref="partnerDataGrid"
    class="table-page"
    key-expr="id"
    no-data-text="Tidak ada data"
    :show-borders="true"
    :data-source="dataStore"
    :remote-operations="true"
    :allow-column-resizing="true"
    :column-auto-width="true"
    :load-panel="{ showIndicator: true, showPane: true, text: 'Loading' }"
  >
    <!-- Columns -->
    <DxColumn
      caption="Action"
      cell-template="action-cell-template"
      :min-width="80"
      :fixed="true"
    >
    </DxColumn>
    <DxColumn
      caption="#"
      data-field="id"
      alignment="right"
      :allow-filtering="true"
      :allow-sorting="true"
      :fixed="true"
    ></DxColumn>
    <DxColumn
      caption="Partner Name"
      data-field="name"
      :allow-filtering="true"
      :allow-sorting="true"
      :fixed="true"
    ></DxColumn>
    <DxColumn
      caption="Code"
      data-field="code"
      :allow-filtering="true"
      :allow-sorting="true"
    ></DxColumn>
    <DxColumn
      caption="Supplier?"
      data-field="is_supplier"
      :allow-filtering="true"
      :allow-sorting="true"
    ></DxColumn>
    <DxColumn
      caption="Customer?"
      data-field="is_customer"
      :allow-filtering="true"
      :allow-sorting="true"
    ></DxColumn>
    <DxColumn
      caption="District"
      data-field="district_id"
      :allow-filtering="true"
      :allow-sorting="true"
    >
      <DxLookup
        :data-source="districts"
        display-expr="name"
        value-expr="id"
      ></DxLookup>
    </DxColumn>
    <DxColumn
      caption="City"
      data-field="city_id"
      :allow-filtering="true"
      :allow-sorting="true"
    >
      <DxLookup
        :data-source="cities"
        display-expr="name"
        value-expr="id"
      ></DxLookup>
    </DxColumn>
    <DxColumn
      caption="Province"
      data-field="province_id"
      :allow-filtering="true"
      :allow-sorting="true"
    >
      <DxLookup
        :data-source="provinces"
        display-expr="name"
        value-expr="id"
      ></DxLookup>
    </DxColumn>
    <DxColumn
      caption="Aktif?"
      data-field="is_active"
      :allow-filtering="true"
      :allow-sorting="true"
    ></DxColumn>

    <!-- Features -->
    <DxPaging :page-size="10" />
    <DxScrolling mode="standard" row-rendering-mode="standard" />
    <DxColumnFixing :enabled="true" />
    <DxHeaderFilter :visible="true" />
    <DxFilterRow :visible="true" apply-filter="auto" />
    <DxSelection
      mode="multiple"
      show-check-boxes-mode="always"
      select-all-mode="allPages"
    />

    <!-- Master detail -->
    <DxMasterDetail :enabled="true" template="master-detail"></DxMasterDetail>
    <template #master-detail="{ data }">
      <DxTabPanel>
        <DxItem title="Partner" template="tab-partner"></DxItem>
        <DxItem title="Ship Address" template="tab-ship-address"></DxItem>
        <DxItem title="Division" template="tab-division"></DxItem>

        <template #tab-partner>
          <ErpPartnerDxFormDisplay
            v-model="data.data"
          ></ErpPartnerDxFormDisplay>
        </template>
        <template #tab-ship-address>
          <ErpPartnerShipAddressDxDataGridSample
            v-model:partner-id="data.data.id"
          ></ErpPartnerShipAddressDxDataGridSample>
        </template>
        <template #tab-division>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            error adipisci tenetur necessitatibus quasi exercitationem libero
            voluptates quibusdam nostrum, quod a doloremque repellat eos magnam
            recusandae unde expedita deleniti? Neque!
          </p>
        </template>
      </DxTabPanel>
    </template>
    <!-- Action column -->
    <template #action-cell-template="{ data }">
      <DxButton
        text="Edit"
        type="normal"
        styling-mode="outlined"
        hint="Edit the partner data"
        @click="onEditClick(data.data)"
      />
    </template>
  </DxDataGrid>
</template>

<script lang="ts" setup>
import CustomStore from "devextreme/data/custom_store";
import { DxDataGrid, DxButton } from "devextreme-vue";
import { DxTabPanel, DxItem } from "devextreme-vue/tab-panel";
import {
  DxColumn,
  DxPaging,
  DxScrolling,
  DxColumnFixing,
  DxHeaderFilter,
  DxFilterRow,
  DxSelection,
  DxLookup,
  DxMasterDetail,
} from "devextreme-vue/cjs/data-grid";
import districts from "~/assets/json/sample/district.json";
import cities from "~/assets/json/sample/cities.json";
import provinces from "~/assets/json/sample/provinces.json";
import partners from "~/assets/json/sample/partner.json";

// Props
const dataStore = new CustomStore({
  loadMode: "raw",
  key: "id",
  load() {
    return partners;
  },
});
const modifiedRow = defineModel({
  type: Object,
  default: undefined,
});

// Data
const partnerDataGrid = ref(null);

// Watchers
watch(
  modifiedRow,
  function (_newRow, _oldRow) {
    dataStore.update(_newRow.id, _newRow);
  },
  { deep: true },
);

// Emits
const emits = defineEmits(["rowEditClicked"]);

// Methods
function onEditClick(data: any) {
  emits("rowEditClicked", data);
}
</script>
