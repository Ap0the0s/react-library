import React from 'react';
import BookList from '../containers/book_list';
import BookDetail from "../containers/book_detail";
import Pagination from "../containers/pagination";

const Content = () => (
    <div className="content">
        <BookList/>
        <Pagination/>
        <BookDetail/>
    </div>
);
export default Content;