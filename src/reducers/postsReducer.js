import _                                    from 'lodash'
import { FIND_ALL_POSTS, FIND_ONE_POST }    from '../actions/index';

const postsReducer = (state={}, action) => {
    switch(action.type) {
        //The mapKeys function takes an array of objects and turns it into an object full of objects.
        //We'll take one of the keys from each object, in this case 'id', and assign its value as the object's key.
        //As I type that out, that sounds really confusing, but basically it's like this:
        //[ {id:1, text:'hi'},{id:2, text:'bye'} ] --mapKeys--id--> { 1:{id:1, text:'hi'}, 2:{id:2, text:'bye'} }
        case FIND_ALL_POSTS:    
            return _.mapKeys(action.payload.data, 'id')
        case FIND_ONE_POST:
            // Good comparison of old construction vs ES6 construction:
            const post = action.payload.data
            // let newState = state
            // newState[post.id] = post     
            // return newState
            return { ...state, [post.id]: post }
        default:                
            return state
    }
}

export { postsReducer }