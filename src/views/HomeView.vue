<template>
  <div>
    <h1>Online Cinema "Vue"</h1>
    <movie-list :movies="movies"/>
    <div class="pages">
      <div class="pages__item" v-for="page in totalPages" :key="page" @click="nextPage(page)">{{ page }}</div>
    </div>
  </div>
</template>

<script>

import MovieList from "@/components/MovieList.vue";
import {mapGetters, mapActions, mapMutations, mapState} from "vuex";

export default {
  name: 'HomeView',
  components: {
    MovieList
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions({
      countPages: 'movie/countPages'
    }),
    nextPage(pageNum) {
      this.$store.commit('movie/CURRENT_PAGE', pageNum);
    },
  },
  mounted() {
    this.countPages();
  },
  computed: {
    ...mapState({
      movies: state => state.movie.movies,
      page: state => state.movie.page,
      limit: state => state.movie.limit,
      totalPages: state => state.movie.totalPages,
    }),
    ...mapGetters({
      // movies: 'movie/MOVIES',
      // limit: 'movie/LIMIT',
      // totalPages: 'movie/TOTAL_PAGES'
    }),
  }
}
</script>

<style scoped>
  .pages {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
  }

  .pages__item {
    cursor: pointer;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>