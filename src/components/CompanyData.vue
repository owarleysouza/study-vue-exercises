<template>
  <ul>
    <li
      v-for="data in companyData"
      :key="data + Math.random()"
    >{{data}}></li>
  </ul>
</template>

<script>
export default {
  name: "CompanyData",
  props: {
    companyData: Array,
  },
};
</script>
