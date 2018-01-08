import Axios from 'axios'

const FIND_ALL_POSTS =  'FIND_ALL_POSTS',
      CREATE_POST =     'CREATE_POST',
      FIND_ONE_POST =   'FIND_ONE_POST',
      DELETE_POST =     'DELETE_POST',
      ROOT_URL =        'http://reduxblog.herokuapp.com/api/',
      API_KEY =         '?key=BostonBlizzard1234'

const FindAllPosts = function() {
    const request = Axios.get(`${ROOT_URL}/posts${API_KEY}`)
    return {
        type:       FIND_ALL_POSTS,
        payload:    request
    }
}

const CreatePost = function(values, callback) {
    const request = Axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then( () => callback() )

    return {
        type:       CREATE_POST,
        payload:    request
    }
}

const FindOnePost = function(id) {
    const request = Axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
    return {
        type:       FIND_ONE_POST,
        payload:    request
    }
}

const DeletePost = function(id, callback) {
    const request = Axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then( () => callback() )
    return {
        type:       DELETE_POST,
        payload:    request
    }
}

export { 
        FIND_ALL_POSTS, FindAllPosts,
        CREATE_POST,    CreatePost,
        FIND_ONE_POST,  FindOnePost,
        DELETE_POST,    DeletePost
     }