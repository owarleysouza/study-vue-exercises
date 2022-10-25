<template>
  <div>
    <div class="flex">
      <router-link to="/">Voltar</router-link>
      <span>-</span>
      <h3>Exercício 12</h3>
    </div>
    <p>Aula 0502: Crie um componente com um campo de input e um botão para enviar o valor.
      Nesse campo de input será possível escrever o simbolo de empresas americanas

      simbolos ex:
      aapl -> Apple
      goog -> Google
      msft -> Microsoft
      amzn -> Amazon
      fb -> Facebook

      Ao clicar no botão, faça um fetch com a API:
      https://api.origamid.dev/stock/${SIMBOLO}/quote

      O resultado do fetch deverá ser mostrado em um componente filho do formulário.
      Envia as informações utilizando prop

      Mostre todas as informações do fetch utilizando um loop

    </p>

    <h4>Exercício 12</h4>
    <form class="align-form">
      <label>Empresa: <input v-model="company" /></label>

      <button @click.prevent="search">Pesquisar</button>
    </form>

    <company-data :companyData="companyData" />
  </div>
</template>

<script>
import axios from "axios";

import CompanyData from "../components/CompanyData.vue";

export default {
  name: "Exercise12",
  components: { CompanyData },
  data: () => ({
    company: "",
    companyData: [],
  }),
  watch: {},
  computed: {},
  methods: {
    search() {
      axios
        .get(`https://api.origamid.dev/stock/${this.company}/quote`)
        .then((response) => {
          this.companyData = Object.values(response.data).filter(
            (element) => element !== null
          );
        });
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
.red {
  color: red;
}
.green {
  color: green;
}

.align-form {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
</style>