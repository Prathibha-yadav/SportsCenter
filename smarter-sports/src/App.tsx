import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { ArticlesProvider } from "./context/articles/context";
import { MatchesProvider } from "./context/match/context";
import { TeamsProvider } from "./context/teams/context";
import { SportsProvider } from "./context/sports/context";


const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`h-screen w-full mx-auto py-2 ${ theme === "dark" ? "dark" : ""}`} >
 <MatchesProvider>
  <TeamsProvider>
    <SportsProvider>
<ArticlesProvider>
 
      <RouterProvider router={router} />
  
</ArticlesProvider>
</SportsProvider>
</TeamsProvider>
</MatchesProvider>
    </div>
  );
};

export default App;