import React, { Component } from 'react'
import { connect }          from 'react-redux'  
import { FindOnePost }      from '../actions/index';

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.FindOnePost(id)
    }


    render() {
        const { post } = this.props
        if (post) {
            return ( 
                <div>
                    { post.title }
                </div>
            )   
        } else {
            return <div>Loading...</div>
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return { post: state.posts[ownProps.match.params.id] }  
}
const PostsShowContainer = connect(mapStateToProps, { FindOnePost })(PostsShow)
export { PostsShowContainer }