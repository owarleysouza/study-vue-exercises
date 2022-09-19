<template>
  <div>
    <div class="flex">
      <router-link to="/">Voltar</router-link>
      <span>-</span>
      <h3>Exercício 09</h3>
    </div>
    <p>Aula 0302: 1- Crie um botão que troque a orientação da lista, ou seja,
      ao invés de 4 colunas, uma única coluna com 4 linhas.

      O botão será responsável por trocar para lista e também
      responsável por reverter esse processo.
      Utilize adição/remoção de classes para atingir este efeito.

      A classe column já está criada, basta utilizar ela.

      2- Crie um gerador de cores, toda vez que o usuário clicar
      em cima da lista, os itens trocam de cor.

      Gerador de cor:
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    </p>

    <ul
      @click="changeColor"
      :class="{column : orientation}"
    >
      <li :style="{background: color}">Sobre</li>
      <li :style="{background: color}">Produtos</li>
      <li :style="{background: color}">Serviços</li>
      <li :style="{background: color}">Contato</li>
    </ul>

    <button @click="orientation = !orientation">Revert</button>

  </div>
</template>

<script>
export default {
  name: "Exercise09",
  data: () => ({
    orientation: false,
    click: false,
    color: "",
  }),
  watch: {},
  methods: {
    changeColor() {
      this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
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

ul {
  display: flex;
  flex-wrap: wrap;
  font-family: monospace;
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.column {
  flex-direction: column;
}
li {
  padding: 20px;
  background: #84e;
  color: white;
  border-radius: 4px;
  margin: 10px;
  flex: 1;
  text-align: center;
}
</style>