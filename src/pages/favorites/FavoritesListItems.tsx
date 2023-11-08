import  { useState } from 'react';
import { useMatchesState } from '../../context/match/context';
import MatchModal from './FavoritesModal';

const FavoritesListItems = () => {
  const state = useMatchesState();
  const { matches, isLoading, isError, errorMessage } = state;

  const [selectedSportName, setSelectedSportName] = useState('');
  const [selectedTeamName, setSelectedTeamName] = useState('');

  // Filter the matches based on selectedSportName and selectedTeamName
  const filteredMatches = matches.filter((match) => {
    const sportNameFilter = !selectedSportName || match.sportName === selectedSportName;
    const teamNameFilter = !selectedTeamName || match.name === selectedTeamName;
    return sportNameFilter && teamNameFilter;
  });

  if (matches.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const MatchDetails = (id : number) => {
    return <MatchModal id={id} />;
  };

  return (
    <>
      <div className='flex flex-wrap w-full'>
      <div className="p-4 flex flex-col">
        <div className='bg-white p-4 rounded shadow-md min-w-[300px]'>
          <label htmlFor="sportNameFilter">Sport Name:</label>
          <select
            id="sportNameFilter"
            value={selectedSportName}
            onChange={(e) => setSelectedSportName(e.target.value)}
          >
            <option value="">All</option>
            {/* Add options based on available sport names */}
            {matches.map((match) => (
              <option key={match.id} value={match.sportName}>
                {match.sportName}
              </option>
            ))}
          </select>
        </div>
        <div className='bg-white p-4 rounded shadow-md min-w-[300px]'>
          <label htmlFor="teamNameFilter">Team Name:</label>
          <select
            id="teamNameFilter"
            value={selectedTeamName}
            onChange={(e) => setSelectedTeamName(e.target.value)}
          >
            <option value="">All</option>
            {/* Add options based on available team names */}
            {matches.map((match) => (
              <option key={match.id} value={match.name}>
                {match.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display filtered matches */}
      
      <div className="p-4 flex flex-col">
        {filteredMatches.map((match) => (
          <div key={match.id} className="bg-white p-4 rounded shadow-md min-w-[300px]">
            <div className="flex justify-between mb-2">
              <p className="text-lg font-semibold">{match.sportName}</p>
            </div>
            <p className="text-xs text-gray-600">
              Ends At:{' '}
              {new Date(match.endsAt).toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
            <p className="text-base">{match.name}</p>
            <div key={match.endsAt}>
              {MatchDetails(match.id)}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FavoritesListItems;
