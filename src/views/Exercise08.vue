<template>
  <div>
    <div class="flex">
      <router-link to="/">Voltar</router-link>
      <span>-</span>
      <h3>Exercício 08</h3>
    </div>
    <p>Aula 0209: Você possui o nome e sobrenome do usuário em data,
      crie uma propriedade computed que retorne o nome completo

      Utilize a rest API para puxar as capitais dos paises
      Use um campo de select, onde o usuário pode selecionar o país.
      https://restcountries.com/v2/all

      Com uma função watch, mude a capital de acordo com o país selecionado:

      Ex de campo select:

      <!-- <select name="paises" id="paises" v-model="selecionado">
        <option v-for="pais in paises" :value="pais.name">
          {{pais.name}}
        </option>
      </select> -->
    </p>

    <h4>Exercício 08.01</h4>
    <p>{{nomeCompleto}}</p>

    <h4>Exercício 08.02</h4>
    <select
      name="paises"
      id="paises"
      v-model="selecionado"
    >
      <option
        v-for="pais in paises"
        :value="pais.name"
        :key="pais + Math.random()"
      >
        {{pais.name}}
      </option>
    </select>
    <p v-show="capital">Capital: {{capital}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Exercise08",
  data: () => ({
    nome: "Warley",
    sobrenome: "Soares",
    paises: {},
    selecionado: "",
    capital: "",
  }),
  watch: {
    selecionado(value) {
      let selectedCountry = this.paises.find(
        (country) => country.name === value
      );
      this.capital = selectedCountry.capital;
    },
  },
  computed: {
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  },
  methods: {
    loadingCountries() {
      axios.get("https://restcountries.com/v2/all").then((response) => {
        this.paises = response.data;
      });
    },
  },
  created() {
    this.loadingCountries();
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