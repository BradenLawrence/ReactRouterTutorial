import _                    from 'lodash'
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { Link }             from 'react-router-dom'  
import { FindAllPosts }     from '../actions'

class PostsIndex extends Component {
    componentDidMount() {
        this.props.FindAllPosts()
    }
    
    showRouteLink(id) {
        return `/posts/${ id }`
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return( 
                <li className='list-group-item' key={ post.id }>
                    <Link to={ this.showRouteLink(post.id) }>
                        { post.title }
                    </Link>
                </li> )
        })
    }

    render() {
        return(
            <div>
                <div className='text-xs-right'>
                    <Link className='btn btn-primary' to='/posts/new'>
                        New Post
                    </Link>
                </div>
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