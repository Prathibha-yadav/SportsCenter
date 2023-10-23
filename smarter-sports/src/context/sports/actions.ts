// sportsAPI.ts

import { API_ENDPOINT } from '../../config/constants';
import { SportDispatch } from './reducer';

export const fetchSports = async (dispatch: SportDispatch) => {

  try {
    dispatch({ type: "FETCH_SPORTS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/sports`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',  },
    });
    const data = await response.json();
    console.log(data)
    dispatch({ type: "FETCH_SPORTS_SUCCESS", payload: data.sports });
  } catch (error) {
    console.log('Error fetching sports:', error);
    dispatch({ type: "FETCH_SPORTS_FAILURE", payload: 'Unable to load sports' });
  }
};

