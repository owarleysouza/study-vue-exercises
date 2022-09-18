<template>
  <div>
    <div class="flex">
      <router-link to="/">Voltar</router-link>
      <span>-</span>
      <h3>Exercício 06</h3>
    </div>
    <p>Aula 0207: Renderize o conteúdo, apenas uma vez (não torne o mesmo reativo):

      <!-- lista: "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"  -->
    </p>

    <div
      v-html="lista"
      v-once
    />

  </div>
</template>

<script>
export default {
  name: "Exercise06",
  data: () => ({
    lista: "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>",
  }),
  methods: {},
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