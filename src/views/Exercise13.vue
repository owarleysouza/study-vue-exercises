<template>
  <div>
    <div class="flex">
      <router-link to="/">Voltar</router-link>
      <span>-</span>
      <h3>Exercício 13</h3>
    </div>
    <p>Aula 0507: Crie 3 componentes:

      1: Componente falando sobre a empresa
      2: Componente com os serviços da empresa
      3: Componente com um formulário de contato

      Crie um menu, que ao clique ele mude os componentes
      acima de forma dinâmica. Não destrua o componente
    </p>

    <h4>Exercício 13</h4>
    <div class="menu">
      <button @click="changeComponent('AboutCompany')">Sobre</button>
      <button @click="changeComponent('AboutCompanyService')">Serviços</button>
      <button @click="changeComponent('CompanyFormContact')">Contato</button>
    </div>

    <keep-alive>
      <component :is="componentName" />
    </keep-alive>

  </div>
</template>

<script>
import AboutCompany from "../components/AboutCompany.vue";
import AboutCompanyService from "../components/AboutCompanyService.vue";
import CompanyFormContact from "../components/CompanyFormContact.vue";

export default {
  name: "Exercise13",
  components: { AboutCompany, AboutCompanyService, CompanyFormContact },
  data: () => ({
    componentName: "",
  }),
  watch: {},
  computed: {},
  methods: {
    changeComponent(name) {
      this.componentName = name;
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.menu {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
</style>