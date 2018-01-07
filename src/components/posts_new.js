import React, { Component } from 'react'
import { Link }             from 'react-router-dom'  
import { connect }          from 'react-redux';
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
    renderTextInput = (field) => {
        return(
            <div>
                <input type='text' { ...field.input } />
            </div>
        )
    }
    
    render() {
        return(
            <div>
                <div>You found the new post route!</div>
                <form>
                    <Field name='Title' component={ this.renderTextInput } />
                </form>
                <div className='text-xs-right'>
                    <Link className='btn btn-primary' to='/'>
                        Cancel
                    </Link>
                </div>
            </div>
        )
    }
}


const PostsNewContainer = reduxForm({
    form: 'PostsNewForm'
})(PostsNew)
export { PostsNewContainer }