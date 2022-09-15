<template>
  <div>
    <div class="flex">
      <router-link to="/">Voltar</router-link>
      <span>-</span>
      <h3>Exercício 01</h3>
    </div>
    <p>Aula 0202: Crie uma instância que mostre
      baseado no valor do lado do quadrado
      o seu perímetro (lX4) e área (lXl).
      O lado do quadrado deve ser um estado reativo</p>
    <h4>Lado: {{lado}}</h4>
    <h4>Perímetro: {{lado * 4}}</h4>
    <h4>Área: {{lado * lado}}</h4>
  </div>
</template>

<script>
export default {
  name: "Exercise01",
  data: () => ({
    lado: 20,
  }),
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