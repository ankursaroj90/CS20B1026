const BASE_URL = 'http://20.244.56.144';

const fetchJson = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

export const getTrains = async () => {
  const url = `${BASE_URL}/train/trains`;
  return fetchJson(url);
};

export const getTrainByNumber = async (trainNumber) => {
  const url = `${BASE_URL}/train/trains/${trainNumber}`;
  return fetchJson(url);
};
