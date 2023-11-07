import ErrorBoundary from "../../components/ErrorBoundary";
import Appbar from "../../layouts/Appbar";
import Articles from "../articles/Articles";
import Favorites from "../favorites/Favorites";
import LiveScore from "../scores/LiveScore";

function Home() {
  return (
    <>
      <div className="h-screen overflow-y-auto overflow-x-hidden bg-gray-100 dark:bg-slate-800 m-0 p-0">
        <ErrorBoundary>
          <Appbar />
        </ErrorBoundary>
        <div className="flex w-full justify-center">
          <div className="w-full">
            <ErrorBoundary>
              <LiveScore />
            </ErrorBoundary>
          </div>
        </div>
       
        <div className="flex flex-wrap">
          <div className="w-full sm:w-3/4">
            <div className="py-2 px-4">
              <ErrorBoundary>
                <Articles />
              </ErrorBoundary>
            </div>
          </div>
          <div className="w-full sm:w-1/4">
            <div className="py-2 px-4">
              <ErrorBoundary>
                <Favorites />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
