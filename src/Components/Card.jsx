import React from 'react'
import { Link } from 'react-router-dom'
import { useChartStates } from '../Context/Context'

const Card = ({item}) => {

    const {dispatch} = useChartStates()

    const addFav = () => {

        dispatch({type: 'ADD_FAV', payload: item})
    }
  return (

    <div style={{display: 'flex', flexDirection:'column'}}>
        <Link to ={'/detail/' + item.id}>
        <h4>{item.name}</h4>
        <h4>{item.username}</h4>
        <img src="/src/assets/doctor.jpg" alt="" />
        </Link>
        <button onClick={addFav}>💖</button>
    </div>
  )
}

export default Card