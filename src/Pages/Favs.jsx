import React from 'react'
import { useChartStates } from '../Context/Context'
import Card from '../Components/Card'

const Favs = () => {

  const{state} = useChartStates()

  return (
    <div>
      {state.favs.map(fav => <Card item = {fav} key={fav.id}/>)}
    </div>
  )
}

export default Favs