<template>
  <div class="cart">
    <div class="cart__wrap">
      <span class="cart__movie">{{ cartTickets.movie }}</span>
      <span class="cart__date">{{ cartTickets.session }}</span>
      <div class="cart__tickets">
        <div class="cart__tickets-item" v-for="ticket in cartTickets.places">
          <span class="cart__tickets-row">Ряд: <b>{{ ticket.row}}</b></span>
          <span class="cart__tickets-place">Место: <b>{{ ticket.place}}</b></span>
        </div>
      </div>

      <button class="cart__btn">Купить</button>
    </div>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: "cart",
  computed: {
    ...mapState({
      cartTickets: state => state.tickets.tickets,
    }),
  },
}
</script>

<style scoped>

</style>