export const ticketsModule = {
    state: () => ({
        tickets: []
    }),
    getters: {
        CARD_TICKETS(state) {
            return state.tickets
        },
    },
    mutations: {
        ADD_TICKET(state, ticket) {
            state.tickets.push(ticket);
        },
    },
    actions: {
    },
    namespaced: true
}