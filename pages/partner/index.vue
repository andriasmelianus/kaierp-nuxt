<template>
  <div>
    <v-row>
      <v-col cols="12" md="10">
        <v-sheet rounded="lg">
          <ErpPartnerDxDataGridSample
            ref="partnerDataGrid"
            v-model:modified-row="modifiedPartner"
            :show-borders="false"
            @row-edit-clicked="rowEditClicked"
          ></ErpPartnerDxDataGridSample>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="2">
        <v-sheet rounded="lg" min-height="50vh">
          <DxButton
            type="default"
            text="Instance Test"
            @click="buttonTestClicked"
          ></DxButton>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { DxButton } from "devextreme-vue";

// Data
const modifiedPartner = ref(null);

// Methods
function rowEditClicked(_data: any) {
  modifiedPartner.value = _data;
}
function buttonTestClicked() {
  console.log("Test button clicked!");

  (modifiedPartner.value as any).name = "JOHN RAMBO!";
}
</script>
