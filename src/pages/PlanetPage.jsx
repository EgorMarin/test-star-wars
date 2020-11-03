import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom';

// достал динамический id из роутинга, чтобы зафетчить по нем нужную планету

const PlanetPage = () => {
  let { id } = useParams()
  const history = useHistory()
  const [planet, setPlanet] = useState()

  useEffect(() => {
    const fetchPlanet = async () => {
      const {data} = await axios.get(`https://swapi.dev/api/planets/${id}`)
      setPlanet(data)
    }
    fetchPlanet()
  }, [id])

  const onClickHandler = () => history.goBack()

  return (
    <div className="img-wrapper">
      { planet ? <div className="container">
          <h1>{planet.name}</h1>
          <b className="back" onClick={onClickHandler}>Back to menu</b>

          <div className="planet-info">
            <p>Rotation period: {planet.rotation_period}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Climate: {planet.climate}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Population: {planet.population}</p>
          </div>
        </div>
        : <h1 style={{color: 'white'}}>Loading...</h1>
      }
    </div>
  )
}

export default PlanetPage
