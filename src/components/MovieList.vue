<template>
  <div v-if="movies.length > 0">
    <h3 style="color: #3b3bff">Movie List</h3>
    <my-select :model-value="selectedSort"
               @update:model-value="setSelectedSort"
               :options="sortOptions" />

    <transition-group name="movie-list">
      <movie-item
          v-for="movie in sortedMovies"
          :movie="movie"
          :key="movie.id"
          v-show="setPaginate(movie.id - 1)"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: red;">movies list is empty</h2>
</template>

<script>

import MovieItem from "@/components/MovieItem.vue";
import {mapGetters, mapMutations, mapState} from "vuex";
import MySelect from "@/components/MySelect.vue";

export default {
  components: {MySelect, MovieItem},
  props: {
    movies: {
      type: Array,
      required: true
    },
  },
  methods: {
    ...mapMutations({
      setSelectedSort: 'movie/SET_SELECTED_SORT',
    }),
    setPaginate: function (i) {
      if (this.page == 1) {
        return i < this.limit;
      }
      else {
        console.log(this.page, "|", this.limit, "|", i);
        return (i >= (this.limit * (this.page - 1)) && i < (this.page * this.limit));
      }
    },
  },
  computed: {
    ...mapState({
      movies: state => state.movie.movies,
      page: state => state.movie.page,
      selectedSort: state => state.movie.selectedSort,
      limit: state => state.movie.limit,
      totalPages: state => state.movie.totalPages,
      sortOptions: state => state.movie.sortOptions
    }),
    ...mapGetters({
      sortedMovies: 'movie/SORTED_MOVIES',
    })

  },
  name: "MovieList"
}
</script>

<style scoped>

</style>