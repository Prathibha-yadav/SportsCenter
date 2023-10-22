import React, { Suspense, useEffect } from "react";
const LiveScoreList = React.lazy(() => import("./LiveScoreList"));
import LiveScoreContainer from "./LiveScoreContainer";
import ErrorBoundary from "../../components/ErrorBoundary";
import { fetchMatches } from "../../context/match/actions";
import { useMatchesDispatch } from "../../context/match/context";
const LiveScore = () => {
  const dispatch = useMatchesDispatch();
 

  useEffect(() => {
    fetchMatches(dispatch);
   
  }, []);
  return (
    <>
    
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Live Scores
        </h2>
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
