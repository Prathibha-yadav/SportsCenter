// sportsAPI.ts

import { API_ENDPOINT } from '../../config/constants';

export const fetchSports = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";

  try {
    dispatch({ type: "FETCH_SPORTS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/sports`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_SPORTS_SUCCESS", payload: data });
  } catch (error) {
    console.log('Error fetching sports:', error);
    dispatch({ type: "FETCH_SPORTS_FAILURE", payload: 'Unable to load sports' });
  }
};

export const addSport = async (dispatch: any, args: any) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/sports`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
      body: JSON.stringify(args),
    });
    if (!response.ok) {
      throw new Error('Failed to create sport');
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message }
    }
    dispatch({ type: 'ADD_SPORT_SUCCESS', payload: data });

    return { ok: true }
  } catch (error) {
    console.error('Operation failed:', error);
    return { ok: false, error }
  }
};
