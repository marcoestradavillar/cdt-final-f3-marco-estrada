import React from 'react'
import { useChartStates } from '../Context/Context'
import Card from '../Components/Card'



const Home = () => {

  const {state} = useChartStates()

  return (
    <div>
      {state.list.map(item => <Card item={item} key={item.id}/>)}
    </div>
  )
}

export default Home