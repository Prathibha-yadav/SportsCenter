import LiveScoreListItems from "./LiveScoreListItems"; 
const LiveScoreList = () => {
  return (
    <div className=" mt-5 overflow-x-scroll">
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Live Scores
        </h2>
      </div>
          <LiveScoreListItems />
        
    </div>
  );
};

export default LiveScoreList;
