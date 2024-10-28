<template>
  <div class="movie">
    <my-dialog v-model:show="buyTicketPopupVisible">
      <div class="movie__name"><strong>{{ movie.name }}</strong></div>
      <div class="movie__session"><strong>{{ pickedSession }}</strong></div>
      <hall-component @pickingPlace="selectedPlaces" :session="pickedSession" :movie="movie.name"></hall-component>
      <button class="movie__buy-tickets" @click="addingToCart">Добавить в корзину</button>
    </my-dialog>

    <div class="movie__img" :style="{ background: `url(/img/movies/${movie.img}.webp) no-repeat center / cover`  }"></div>
    <div class="movie__info">
      <div class="movie__name"><strong>{{ movie.name }}</strong></div>
      <div class="movie__desc">{{ movie.desc }}</div>
      <router-link v-if="!isMoviePage" :to="{
                    name: 'MoviePage',
                    params: {
                      id: movie.id,
                    }
                  }" class="movie__link">Купить билеты</router-link>

      <div v-if="isMoviePage" class="movie__sessions">
        <div class="movie__sessions-text">Выберите сеанс:</div>
        <button class="movie__sessions-item" v-for="session in movie.sessions" :key="session" @click="showPopup">{{ session }}</button>
      </div>
    </div>
<!--    <div class="movie__btns">-->
<!--      <my-button @click="$emit('done', movie)" class="btn"></my-button>-->
<!--    </div>-->
  </div>
</template>

<script>
import hallComponent from "@/components/HallComponent.vue";
import myDialog from "@/components/UI/MyDialog.vue";
import {mapState} from "vuex";

let tickets = [];
export default {
  components: {hallComponent, myDialog},
  data() {
    return {
      buyTicketPopupVisible: false,
      pickedSession: '',
    }
  },
  props: {
    movie: {
      type: Object,
      required: true
    },
  },
  computed: {
    isMoviePage() {
      return this.$route.name === 'MoviePage';
    },

    ...mapState({
      cartTickets: state => state.tickets.tickets,
    }),
  },
  methods: {
    showPopup(value) {
      this.$router.replace({ path: this.$route.path, query: { session: value.target.textContent } });
      this.buyTicketPopupVisible = true;
      this.pickedSession = value.target.textContent;
    },
    selectedPlaces(ticket) {
      tickets = ticket;
      let param = '';
      ticket.forEach((t) => {
        param += t.row + '-' + t.place + ";";
      });
      this.$router.replace({ path: this.$route.path, query: { session: this.pickedSession, places: param } });
    },
    addingToCart() {
      let ticket = {};
      ticket.movie = this.movie.name;
      ticket.session = this.pickedSession;
      ticket.places = [];
      tickets.forEach((item)=> {
        ticket.places.push(item);
      });
      this.$store.commit('tickets/ADD_TICKET', ticket);
      this.buyTicketPopupVisible = false;
      this.$router.replace({ path: this.$route.path });

    }
  },
  mounted() {
    if (this.$route.query.session) {
      this.pickedSession = this.$route.query.session;
      this.buyTicketPopupVisible = true;
    }
  },
  name: "MovieItem"
}
</script>

<style scoped>

</style>