import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAI

function App() {
  const url = 'https://course-api.com/react-tours-project';
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setIsLoading(false);
          setTours(data)
    })
    }, [])
    function removeItem(id) {
    const modTours = tours.filter(tour => tour.id !== id);
    setTours(modTours);
  }
  return(
        <div>
          <main>
            {isLoading && <Loading />}
          </main>
          <main>
            {!isLoading && tours.length === 0 && <div>  <h2>No hay mas Tours</h2> </div>}
          </main>
          <main>
            {!isLoading && tours.length > 0 && <Tours tours={tours} removeItem={removeItem}/>}
          </main>
        </div>
  )
}

export default App
