<template>
  <div>
    <div class="flex">
      <router-link to="/">Voltar</router-link>
      <span>-</span>
      <h3>Exercício 05</h3>
    </div>
    <p>Aula 0206: Simule a adição de um produto no carrinho
      este produto possui estoque de 7 itens
      (utilize a mesma ideia do contador).

      Ao atingir 7 itens mostre uma mensagem informando
      não ser possível adicionar mais do que 7 itens.

      Remova também o botão de adicionar itens.</p>

    <p>Carrinho: {{cart}}</p>
    <button
      v-if="cart > 0"
      @click="removeItem"
    >-</button>
    <button
      v-if="cart < estoque"
      @click="addItem"
    >+</button>
    <p v-else>Não é possível adicionar mais do que 7 itens no carrinho</p>
  </div>
</template>

<script>
export default {
  name: "Exercise05",
  data: () => ({
    cart: 0,
    estoque: 7,
  }),
  methods: {
    addItem() {
      if (this.cart < this.estoque) {
        this.cart++;
      }
    },
    removeItem() {
      if (this.cart > 0) this.cart--;
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