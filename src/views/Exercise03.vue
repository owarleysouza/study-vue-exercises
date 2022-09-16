<template>
  <div>
    <div class="flex">
      <router-link to="/">Voltar</router-link>
      <span>-</span>
      <h3>Exercício 03</h3>
    </div>
    <p>Aula 0204: Utilizando as API's
      https://api.origamid.dev/stock/aapl/quote
      https://api.origamid.dev/stock/googl/quote

      - Compare o marketCap (valor de
      mercado) entre ambas.

      - Mostre o nome das empresas e o valor
      na interace (companyName e marketCap).

      - Mude a cor para verde o nome da empresa com
      maior marketCap e vermelho a com menor.</p>

    <p :class="appleColor">{{apple.name}} : {{apple.marketCap}}</p>

    <p :class="googleColor">{{google.name}} : {{google.marketCap}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Exercise03",
  data: () => ({
    apple: {
      marketCap: "",
      name: "",
    },
    google: {
      marketCap: "",
      name: "",
    },
  }),
  computed: {
    appleColor() {
      return this.apple.marketCap > this.google.marketCap ? "green" : "red";
    },
    googleColor() {
      return this.google.marketCap > this.apple.marketCap ? "green" : "red";
    },
  },
  methods: {
    loadStock(stock) {
      axios
        .get(`https://api.origamid.dev/stock/${stock}/quote`)
        .then((response) => {
          if (stock === "aapl") {
            this.apple.name = response.data.companyName;
            this.apple.marketCap = response.data.marketCap;
          } else if (stock === "googl") {
            this.google.name = response.data.companyName;
            this.google.marketCap = response.data.marketCap;
          }
        });
    },
  },
  created() {
    this.loadStock("aapl");
    this.loadStock("googl");
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