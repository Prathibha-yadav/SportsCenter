import { useEffect } from 'react';
import { useMatchesDispatch } from '../../context/match/context';
import { initialMatches } from './initialData';
import { Outlet } from 'react-router-dom';

const LiveScoreContainer = () => {
  const matchesDispatch = useMatchesDispatch();

  useEffect(() => {
    // Fetch matches from the initial data instead of a server call.
    matchesDispatch?.({ type: 'FETCH_MATCHES_SUCCESS', payload: initialMatches });
  }, [matchesDispatch]);

  return <Outlet />;
};

export default LiveScoreContainer;
