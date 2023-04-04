export const movieModule = {
    state: () => ({
        movies: [
            { id: 1, name: 'Шрэк', img: 'shrek', year: 2001, genre: "cartoon", rate: 5, desc: 'Огр-мизантроп спасает принцессу, чтобы вернуть свое болото.'},
            { id: 2, name: 'Шрэк 2', img: 'shrek-2', year: 2004, genre: "cartoon", rate: 5, desc: 'Шрэк и Фиона отправляются в путешествие, полное неожиданностей, и попадает в круговорот событий, во время которых приобретает множество друзей…'},
            { id: 3, name: 'Шрэк Третий', img: 'shrek-3', year: 2007, genre: "cartoon", rate: 4, desc: 'Король Гарольд внезапно умер, и теперь великан Шрек вынужден стать королем Далекой-Далекой страны.'},
            { id: 4, name: 'Шрэк навсегда', img: 'shrek-4', year: 2010, genre: "cartoon", rate: 3.5, desc: 'Шрэк оказывается в альтернативной реальности Тридевятого королевства, где все поставлено с ног на голову'},
            { id: 5, name: 'Головоломка', img: 'inside-out', year: 2015, genre: "cartoon", rate: 4.5, desc: 'Райли — обычная 11-летняя школьница, и, как у каждого из нас, ее поведение определяют пять базовых эмоций: Радость, Печаль, Страх, Гнев и Брезгливость. Чтобы наладить жизнь в большом городе, освоиться в новой школе и подружиться с одноклассниками, эмоциям Райли предстоит снова научиться работать сообща.'},
            { id: 6, name: 'Душа', img: 'soul', year: 2020, genre: "cartoon", rate: 5, desc: 'Уже немолодой школьный учитель музыки Джо Гарднер всю жизнь мечтал выступать на сцене в составе джазового ансамбля. Однажды он успешно проходит прослушивание у легендарной саксофонистки и, возвращаясь домой вне себя от счастья, падает в люк и умирает.'},
            { id: 7, name: 'Суперсемейка', img: 'incredibles', year: 2004, genre: "cartoon", rate: 4.5, desc: 'История семьи супергероев, члены которой уже отошли от больших дел и предпочитают жить непримечательной жизнью обычных землян.'},
            { id: 8, name: 'Суперсемейка 2', img: 'incredibles-2', year: 2018, genre: "cartoon", rate: 4, desc: 'Семейным проблемам предстоит отступить на второй план, когда окажется, что спокойствию Суперсемейки угрожает новый могущественный враг.'},
            { id: 9, name: 'Кот в сапогах', img: 'puss-in-boots', year: 2011, genre: "cartoon", rate: 4.7, desc: 'Кот в сапогах объединяется с умным Шалтай-Болтаем и сообразительной Кисой, чтобы украсть знаменитую Гусыню, несущую золотые яйца.'},
            { id: 10, name: 'Кот в сапогах 2', img: 'puss-in-boots-2', year: 2022, genre: "cartoon", rate: 5, desc: 'Кот в сапогах внимает совету врача и заселяется в дом местной кошатницы. Там он смиряется с установленными порядками, отращивает бороду и теряет тягу к подвигам и приключениям.'},
            { id: 11, name: 'Джордж из джунглей', img: 'george-in-the-jungle', year: 1997, genre: "comedy", rate: 3, desc: 'Джордж вырос в самом сердце африканских джунглей. Среди горилл. Они научили своего воспитанника прыгать по деревьям... но не показали, как приземляться.'},
        ],
        isMoviesLoading: false,
        selectedSort: '',
        selectedFilter: '',
        selectedMainOption: '',
        selectedOption: '',
        page: 1,
        limit: 4,
        totalPages: 0,
        sortOptions: [
            {value: 'year', name: 'По году'},
            {value: 'genre', name: 'По жанру'},
            {value: 'rate', name: 'По рейтингу'},
        ],
        filterOptions: [],
    }),
    getters: {
        MOVIES(state) {
            return state.movies
        },
        FILTERED_MOVIES(state, getters) {
            if (state.selectedMainOption && state.selectedOption) {
                console.log([...state.movies].filter(movie => movie[state.selectedMainOption] === state.selectedOption));
                return [...state.movies].filter(movie => movie[state.selectedMainOption] === state.selectedOption);
            }
            else {
                return getters.MOVIES;
            }

        }
    },
    mutations: {
        SET_TOTAL_PAGES(state, totalPages) {
            state.totalPages = totalPages;
        },
        CURRENT_PAGE(state, num) {
            state.page = num;
        },
        FILTER_OPTIONS(state, selectedSort) {
            state.selectedMainOption = selectedSort;
            state.filterOptions = state.movies.map(v => ({value: v[selectedSort], name: v[selectedSort]}));

            state.filterOptions = [...new Map(state.filterOptions.map(item => [item.value, item])).values()]
                                    .sort(function(a, b) {
                                        return a.value - b.value;
                                    });

        },
        SET_FILTERED_SORT(state, selectedFilter) {
            if (state.selectedMainOption == 'year' || state.selectedMainOption == 'rate') {
                state.selectedOption = Number(selectedFilter);
            }
            else {
                state.selectedOption = selectedFilter;
            }

        },

    },
    actions: {
        countPages({state, commit}) {
            commit("SET_TOTAL_PAGES", Math.ceil(state.movies.length / state.limit));
        },
        // showingMovieList({state, commit}) {
        //     commit
        // }
    },
    namespaced: true
}