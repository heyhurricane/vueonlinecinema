export const ticketsModule = {
    state: () => ({
        tickets: [],
        purchasedTickets: []
    }),
    getters: {
    },
    mutations: {
        ADD_TICKET(state, ticket) {
            console.log("Билеты в корзине", state.tickets);
            console.log("Купленные билеты до записи1", state.purchasedTickets);
            state.tickets.push(ticket);
        },
        BUY_TICKET(state, pickedTickets) {
            console.log("Купленные билеты до записи2", state.purchasedTickets);
            pickedTickets.forEach((ticket) => {
                state.purchasedTickets.push(ticket);
            })
            state.tickets = [];
            console.log("Купленные билеты после записи", state.purchasedTickets);
            console.log("Билеты в корзине после покупки", state.tickets);

        }
    },
    actions: {
    },
    namespaced: true
}