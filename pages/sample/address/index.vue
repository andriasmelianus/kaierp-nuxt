<template>
  <div>
    <v-row>
      <v-col cols="12" md="12">
        <v-sheet min-height="80vh" rounded="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          asperiores placeat ipsum dolorum iste nesciunt dolores quibusdam nam
          earum a, deleniti quo minus nemo nihil veritatis corrupti excepturi
          mollitia delectus.
          <br />

          <div style="text-align: center; margin-bottom: 10px">
            <nuxt-link to="/">Home</nuxt-link>
          </div>

          <!-- Negara -->
          <div>
            <div>
              <GenericAddressCountryDxDropDownBoxDefault
                v-model="countryId"
              ></GenericAddressCountryDxDropDownBoxDefault>
            </div>
            <div>You select country with ID: {{ countryId }}</div>
          </div>

          <!-- Provinsi -->
          <div>
            <div>
              <GenericAddressProvinceDxDropDownBoxDefault
                v-model:country-id="countryId"
                v-model="provinceId"
              ></GenericAddressProvinceDxDropDownBoxDefault>
            </div>
            <div>You select province with ID: {{ provinceId }}</div>
          </div>

          <!-- City -->
          <div>
            <div>
              <GenericAddressCityDxDropDownBoxDefault
                v-model:province-id="provinceId"
                v-model="cityId"
              ></GenericAddressCityDxDropDownBoxDefault>
            </div>
            <div>You select city with ID: {{ cityId }}</div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
// Data
const countryId = ref(1);
const provinceId = ref(1);
const cityId = ref(1);

// Methods
//
</script>
