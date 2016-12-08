import React, { Component} from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/PostActions'
import { hashHistory } from 'react-router'

class NewPost extends Component {
  render() {
    return (
      <div>
        <h2>New post</h2>
        <form id='new_post'onSubmit={(e) => this.onSubmit(e)}>
          <p><input type="text" name="post[title]" placeholder="Title" /></p>
          <p><input type="text" name="post[body]"  placeholder="Tell something " /></p>
          <button>Post</button>
        </form>
      </div>
     )
  }
  onSubmit(e){
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(createPost())
    hashHistory.push(`/`)
  }
}

function mapStateToProps(state) {
  return {
    post: state.post
  }
}

export default connect(mapStateToProps)(NewPost)
