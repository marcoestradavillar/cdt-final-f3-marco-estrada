import { createContext, useContext, useReducer, useEffect} from "react";
import { reducer } from "../Reducers/reducer";
import axios from "axios";

const CharStates = createContext()

const initialState = {

    list: [],
    favs: JSON.parse(localStorage.getItem('favs')) || []
    
}

const Context = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)

    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() =>{

        axios(url)
        .then(res => dispatch({type: 'GET_DOCTORES', payload: res.data}))

    }, [])

    useEffect(() =>{

        localStorage.setItem('favs', JSON.stringify(state.favs))

    }, [state.favs])

    return(
        <CharStates.Provider value = {{state, dispatch}}>
            {children}
        </CharStates.Provider>
    )
}

export default Context

export const useChartStates = () => useContext(CharStates)