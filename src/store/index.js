import {createStore} from "vuex"
import {movieModule} from "@/store/movieModule";
import {ticketsModule} from "@/store/ticketsModule";

export default createStore({
  modules: {
    movie: movieModule,
    tickets: ticketsModule
  }
})