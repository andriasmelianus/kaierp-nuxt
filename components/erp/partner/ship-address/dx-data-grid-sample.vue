<template>
  <DxDataGrid
    class="table-page"
    :show-borders="true"
    :data-source="dataSource"
    :remote-operations="true"
    :allow-column-resizing="true"
    :column-auto-width="true"
    :load-panel="{ showIndicator: false, showPane: false, text: '' }"
    key-expr="id"
    no-data-text="Tidak ada data!"
  >
    <!-- Columns -->
    <DxColumn
      caption="Address"
      data-field="address"
      :allow-filtering="true"
      :allow-sorting="true"
    ></DxColumn>
    <DxColumn
      caption="#"
      data-field="sequence"
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
      caption="CP Phone"
      data-field="contact_person_phone"
      :allow-filtering="true"
      :allow-sorting="true"
    ></DxColumn>
    <DxColumn
      caption="Active?"
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
  </DxDataGrid>
</template>

<script lang="ts" setup>
import {
  DxDataGrid,
  DxPaging,
  DxScrolling,
  DxColumnFixing,
  DxHeaderFilter,
  DxFilterRow,
  DxColumn,
  DxLookup,
} from "devextreme-vue/data-grid";
import CustomStore from "devextreme/data/custom_store";
import districts from "~/assets/json/sample/district.json";
import cities from "~/assets/json/sample/cities.json";
import provinces from "~/assets/json/sample/provinces.json";
import partnerShipAddress from "~/assets/json/sample/partner-ship-address.json";

// Props
const partnerId = defineModel("partnerId", {
  type: Number,
  default: undefined,
});

// Data
let dataSource = new CustomStore({
  loadMode: "raw",
  key: "id",
  load() {
    return partnerShipAddress.filter(function (address) {
      return address.partner_id === partnerId.value;
    });
  },
});

// Watchers
watch(partnerId, function (_newValue, _oldValue) {
  if (partnerId.value !== undefined) {
    dataSource = new CustomStore({
      loadMode: "raw",
      key: "id",
      load() {
        return partnerShipAddress.filter(function (address) {
          return address.partner_id === partnerId.value;
        });
      },
    });
  }
});
</script>
