import FavoritesListItems from "./FavoritesListItems"; 
const FavoritesList = () => {
  return (
    <div className=" mt-5 ">
      <div className="flex h-full justify-end">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
        Favorites
        </h2>
      
          <FavoritesListItems />
          </div>
    </div>
  );
};

export default FavoritesList;
