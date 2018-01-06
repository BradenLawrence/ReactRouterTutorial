import _                    from 'lodash'
import React, { Component } from 'react'
import { connect }          from 'react-redux'  
import { FindAllPosts }     from '../actions'

class PostsIndex extends Component {
    componentDidMount() {
        this.props.FindAllPosts()
    }
    
    renderPosts = () => {
        return _.map(this.props.posts, post => {
            return( <li className='list-group-item' key='{ post.id }'>{ post.title }</li> )
        })
    }

    render() {
        return(
            <div>
                <h2>Posts</h2>
                <ul className='list-group'>
                    { this.renderPosts() }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => { return { posts: state.posts } }
const PostsIndexContainer = connect(mapStateToProps, { FindAllPosts })(PostsIndex)
export { PostsIndexContainer }