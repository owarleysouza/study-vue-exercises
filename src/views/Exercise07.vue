<template>
  <div>
    <div class="flex">
      <router-link to="/">Voltar</router-link>
      <span>-</span>
      <h3>Exercício 07</h3>
    </div>
    <p>Aula 0208: Utilizando a api:
      https://viacep.com.br/ws/04538133/json/
      Mostre o cep, logradouro, complemento, bairro, localidade e uf do que for retornado.

      Use o arquivo json da aula, para listar os cursos e as matérias.
    </p>
    <h4>Exercício 07.01</h4>
    <h6>Todos os valores</h6>
    <ul>
      <li
        v-for="(value, key) in address"
        :key="value"
      >{{key}} : {{value}}</li>
    </ul>

    <h6>Valores selecionados</h6>
    <ul>
      <li>CEP: {{address.cep}}</li>
      <li>Logradouro: {{address.logradouro}}</li>
      <li>Complemento: {{address.complemento}}</li>
      <li>Bairro: {{address.bairro}}</li>
      <li>Localidade: {{address.localidade}}</li>
      <li>UF: {{address.uf}}</li>
    </ul>

    <h4>Exercício 07.02</h4>
    <ul>
      <li
        v-for="item in courses"
        :key="item + Math.random()"
      >{{item.curso}}
        <ul>
          <li
            v-for="aula in item.aulas"
            :key="aula + Math.random()"
          >{{aula.nome}} - {{aula.tempo}}</li>
        </ul>
      </li>

    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Exercise06",
  data: () => ({
    address: {},
    courses: [
      {
        curso: "Web Design Completo",
        link: "https://www.origamid.com/curso/web-design-completo/",
        aulas: [
          {
            nome: "HTML e CSS",
            tempo: "22min",
          },
          {
            nome: "JavaScript",
            tempo: "32min",
          },
          {
            nome: "Formulários",
            tempo: "12min",
          },
        ],
      },
      {
        curso: "JavaScript Completo",
        link: "https://www.origamid.com/curso/javascript-completo-es6/",
        aulas: [
          {
            nome: "Variáveis",
            tempo: "24min",
          },
          {
            nome: "Arrays",
            tempo: "13min",
          },
          {
            nome: "Objetos",
            tempo: "32min",
          },
        ],
      },
      {
        curso: "WordPress como CMS",
        link: "https://www.origamid.com/curso/wordpress-como-cms/",
        aulas: [
          {
            nome: "ACF",
            tempo: "24min",
          },
          {
            nome: "Temas",
            tempo: "13min",
          },
          {
            nome: "Plugins",
            tempo: "32min",
          },
        ],
      },
    ],
  }),
  methods: {
    loadAddress() {
      axios.get("https://viacep.com.br/ws/04538133/json/").then((response) => {
        this.address = response.data;
      });
    },
  },
  created() {
    this.loadAddress();
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