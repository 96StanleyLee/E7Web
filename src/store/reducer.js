const heroes = []
const artifacts = []

const defaultState = {
    heroes: heroes,
    artifacts: artifacts,
    user: {}
}




const reducer = (state = defaultState, action) => {
    console.log(action)
    switch(action.type) {
        case "SET_HEROES":
            return {...state, heroes: action.payload}
        case "SET_ARTIFACTS":
            return {...state, artifacts: action.payload}
        case "SET_USER":
            return {...state, user: action.payload}
        default: return state
    }
}


export default reducer