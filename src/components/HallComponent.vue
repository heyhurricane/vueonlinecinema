<template>
  <div class="hall">
    <div class="hall__row" v-for="(row, row_i) in hallMap.slice().reverse()" :key="hallMap.length - row_i - 1">
      <div class="hall__row-num">{{ hallMap.length - row_i }}</div>
      <div class="hall__place" :class="{'hall__place--disabled': item == 1}, {'hall__place--selected': item == 2}" v-for="(item, item_i) in row" :key="item_i" @click="pickPlace(hallMap.length - row_i - 1,  item_i)">{{ item_i + 1 }}</div>
    </div>
    <div class="hall__screen">Экран</div>
    <div class="movie__tickets" v-if="tickets" >
      <div class="movie__tickets-text">Выбранные места:</div>
      <div class="movie__tickets-item" v-for="(ticket, ticket_i) in tickets" :key="ticket_i"><b>Ряд:</b> {{ ticket.row + 1 }} <b>Место:</b> {{ ticket.place + 1 }} </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "HallComponent",
  data() {
    return {
      hallMap: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
      selected: false,
      tickets: []
    }
  },
  emits: ['pickingPlace'],
  methods: {
    pickPlace(row, place) {
      if (this.hallMap[row][place] === 0) {
        this.hallMap[row][place] = 2;
        this.tickets.push({row: row, place: place});
      }
      else {
        this.hallMap[row][place] = 0;
        const index = this.tickets.findIndex(x => x.row === row && x.place === place);
        this.tickets.splice(index, 1);
      }
      this.$emit('pickingPlace', this.tickets);
    },

  },
}
</script>

<style scoped>
</style>