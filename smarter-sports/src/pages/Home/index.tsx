import ErrorBoundary from "../../components/ErrorBoundary";
import Appbar from "../../layouts/Appbar";
import Articles from "../articles/Articles";
import LiveScore from "../scores/LiveScore";

function Home() {
  return (
    <>
      <div className="h-screen overflow-y-auto no-scrollbar bg-gray-100 dark:bg-slate-800 m-0 p-0">
        <ErrorBoundary>
          <Appbar />
        </ErrorBoundary>
        <div className="flex w-full justify-center">
          <ErrorBoundary>
            <LiveScore />
          </ErrorBoundary>
        </div>
        <div className="py-2 px-4">
          <ErrorBoundary>
            <Articles />
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}

export default Home;