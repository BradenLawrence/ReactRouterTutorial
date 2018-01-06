import _                    from 'lodash'
import { FIND_ALL_POSTS }   from '../actions/index';

const postsReducer = (state={}, action) => {
    switch(action.type) {
        //The mapKeys function takes an array of objects and turns it into an object full of objects.
        //We'll take one of the keys from each object, in this case 'id', and assign its value as the object's key.
        //As I type that out, that sounds really confusing, but basically it's like this:
        //[ {id:1, text:'hi'},{id:2, text:'bye'} ] --mapKeys--id--> { 1:{id:1, text:'hi'}, 2:{id:2, text:'bye'} }
        case FIND_ALL_POSTS:    return _.mapKeys(action.payload.data, 'id')
        default:                return state
    }
}

export { postsReducer }