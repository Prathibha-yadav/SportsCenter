import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { ArticlesProvider } from "./context/articles/context";


const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full mx-auto py-2 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <ArticlesProvider>
       
              <RouterProvider router={router} />
        
      </ArticlesProvider>
    </div>
  );
};

export default App;