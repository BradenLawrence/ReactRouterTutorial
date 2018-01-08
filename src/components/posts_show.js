import React, { Component } from 'react'
import { connect }          from 'react-redux'  
import { FindOnePost }      from '../actions/index';
import { Link }             from 'react-router-dom';

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
                    <div className='text-xs-right'>
                        <Link to='/' className='btn btn-primary'>Back</Link>
                    </div>
                    <div>
                        <h2>{ post.title }</h2>
                        <h6>Tags: { post.categories }</h6>
                        <p>{ post.content }</p>
                        <button className='btn btn-danger' onClick= { (id) => this.onDeleteClick() }>
                            Delete
                        </button>
                    </div>
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