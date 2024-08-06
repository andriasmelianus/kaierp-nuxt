<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <v-sheet min-height="80vh" rounded="lg">
          <erp-partner-dx-form-default
            v-model="userData"
          ></erp-partner-dx-form-default>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="6">
        <v-sheet min-height="80vh" rounded="lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi
            aperiam sed at cum, culpa optio tempora soluta adipisci minus sunt
            nulla eum rem nobis facere consequatur? Explicabo, aliquam dolore.
          </p>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
// Data
const userData = ref({
  name: "Andrias",
  address: "Kenjeran",
  country_id: 1,
});
</script>
