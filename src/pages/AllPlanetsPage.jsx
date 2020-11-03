import React, { useEffect, useState } from 'react'
import { Planet } from '../components/Planet'
import axios from 'axios'
import '../app.scss'

// стандартное получение данных на React: как компонент будет отрендерен
// делается fetch-запрос, получаем в ответ наши планеты, добавляем их в state компонента,
// прокидываем в jsx.

const AllPlanetsPage = () => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    const fetchPlanets = async () => {
      const {data} = await axios.get('https://swapi.dev/api/planets/')
      setPlanets(data.results)
    }
    fetchPlanets()
  }, [])

  return (
    <div className="img-wrapper">
      <div className="container">
        <h1>Star Wars Planets</h1>

        <div className="planets">
          {
            planets.map((planet, index) => (
              <Planet planet={planet} index={index}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AllPlanetsPage