import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card.jsx';
import './Home.css'

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  fetchData();
  }, []);
  
  return (
    <>
     <div className="card-container">
        {data.map((item) => (

            <Card
              key={item.id}
              title={item.title}   
            id={`Album ID: ${item.id}`} 
            />
        ))}
      </div>
    </>
    )

}

export default Home