<template>
  <div>
    <div class="flex">
      <router-link to="/">Voltar</router-link>
      <span>-</span>
      <h3>Exercício 11</h3>
    </div>
    <p>Aula 0305: 1 - Utilize a api do github para
      mostrar todos os seus dados na tela.
      Faça o fetch das informações utilizando
      um dos hooks do vue:

      https://api.github.com/users/origamid (utilize o seu usuário)

      2 - Crie um contador, onde seja possível clicar em
      um botão e adicionar +1 ao número.

      Toda vez que o contador mudar, mude o título da página
      para o total do contador. Utilize um hook para isso

    </p>

    <h4>Exercício 11.1</h4>
    <form class="align-form">
      <label>Usuário <input v-model="user" /></label>

      <button @click.prevent="search">Enviar</button>
    </form>
    <ul>
      <li>Nome: {{name}}</li>
      <li>Repositórios: {{reposNumber}}</li>
      <li>Login: {{login}}</li>
      <li>Seguidores: {{following}}</li>
      <li>Seguindo: {{followers}}</li>
      <li>Localização: {{location}}</li>
    </ul>

    <h4>Exercício 11.2</h4>
    <h5>Contador: {{contador}}</h5>
    <button @click="contador++">+</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Exercise11",
  data: () => ({
    user: "",
    name: "",
    reposNumber: "",
    login: "",
    following: "",
    followers: "",
    location: "",
    contador: 0,
  }),
  watch: {},
  computed: {},
  methods: {
    search() {
      axios
        .get(`https://api.github.com/users/${this.user}`)
        .then((response) => {
          let obj = response.data;
          this.name = obj.name;
          this.reposNumber = obj.public_repos;
          this.login = obj.login;
          this.following = obj.following;
          this.followers = obj.followers;
          this.location = obj.location;
        });
    },
  },
  created() {
    axios.get("https://api.github.com/users/warleys14").then((response) => {
      let obj = response.data;
      this.name = obj.name;
      this.reposNumber = obj.public_repos;
      this.login = obj.login;
      this.following = obj.following;
      this.followers = obj.followers;
      this.location = obj.location;
    });
  },
  updated() {
    if (this.contador > 0) document.title = this.contador;
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

.align-form {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
</style>