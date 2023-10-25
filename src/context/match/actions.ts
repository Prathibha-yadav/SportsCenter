import { API_ENDPOINT } from '../../config/constants';
import { MatchDispatch } from './reducer';

export const fetchMatches = async (dispatch: MatchDispatch) => {

  try {
    dispatch({ type: "FETCH_MATCHES_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/matches`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', },
    })
    if (!response.ok) {
      throw new Error("Failed to Fetch match details")
  };
    const data = await response.json();
    // console.log(data)
    
    dispatch({ type: "FETCH_MATCHES_SUCCESS", payload: data.matches });
  } catch (error) {
    console.log('Error fetching matches:', error);
    dispatch({ type: "FETCH_MATCHES_FAILURE", payload: 'Unable to load matches' });
  }
};
