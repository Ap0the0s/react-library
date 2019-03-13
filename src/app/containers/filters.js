import React, {Component} from 'react';
import {connect} from "react-redux";
import {filterBooks} from '../actions/filter';
import {bindActionCreators} from "redux";

class Filters extends Component {

    //get filters from books params
    getFiltersList() {
        let filters = [];
        let genre = [];
        let author = [];
        let year = [];
        this.props.books.map(book => {
            genre.push((book.genre));
            author.push((book.author));
            year.push((book.year));
        });
        genre = genre.filter(this.onlyUnique);
        author = author.filter(this.onlyUnique);
        year = year.filter(this.onlyUnique);
        filters['genre'] = genre.sort();
        filters['author'] = author.sort();
        filters['year'] = year.sort();
        return filters;
    }

    //render filters elements
    renderFilters() {
        let filters = this.getFiltersList();

        return Object.keys(filters).map((key) => (
                <div className='select-wrap' key={key}>
                    <span>{key}s</span>
                    <select multiple className={`filter-select ${key}`} data-type={key}
                            onChange={() => this.props.filterBooks()}> {/*defaultValue={[0]}*/}
                        {/*<option value='0'>All {key}s</option>*/}
                        {this.renderSingleFilter(filters[key])}
                    </select>
                </div>
            )
        );
    }

    renderSingleFilter(filter) {
        return Object.keys(filter).map((key) => (
                <option key={key} value={filter[key]}>
                    {filter[key]}
                </option>
            )
        );
    }

    //remove repeated values from array
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    //deny component update to avoid filters changing
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (<div className="filters">
                {this.renderFilters()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({'filterBooks': filterBooks}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);