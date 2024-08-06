<template>
  <DxForm :form-data="value" :col-count="2">
    <DxSimpleItem data-field="name"></DxSimpleItem>
    <DxSimpleItem data-field="address"></DxSimpleItem>
    <DxSimpleItem data-field="country_id">
      <DxLabel text="Negara"></DxLabel>
      <GenericAddressCountryDxDropDownBoxDefault
        v-model="value.country_id"
      ></GenericAddressCountryDxDropDownBoxDefault>
    </DxSimpleItem>
    <DxSimpleItem data-field="province_id">
      <DxLabel text="Provinsi"></DxLabel>
      <GenericAddressProvinceDxDropDownBoxDefault
        v-model:country-id="value.country_id"
        v-model="value.province_id"
      ></GenericAddressProvinceDxDropDownBoxDefault>
    </DxSimpleItem>
    <DxSimpleItem data-field="city_id">
      <DxLabel text="Kota"></DxLabel>
      <GenericAddressCityDxDropDownBoxDefault
        v-model:province-id="value.province_id"
        v-model="value.city_id"
      ></GenericAddressCityDxDropDownBoxDefault>
    </DxSimpleItem>
  </DxForm>
</template>

<script lang="ts" setup>
import { DxForm } from "devextreme-vue";
import { DxSimpleItem, DxLabel } from "devextreme-vue/cjs/form";

// Data
const value = defineModel({
  type: Object,
  default: undefined,
});
</script>
