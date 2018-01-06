import Axios from 'axios'

const FIND_ALL_POSTS =  'FIND_ALL_POSTS'
const ROOT_URL =        'http://reduxblog.herokuapp.com/api/'
const API_KEY =         '?key=BostonBlizzard1234'

const FindAllPosts = function() {
    const request = Axios.get(`${ROOT_URL}/posts${API_KEY}`)
    return {
        type:       FIND_ALL_POSTS,
        payload:    request
    }
}

export { FIND_ALL_POSTS, FindAllPosts }