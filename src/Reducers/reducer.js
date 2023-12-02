export const reducer = (state, action) => {

    switch(action.type){
        case 'GET_DOCTORES':
            return {...state, list: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'GET_DOCTOR':
            return {}
    }
}