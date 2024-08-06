<template>
  <div>
    <v-row>
      <v-col cols="12" md="12">
        <v-sheet min-height="80vh" rounded="lg">
          <h1>Welcome to Nuxt!</h1>

          <br />
          <br />
          <DxButton
            type="default"
            :text="buttonText"
            @click="onButtonClick"
          ></DxButton>

          &nbsp;

          <nuxt-link to="/sample">
            <DxButton type="success" text="Sample Page"></DxButton>
          </nuxt-link>

          &nbsp; &nbsp; &nbsp;

          <DxButton
            type="default"
            text="Change!"
            @click="changeButtonType"
          ></DxButton>
          &nbsp;
          <nuxt-link to="/partner">
            <DxButton :type="buttonType" text="Partner Page"></DxButton>
          </nuxt-link>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { DxButton } from "devextreme-vue";

// Data
const buttonText = ref(`I'm a DevExtreme button!`);
const buttonType = ref("danger");

// Methods
function onButtonClick() {
  alert("You have successfully install DevExtreme on NuxtJS!");
}
function changeButtonType() {
  buttonType.value = "default";
}
</script>
