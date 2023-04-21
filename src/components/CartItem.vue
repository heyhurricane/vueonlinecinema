<template>
  <div class="cart">
    <div class="cart__wrap">
      <span class="cart__movie">Шрэк</span>
      <span class="cart__date">24.05.2023 18:00</span>
      <div class="cart__tickets">
        <div class="cart__tickets-item">
          <span class="cart__tickets-row">Ряд: <b>8</b></span>
          <span class="cart__tickets-place">Место: <b>5</b></span>
        </div>
        <div class="cart__tickets-item">
          <span class="cart__tickets-row">Ряд: <b>8</b></span>
          <span class="cart__tickets-place">Место: <b>6</b></span>
        </div>
      </div>

      <button class="cart__btn">Купить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart"
}
</script>

<style scoped>

</style>