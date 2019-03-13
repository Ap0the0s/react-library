export default function (state, action) {
    const per_page = 3;

    //initialize books array
    const initial_state = [
        {
            'id': 1,
            'publisher': 'Publisher #1',
            'year': '2001',
            'pages': 325,
            'title': 'Book #1 ',
            'genre': 'Detective',
            'author': 'Author #1'
        },
        {
            'id': 2,
            'publisher': 'Publisher #4',
            'year': '2003',
            'pages': 133,
            'title': 'Book #2',
            'genre': 'Scifi',
            'author': 'Author #2'
        },
        {
            'id': 3,
            'publisher': 'Publisher #9',
            'year': '2003',
            'pages': 443,
            'title': 'Book #3',
            'genre': 'Science',
            'author': 'Author #3'
        },
        {
            'id': 4,
            'publisher': 'Publisher #3',
            'year': '2012',
            'pages': 213,
            'title': 'Book #4',
            'genre': 'Children',
            'author': 'Author #4'
        },
        {
            'id': 5,
            'publisher': 'Publisher #2',
            'year': '2001',
            'pages': 422,
            'title': 'Book #5',
            'genre': 'Programming',
            'author': 'Author #5'
        },
        {
            'id': 6,
            'publisher': 'Publisher #7',
            'year': '2018',
            'pages': 125,
            'title': 'Book #6',
            'genre': 'Fantasy',
            'author': 'Author #6'
        },
        {
            'id': 7,
            'publisher': 'Publisher #7',
            'year': '2012',
            'pages': 663,
            'title': 'Book #7',
            'genre': 'Detective',
            'author': 'Author #1'
        },
        {
            'id': 8,
            'publisher': 'Publisher #5',
            'year': '2014',
            'pages': 988,
            'title': 'Book #8',
            'genre': 'Fantasy',
            'author': 'Author #8'
        },
        {
            'id': 9,
            'publisher': 'Publisher #9',
            'year': '2018',
            'pages': 447,
            'title': 'Book #9',
            'genre': 'Science',
            'author': 'Author #9'
        },
        {
            'id': 10,
            'publisher': 'Publisher #5',
            'year': '1998',
            'pages': 764,
            'title': 'Book #10',
            'genre': 'Programming',
            'author': 'Author №13'
        },
        {
            'id': 11,
            'publisher': 'Publisher #1',
            'year': '1975',
            'pages': 230,
            'title': 'Book #11',
            'genre': 'Children',
            'author': 'Author №11'
        },
        {
            'id': 12,
            'publisher': 'Publisher #6',
            'year': '2019',
            'pages': 359,
            'title': 'Book #12',
            'genre': 'Scifi',
            'author': 'Author №17'
        },
        {
            'id': 13,
            'publisher': 'Publisher #6',
            'year': '2001',
            'pages': 412,
            'title': 'Book #13',
            'genre': 'Programming',
            'author': 'Author №13'
        },
        {
            'id': 14,
            'publisher': 'Publisher #2',
            'year': '2019',
            'pages': 873,
            'title': 'Book #14',
            'genre': 'Children',
            'author': 'Author №14'
        },
        {
            'id': 15,
            'publisher': 'Publisher #4',
            'year': '2010',
            'pages': 542,
            'title': 'Book #15',
            'genre': 'Detective',
            'author': 'Author №15'
        },
        {
            'id': 16,
            'publisher': 'Publisher #4',
            'year': '2007',
            'pages': 360,
            'title': 'Book #16',
            'genre': 'Children',
            'author': 'Author №14'
        },
        {
            'id': 17,
            'publisher': 'Publisher #7',
            'year': '2007',
            'pages': 215,
            'title': 'Book #17',
            'genre': 'Scifi',
            'author': 'Author №17'
        },
        {
            'id': 18,
            'publisher': 'Publisher #9',
            'year': '2019',
            'pages': 389,
            'title': 'Book #18',
            'genre': 'Programming',
            'author': 'Author №18'
        },
        {
            'id': 19,
            'publisher': 'Publisher #8',
            'year': '2017',
            'pages': 502,
            'title': 'Book #19',
            'genre': 'Scifi',
            'author': 'Author №19'
        },
        {
            'id': 20,
            'publisher': 'Publisher #5',
            'year': '2016',
            'pages': 614,
            'title': 'Book #20',
            'genre': 'Science',
            'author': 'Author #3'
        }
    ];

    if (!state) {
        state = initial_state;
        state.per_page = per_page;
        state.active_page = 1;
        state.pages = Math.ceil(state.length / per_page);
    }

    if (action.type === 'FILTERS_CHANGED') {
        let new_state = [];

        for (let i = 0; i < initial_state.length; i++) {
            let filter_checking = 0;
            for (let filter in action.filters) {
                // if (initial_state[i][filter] === action.filters[filter] || action.filters[filter] === "0") { //for non-multiple select
                if (action.filters[filter].indexOf(initial_state[i][filter]) >= 0 || action.filters[filter] === "0" || action.filters[filter] === "") {
                    filter_checking++;
                }
            }

            if (filter_checking === Object.keys(action.filters).length)
                new_state.push(initial_state[i]);
        }
        new_state.per_page = per_page;
        new_state.active_page = action.page;
        new_state.pages = Math.ceil(new_state.length / per_page);
        return new_state;
    }
    return state;
}