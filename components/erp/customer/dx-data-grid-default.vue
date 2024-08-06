<template>
  <DxDataGrid
    id=""
    key-expr="id"
    no-data-text="Tidak ada data!"
    :data-source="customers"
    :two-way-binding-enabled="false"
    :on-editing-start="onEditingStart"
  >
    <DxColumn
      caption="#"
      data-field="id"
      alignment="left"
      :allow-filtering="true"
      :allow-sorting="true"
      :fixed="true"
      :width="60"
    ></DxColumn>
    <DxColumn
      caption="Customer"
      data-field="name"
      alignment="left"
      :min-width="150"
      :allow-filtering="true"
      :allow-sorting="true"
      :fixed="true"
    ></DxColumn>
    <DxColumn
      caption="Alamat"
      data-field="address"
      alignment="left"
      width="auto"
      :allow-filtering="true"
      :allow-sorting="true"
    ></DxColumn>
    <DxColumn
      caption="Negara"
      data-field="country_id"
      alignment="left"
      width="auto"
      edit-cell-template="dxDropDownBoxCountries"
      :allow-filtering="true"
      :allow-sorting="true"
      :min-width="150"
    >
      <DxLookup
        :data-source="countries"
        display-expr="name"
        value-expr="id"
      ></DxLookup>
    </DxColumn>
    <DxColumn
      caption="Provinsi"
      data-field="province_id"
      alignment="left"
      width="auto"
      edit-cell-template="dxDropDownBoxProvinces"
      :allow-filtering="true"
      :allow-sorting="true"
      :min-width="170"
    >
      <DxLookup
        :data-source="provinces"
        display-expr="name"
        value-expr="id"
      ></DxLookup>
    </DxColumn>
    <DxColumn
      caption="Kota"
      data-field="city_id"
      alignment="left"
      width="auto"
      edit-cell-template="dxDropDownBoxCities"
      :allow-filtering="true"
      :allow-sorting="true"
      :min-width="150"
    >
      <DxLookup
        :data-source="cities"
        display-expr="name"
        value-expr="id"
      ></DxLookup>
    </DxColumn>
    <DxColumn
      caption="Kode Pos"
      data-field="postal_code"
      alignment="left"
      width="auto"
      :allow-filtering="true"
      :allow-sorting="true"
    ></DxColumn>
    <DxColumn
      caption="Telepon"
      data-field="phone"
      alignment="left"
      width="auto"
      :allow-filtering="true"
      :allow-sorting="true"
    ></DxColumn>
    <DxColumn
      caption="Fax"
      data-field="fax"
      alignment="left"
      width="auto"
      :allow-filtering="true"
      :allow-sorting="true"
    ></DxColumn>
    <DxColumn
      caption="Web"
      data-field="website"
      alignment="left"
      width="auto"
      :allow-filtering="true"
      :allow-sorting="true"
    ></DxColumn>

    <!-- Features -->
    <DxSelection
      mode="multiple"
      show-check-boxes-mode="always"
      select-all-mode="allPages"
    />
    <DxPaging :page-size="10" />
    <DxScrolling mode="standard" row-rendering-mode="standard" />
    <DxFilterRow :visible="true" apply-filter="auto" />
    <DxEditing
      mode="row"
      :allow-adding="true"
      :allow-updating="true"
    ></DxEditing>

    <!-- Templates -->
    <template #dxDropDownBoxCountries="{ data: cellInfo }">
      <GenericAddressCountryDxDropDownBoxDefault
        v-model="cellInfo.value"
        @on-value-changed="onCountryChanged(cellInfo)"
      ></GenericAddressCountryDxDropDownBoxDefault>
    </template>
    <template #dxDropDownBoxProvinces="{ data: cellInfo }">
      <GenericAddressProvinceDxDropDownBoxDefault
        v-model:country-id="countryId"
        v-model="cellInfo.value"
        @on-value-changed="onProvinceChanged(cellInfo)"
      ></GenericAddressProvinceDxDropDownBoxDefault>
    </template>
    <template #dxDropDownBoxCities="{ data: cellInfo }">
      <GenericAddressCityDxDropDownBoxDefault
        v-model:province-id="provinceId"
        v-model="cellInfo.value"
        @on-value-changed="onCityChanged(cellInfo)"
      ></GenericAddressCityDxDropDownBoxDefault>
    </template>
  </DxDataGrid>
</template>

<script lang="ts" setup>
import { DxDataGrid } from "devextreme-vue";
import {
  DxColumn,
  DxFilterRow,
  DxScrolling,
  DxPaging,
  DxSelection,
  DxLookup,
  DxEditing,
} from "devextreme-vue/cjs/data-grid";
import countries from "~/assets/countries.json";
import provinces from "~/assets/provinces.json";
import cities from "~/assets/cities.json";
import customers from "~/assets/customers.json";

// Data
const countryId = ref(null);
const provinceId = ref(null);
const cityId = ref(null);

// Methods
function onEditingStart(e: any) {
  countryId.value = e.data.country_id;
  provinceId.value = e.data.province_id;
}
function onCountryChanged(cellInfo: any) {
  countryId.value = cellInfo.value;
  cellInfo.setValue(countryId.value);
  cellInfo.data.province_id = null;
  cellInfo.data.city_id = null;
}
function onProvinceChanged(cellInfo: any) {
  provinceId.value = cellInfo.value;
  cellInfo.setValue(provinceId.value);
  cellInfo.data.city_id = null;
}
function onCityChanged(cellInfo: any) {
  cityId.value = cellInfo.value;
  cellInfo.setValue(cityId.value);
}

// Built-in events
onMounted(function () {
  // console.log(vm);
});
</script>
