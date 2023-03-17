import {createStore} from "vuex"
import {movieModule} from "@/store/movieModule";

export default createStore({
  modules: {
    movie: movieModule
  }
})