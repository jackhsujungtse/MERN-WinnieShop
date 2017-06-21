import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
    componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <div>
              <strong className="pull-xs-right">{post.title}</strong>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
		<img id="header-image" src="assets/images/topimg.png" alt="Winnie walking" width="100%"/>          
        <h3 id="main-title-proposal">People Who Bought</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
        <div className="text-xs-right">
          <Link to="/shopping" className="btn-goshopping">
           Go Shopping
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
