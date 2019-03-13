import React, {Component} from 'react';
import Header from "./Header.jsx";
import Content from "./Content.jsx";

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <Content/>
            </div>
        );
    }
}
