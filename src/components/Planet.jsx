import React from 'react'
import { useHistory } from 'react-router-dom'

export const Planet = ({planet, index}) => {
  const history = useHistory()

  // сделал через history.push, а не через Link
  const onClickHandler = () => {
    history.push(`/planet/${index + 1}`)
  }
  return (
    <div className="card" onClick={onClickHandler}>
      <p>{planet.name}</p>
      <p>{planet.climate}</p>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <p>Population:</p>
        <p>{planet.population}</p>
      </div>
    </div>
  )
}
