import React, { Component } from 'react'
import { Link }             from 'react-router-dom'  
import { connect }          from 'react-redux';
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
    renderTextInput = (field) => {
        return(
            <div>
                <h3>{ field.label }</h3>
                <input type ='text' { ...field.input } />
                { field.meta.error }
            </div>
        )
    }
    
    render() {
        return(
            <div>
                <div>You found the new post route!</div>
                <form>
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
                    <button type = 'submit' className = 'btn btn-primary' >Submit</button>
                    <Link className = 'btn btn-primary' to = '/' >Cancel</Link>
                </form>
            </div>
        )
    }
}


const validate = (values) => {
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
    console.log(error)
    return error
}

const PostsNewContainer = reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew)
export { PostsNewContainer }