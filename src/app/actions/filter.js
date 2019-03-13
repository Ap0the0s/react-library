export function filterBooks(page = 1) {
    let filter_select = document.getElementsByClassName('filter-select');
    let filters = [];
    //get filters values
    for (let item of filter_select) {
        let type = item.dataset.type;
        filters[type] = [];
        for (var i = 0; i < item.length; i++) {
            if (item.options[i].selected) filters[type].push(item.options[i].value);
        }
        filters[type] = filters[type].join(',');
    }
    return {
        type: 'FILTERS_CHANGED',
        filters: filters,
        page: page
    };
}

