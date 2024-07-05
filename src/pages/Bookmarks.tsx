import { useBookmarksContext } from "../contexts/BookmarksContext";
import Card from "../components/Card";

const Bookmarks = () => {
  const { bookmarks } = useBookmarksContext();
  return (
    <div className="space-y-5 md:space-y-0 md:flex flex-wrap p-5 gap-5">
      {bookmarks.map((el) => (
        <Card data={el.data} key={el.data} bookmarked={el.bookmarked} />
      ))}
    </div>
  );
};

export default Bookmarks;
