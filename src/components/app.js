import React, { Component } from 'react';
import Header from './main_header';
import Footer from './main_footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
