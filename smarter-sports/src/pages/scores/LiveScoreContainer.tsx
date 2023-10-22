import { useEffect } from 'react';
import { useMatchesDispatch } from '../../context/match/context';
import { Outlet } from 'react-router-dom';
import { fetchMatches } from '../../context/match/actions';

const LiveScoreContainer = () => {
  const matchesDispatch = useMatchesDispatch();

  useEffect(() => {
    fetchMatches(matchesDispatch);
  }, [matchesDispatch]);

  return <Outlet />;
};

export default LiveScoreContainer;
