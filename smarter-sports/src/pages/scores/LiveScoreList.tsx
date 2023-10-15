//ArtcleList.tsx
import { MatchesProvider } from "../../context/match/context";
import { SportsProvider } from "../../context/sports/context";
import { TeamsProvider } from "../../context/teams/context";
import LiveScoreListItems from "./LiveScoreListItems"; 
const LiveScoreList = () => {
  return (
    <div className=" mt-5">
    <MatchesProvider>
      <SportsProvider>
        <TeamsProvider>
          <LiveScoreListItems />
        </TeamsProvider>
      </SportsProvider>
    </MatchesProvider>
    </div>
  );
};

export default LiveScoreList;
