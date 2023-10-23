import { useEffect } from 'react';
import { useMatchesDispatch } from '../../context/match/context';
import { Outlet } from 'react-router-dom';
import { fetchMatches } from '../../context/match/actions';
import { useTeamsDispatch } from '../../context/teams/context';
import { fetchTeams } from '../../context/teams/actions';
import { useSportsDispatch } from '../../context/sports/context';
import { fetchSports } from '../../context/sports/actions';

const LiveScoreContainer = () => {
  const matchesDispatch = useMatchesDispatch();
  const teamDispatch = useTeamsDispatch();
  const sportDispatch = useSportsDispatch();

  useEffect(() => {
    fetchMatches(matchesDispatch);
    fetchTeams(teamDispatch);
    fetchSports(sportDispatch);
  }, [matchesDispatch,teamDispatch,sportDispatch]);

  return <Outlet />;
};

export default LiveScoreContainer;
