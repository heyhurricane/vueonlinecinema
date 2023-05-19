import index from "vuex";

export const ticketsModule = {
    state: () => ({
        tickets: [],
        purchasedTickets: []
    }),
    getters: {
    },
    mutations: {
        ADD_TICKET(state, ticket) {
            state.tickets.push(ticket);
        },
        BUY_TICKET(state, pickedTickets) {
            pickedTickets.forEach((ticket) => {
                state.purchasedTickets.push(ticket);
            })
            state.tickets = [];
        },
        RETURN_TICKET(state, ticket) {
            state.purchasedTickets.splice(state.purchasedTickets.indexOf(ticket), 1);
        }
    },
    actions: {
    },
    namespaced: true
}