<template>
  <div>
    <div class="flex">
      <router-link to="/">Voltar</router-link>
      <span>-</span>
      <h3>Exercício 10</h3>
    </div>
    <p>Aula 0303: 1 - Crie um criador de botões.

      O usuário poderá definir:
      width,
      height,
      font-size,
      font-family,
      text-align,
      background,
      color,
      border-radius,

      As escolhas serão feitas em campos de
      formulário. Cada escolha deverá ser
      refletida em um elemento (o botão).

      2 - Crie um formulário com, nome, email, telefone e mensagem.
      Ao clicar em enviar, as informações preenchidas no formulário
      devem aparecer abaixo do mesmo. (previna o comportamento padrão do botão enviar)
    </p>

    <h4>Exercício 10.2</h4>

    <form class="align-form">
      <label>Nome <input v-model="nome" /></label>
      <label>Email <input v-model="email" /></label>
      <label>Telefone <input v-model="telefone" /></label>
      <label>Mensagem <input v-model="mensagem" /></label>

      <button @click.prevent="enviar">Enviar</button>
    </form>

    <ul v-if="isFormDone">
      <li>nome: {{this.nome}}</li>
      <li>email: {{this.email}}</li>
      <li>telefone: {{this.telefone}}</li>
      <li>mensagem: {{this.mensagem}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "Exercise10",
  data: () => ({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    isFormDone: false,
  }),
  watch: {},
  computed: {},
  methods: {
    enviar() {
      this.isFormDone = true;
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
  flex-direction: column;
  gap: 15px;
}
</style>