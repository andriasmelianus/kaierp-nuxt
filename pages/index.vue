<template>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat distinctio ex quos esse est doloribus aspernatur
    adipisci, eius provident cum quod enim aperiam nobis inventore deleniti error iste optio reiciendis.
    <br>
    <br>
    <DxButton text="I'm a DevExtreme Button!" @click="onButtonClick"></DxButton>
  </div>
</template>

<script lang="ts" setup>
import { DxButton } from 'devextreme-vue';

// Data
const buttonText = ref(`I'm a DevExtreme button!`)

// Methods
function onButtonClick() {
  alert('You have successfully install DevExtreme on NuxtJS!')
}
</script>
