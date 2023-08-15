import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrains } from '../services/api';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    async function fetchTrains() {
      try {
        const trainsData = await getTrains();
        setTrains(trainsData);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    }

    fetchTrains();
  }, []);

  return (
    <div>
      <h1>All Trains Schedule</h1>
      <ul>
        {trains.map((train) => (
          <li key={train.trainNumber}>
            <Link to={`/train/${train.trainNumber}`}>{train.trainName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTrainsPage;
