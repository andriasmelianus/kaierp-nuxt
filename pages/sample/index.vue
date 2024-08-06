<template>
  <div>
    <v-row>
      <v-col cols="12" md="9">
        <v-sheet min-height="80vh" rounded="lg">
          <h1>Sample Pages!</h1>

          <GenericSampleScopedSlot1>
            <template #content="{ attribute1 }">
              Great! {{ constructString(attribute1) }}
            </template>
          </GenericSampleScopedSlot1>

          <br />

          <div>
            <nuxt-link to="/sample/address">
              <DxButton
                text="ADDRESS BEHAVIOR"
                type="default"
                styling-mode="outlined"
              />
            </nuxt-link>
            &nbsp;
            <nuxt-link to="/sample/data-grid">
              <DxButton
                text="Data Grid"
                type="danger"
                styling-mode="outlined"
              />
            </nuxt-link>
            &nbsp;
            <nuxt-link to="/sample/form">
              <DxButton text="Form" type="normal" styling-mode="outlined" />
            </nuxt-link>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="3">
        <v-sheet min-height="80vh" rounded="lg">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            incidunt dolorem assumenda! Atque cupiditate deserunt officiis,
            aspernatur fugiat iure impedit, ipsam rerum est perspiciatis
            accusamus, nulla amet reprehenderit pariatur architecto.
          </p>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { DxButton } from "devextreme-vue";

// Data
// const sampleValue1 = ref(null);

// Methods
function constructString(p: String) {
  return p + " is awesome!";
}
</script>
