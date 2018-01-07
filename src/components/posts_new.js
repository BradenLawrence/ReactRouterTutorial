import React, { Component } from 'react'
import { Link }             from 'react-router-dom'  
import { connect }          from 'react-redux';
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
    renderTextInput = (field) => {
        return(
            <div>
                <h3>{ form.label }</h3>
                <input type ='text' { ...field.input } />
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
                </form>
                <div className='text-xs-right'>
                    <Link className = 'btn btn-primary' to = '/' >
                        Cancel
                    </Link>
                </div>
            </div>
        )
    }
}


const PostsNewContainer = reduxForm({
    validate(values)    {
        const errors = {}
        if( !values.title ) {
            errors.title = 'Please enter a title'
        }
        if( !values.tags ) {
            errors.title = 'Please enter at least one tag'
        }
        if( !values.body ) {
            errors.title = 'Post contents cannot be empty'
        }
        return errors
    },
    form:               'PostsNewForm'
})(PostsNew)
export { PostsNewContainer }