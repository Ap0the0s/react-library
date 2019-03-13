import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

    //show book details popup
    static showDetails() {
        if (document.getElementsByClassName('book-info-bg').length)
            document.getElementsByClassName('book-info-bg')[0].style.display = 'block';
    }

    getBookInfo(book) {
        this.props.selectBook(book);
        BookList.showDetails();
    }

    //generate book info
    renderList() {
        let offset = this.props.books.per_page * (this.props.books.active_page - 1);
        let count = offset + this.props.books.per_page;
        // let actual_page_list = this.props.books; //to see whole list
        let actual_page_list = this.props.books.slice(offset, count);
        return actual_page_list.map(book => (
            <div key={book.id} className='book-item' onClick={() => this.getBookInfo(book)}>
                <span>{book.author}</span>
                <span>{book.title}</span>
                <span>{book.genre}</span>
                <span>{book.publisher}, {book.year}</span>
            </div>));
    }

    render() {
        return (
            <div className="row ">
                {this.renderList()}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({'selectBook': selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);