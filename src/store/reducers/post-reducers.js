import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes-actions'

const initialState = {
    posts:[{
        id: Math.random(),
        nickname: 'Rafael',
        email: 'rafs@email.com',
        image: require('../../../assets/imgs/fence.jpg'),
        comments:[{
            nickname: 'Jonh',
            comment: 'Stunning'
        },{
            nickname: 'AnJu',
            comment:'Bela foto'
        }]
    }]
}

const reducer = ( state = initialState, actions ) =>{
    switch (actions.type) {
        case ADD_POST:
             
            return{
                ...state,                
                posts: state.posts.concat({
                    ...actions.payload
                })
            }
        case ADD_COMMENT:
            
            return{
                ...state,
                posts: state.posts.map( post => {                    
                    if(post.id === actions.payload.postId){
                        if( post.comments ){
                            post.comments = post.comments.concat(
                                actions.payload.comment
                            )
                        } else{
                            post.comments = [ actions.payload.comment ]
                        }                    
                        console.log('Post '+post);    
                        return post
                    }
                })
            }
        default:
            return state
    }
}
export default reducer