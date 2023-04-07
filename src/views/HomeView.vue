<template>
  <div>
    <h1>Online Cinema "Vue"</h1>
    <movie-list :movies="movies"/>

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

  },
  mounted() {

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
