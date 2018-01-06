import React, { Component } from 'react'
import { connect }          from 'react-redux';

class PostsNew extends Component {
    render() {
        return(
            <div>You found the new post route!</div>
        )
    }
}

const PostsNewContainer = PostsNew
export { PostsNewContainer }