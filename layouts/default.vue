<template>
  <div>
    <v-app-bar class="px-3" density="compact" scroll-behavior="collapse">
      <v-tabs centered color="grey-darken-2">
        <v-tab
          v-for="link in links"
          :key="link.title"
          :text="link.title"
          :to="link.url"
        ></v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <v-avatar
        color="grey-darken-1"
        class="hidden-md-and-up"
        size="32"
      ></v-avatar>
      <v-avatar
        class="hidden-sm-and-down"
        color="grey-darken-1"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container :fluid="true">
        <slot></slot>
      </v-container>
    </v-main>
  </div>
</template>

<script lang="ts" setup>
// Data
const links = [
  {
    title: "Dashboard",
    url: "/",
  },
  {
    title: "Sample",
    url: "/sample",
  },
  {
    title: "Partner",
    url: "/partner",
  },
];
</script>
