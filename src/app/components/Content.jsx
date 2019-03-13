import React from 'react';
import BookList from '../containers/book_list';
import BookDetail from "../containers/book_detail";

const Content = () => (
    <div className="content">
        <BookList/>
        <BookDetail/>
    </div>
);
export default Content;