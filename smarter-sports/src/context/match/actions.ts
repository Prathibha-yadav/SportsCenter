import { API_ENDPOINT } from '../../config/constants';
export const fetchMatches = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";

  try {
    dispatch({ type: "FETCH_MATCHES_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/matches`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_MATCHES_SUCCESS", payload: data });
  } catch (error) {
    console.log('Error fetching matches:', error);
    dispatch({ type: "FETCH_MATCHES_FAILURE", payload: 'Unable to load matches' });
  }
};

export const addMatch = async (dispatch: any, args: any) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/matches`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
      body: JSON.stringify(args),
    });
    if (!response.ok) {
      throw new Error('Failed to create match');
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }
    dispatch({ type: 'ADD_MATCH_SUCCESS', payload: data });

    return { ok: true };
  } catch (error) {
    console.error('Operation failed:', error);
    return { ok: false, error };
  }
};
