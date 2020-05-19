import {getHeroes, getArtifacts, login, autoLogin} from '../api/apicalls'



export function setHeroes(heroes){
    return {type: "SET_HEROES", payload: heroes}
}


export const fetchHeroes = () => {
    return (dispatch) => {
        getHeroes()
        .then(heroes => {
            dispatch({ type: "SET_HEROES", payload:heroes})
        })
    }
}


export const fetchArtifacts = () => {
    return (dispatch) => {
        getArtifacts()
        .then(artifacts => {
            dispatch({ type: "SET_ARTIFACTS", payload:artifacts})
        })
    }
}

export const loginUser = (username, password) => {
    return (dispatch) => {
        login(username, password)
        .then(user => {
           dispatch({type: "SET_USER", payload:user})
        })
    }
}


export const auto = () => {
    return (dispatch) => {
        autoLogin()
        .then(user => {
           dispatch({type: "SET_USER", payload:user})
        })
    }
}