import React, { Component }    from 'react'


class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.FindOnePost(id)
    }


    render() {
        const { match } = this.props
        return ( 
            <div>
                You found the show route!
            </div>
        )
    }
}

const mapStateToProps = (state) => { return { post: state.post }  }
console.log(mapStateToProps)
const PostsShowContainer = PostsShow
export { PostsShowContainer }