import React, { Suspense } from "react";
const LiveScoreList = React.lazy(() => import("./LiveScoreList"));
import LiveScoreContainer from "./LiveScoreContainer";
import ErrorBoundary from "../../components/ErrorBoundary";
import AccountLayout from "../../layouts";
import { MatchesProvider } from "../../context/match/context";
import { SportsProvider } from "../../context/sports/context";
import { TeamsProvider } from "../../context/teams/context";

const LiveScore = () => {
  return (
    <>
    <AccountLayout/>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Live Scores
        </h2>
        {/* Add components or buttons for additional functionalities if needed */}
      </div>
      
            <ErrorBoundary>
              <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
                <LiveScoreContainer />
                <LiveScoreList />
              </Suspense>
            </ErrorBoundary>
          
          
      
    </>
  );
};

export default LiveScore;
