<template>
  <div>
    <div class="flex">
      <router-link to="/">Voltar</router-link>
      <span>-</span>
      <h3>Exercício 04</h3>
    </div>
    <p>Aula 0205: Utilizando API
      https://api.origamid.dev/stock/aapl/quote

      Adicione um evento de clique a cada tag 'a' do html
      acima e previna o comportamento padrão.

      Faça o fetch dos dados do href ao click e mostre na
      interface o companyName, latestPrice, marketCap</p>

    <ul>
      <li><a
          @click.prevent="loadStock"
          href="https://api.origamid.dev/stock/aapl/quote"
        >Apple</a></li>
      <li><a
          @click.prevent="loadStock"
          href="https://api.origamid.dev/stock/googl/quote"
        >Google</a></li>
      <li><a
          @click.prevent="loadStock"
          href="https://api.origamid.dev/stock/amzn/quote"
        >Amazon</a></li>
      <li><a
          @click.prevent="loadStock"
          href="https://api.origamid.dev/stock/ebay/quote"
        >Ebay</a></li>
      <li><a
          @click.prevent="loadStock"
          href="https://api.origamid.dev/stock/pypl/quote"
        >Paypal</a></li>
    </ul>

    <div v-if="Object.keys(acao).length !== 0">
      <h4>Último Preço: {{acao.latestPrice}}</h4>
      <h4>Valor de Mercado: {{acao.marketCap}}</h4>
      <h4>Nome da Empresa: {{acao.companyName}}</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Exercise04",
  data: () => ({
    acao: {},
  }),
  methods: {
    loadStock(event) {
      let url = event.target.href;
      axios.get(url).then((response) => {
        this.acao = response.data;
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
.red {
  color: red;
}
.green {
  color: green;
}
</style>