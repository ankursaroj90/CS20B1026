import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTrainByNumber } from '../services/api';

const SingleTrainPage = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState({});

  useEffect(() => {
    async function fetchTrain() {
      try {
        const trainData = await getTrainByNumber(trainNumber);
        setTrain(trainData);
      } catch (error) {
        console.error('Error fetching train details:', error);
      }
    }

    fetchTrain();
  }, [trainNumber]);

  return (
    <div>
      <h1>{train.trainName}</h1>
      <p>Train Number: {train.trainNumber}</p>
      {/* Display seat availability and prices here */}
    </div>
  );
};

export default SingleTrainPage;
