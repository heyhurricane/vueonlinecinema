<template>
  <div v-if="movies.length > 0">
    <h3 style="color: #3b3bff">Movie List</h3>
    <my-select :model-value="selectedSort"
               @update:model-value="setFilterOptions"
               :options="sortOptions"/>

    <my-select :model-value="selectedFilter"
    @update:model-value="setFilteredSort"
    :options="filterOptions"/>

    <transition-group name="movie-list">
      <movie-item
          v-for="movie in filteredMovies"
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
      setFilteredSort: 'movie/SET_FILTERED_SORT',
      setFilterOptions: 'movie/FILTER_OPTIONS',
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
      selectedFilter: state => state.movie.selectedFilter,
      limit: state => state.movie.limit,
      totalPages: state => state.movie.totalPages,
      sortOptions: state => state.movie.sortOptions,
      filterOptions: state => state.movie.filterOptions,
    }),
    ...mapGetters({
      // sortedMovies: 'movie/SORTED_MOVIES',
      filteredMovies: 'movie/FILTERED_MOVIES',
    })

  },
  watch: {
    movies(newValue) {
      console.log(this.movies.length);
    },
    // filteredMovies(newValue) {
    //   console.log(newValue);
    // },
  },
  name: "MovieList"
}
</script>

<style scoped>

</style>