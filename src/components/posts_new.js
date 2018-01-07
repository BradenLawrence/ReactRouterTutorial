import React, { Component } from 'react'
import { Link }             from 'react-router-dom'  
import { connect }          from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { CreatePost }       from '../actions/index';

class PostsNew extends Component {
    
    renderTextInput = (field) => {
        const formClassNames = 'form-group ' + (field.meta.touched && field.meta.error ? 'has-danger' : '')
        return(
            <div className={ formClassNames }>
                <h3>{ field.label }</h3>
                <input className = 'form-control' type ='text' { ...field.input } />
                <div className = 'text-help'>
                    { field.meta.touched ? field.meta.error : '' }
                </div>
            </div>
        )
    }
    
    onSubmit(values) {
        this.props.CreatePost(values, () => {
            this.props.history.push('/')
        })
    }

    render() {
        const { handleSubmit } = this.props
        return(
            <div>
                <div>You found the new post route!</div>
                {/* Here is a good example of how to write a function the normal way as well as with arrow functions  */}
                {/* <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) } >  */}
                <form onSubmit = { handleSubmit((values) => this.onSubmit(values)) } >
                    <Field 
                        label =     'Title'
                        name =      'title' 
                        component = { this.renderTextInput } 
                    />
                    <Field 
                        label =     'Tags'
                        name =      'tags' 
                        component = { this.renderTextInput } 
                    />
                    <Field 
                        label =     'Post contents'
                        name =      'body' 
                        component = { this.renderTextInput } 
                    />
                    <button type ='submit' className ='btn btn-primary' >Submit</button>
                    <Link className ='btn btn-danger form-cancel' to = '/' >Cancel</Link>
                </form>
            </div>
        )
    }
}

const PostsNewContainer = reduxForm({
    validate(values) {
        const error = {}
        if( !values.title ) {
            error.title = 'Please enter a title'
        }
        if( !values.tags ) {
            error.tags = 'Please enter at least one tag'
        }
        if( !values.body ) {
            error.body = 'Post contents cannot be empty'
        }
        return error
    },
    form: 'PostsNewForm'
})(
    connect(null, { CreatePost })(PostsNew)
)
export { PostsNewContainer }