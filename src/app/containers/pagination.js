import React, {Component} from 'react';
import {connect} from "react-redux";
import {filterBooks} from '../actions/filter';
import {bindActionCreators} from "redux";

class Pagination extends Component {

    //render filters elements
    renderPages() {
        let pages = [];

        for (let i = 1; i <= this.props.books.pages; i++) {
            pages[i] = i;
        }
        return pages.map(page => (
            <span className={this.props.books.active_page === page ? 'page active-page' : 'page'} key={page}
                  onClick={() => this.props.filterBooks(page)}>{page}</span>
        ));
    }

    render() {
        return (<div className="pages">
                {this.renderPages()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);