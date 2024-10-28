<template>
  <div>
    <h1>Online Cinema "Vue"</h1>
    <movie-list :movies="filteredMovies"/>

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
      filteredMovies: []
    }
  },
  methods: {

  },
  mounted() {
    this.filteredMovies = this.movies;
  },
  computed: {
    ...mapState({
      movies: state => state.movie.movies,
    }),
    ...mapGetters({
      // movies: 'movie/MOVIES',
      // limit: 'movie/LIMIT',
      // totalPages: 'movie/TOTAL_PAGES'
    }),

  }
}
</script>
