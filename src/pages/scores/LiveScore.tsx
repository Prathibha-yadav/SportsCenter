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
