import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {

    //hide book details popup
    static hideDetails() {
        if (document.getElementsByClassName('book-info-bg').length)
            document.getElementsByClassName('book-info-bg')[0].style.display = 'none';
    }

    render() {
        if (!this.props.book) {
            return '';
        }
        return (
            <div className='book-info-bg' onClick={BookDetail.hideDetails}>
                <div className='book-info' onClick={function (e) {
                    e.stopPropagation()
                }}>
                    <h3>Details for: {this.props.book.title}</h3>
                    <div>Author: {this.props.book.author}</div>
                    <div>Genre: {this.props.book.genre}</div>
                    <div>Publisher: {this.props.book.publisher}</div>
                    <div>Year: {this.props.book.year}</div>
                    <div>Pages count: {this.props.book.pages}</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);