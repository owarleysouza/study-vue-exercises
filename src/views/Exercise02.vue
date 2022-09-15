<template>
  <div>
    <div class="flex">
      <router-link to="/">Voltar</router-link>
      <span>-</span>
      <h3>Exercício 02</h3>
    </div>
    <p>Aula 0203: Utilizando a API
      https://api.origamid.dev/stock/aapl/quote

      Crie um método que faça o fetch da resposta acima
      O método deve ser ativado ao clique no botão Ver Preço

      Coloque a resposta json do fetch em uma data e
      mostre o valor de lalestPrice, latestTime e o
      companyName na interface.</p>

    <button @click="loadStock">Ver Preço</button>
    <div v-if="Object.keys(acoes).length !== 0">
      <h4>Último Preço: {{acoes.latestPrice}}</h4>
      <h4>Última Atualização: {{acoes.latestTime}}</h4>
      <h4>Nome da Empresa: {{acoes.companyName}}</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Exercise02",
  data: () => ({
    acoes: {},
  }),
  methods: {
    loadStock() {
      axios
        .get("https://api.origamid.dev/stock/aapl/quote")
        .then((response) => {
          this.acoes = response.data;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
</style>