import blogs from '../../FakeData/FakeData.json'

const initialState = {
    blogsList: [...blogs],
    users: []
}

const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_BLOG': {
            const newState = {
                ...state,
                blogsList: [...state.blogsList, action.payload]
            }
            return newState
        }

        default: {
            return state
        }

    }
}

export default blogsReducer