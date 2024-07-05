import { useEffect, useState } from "react";
import {
  FaBookmark,
  FaQuoteLeft,
  FaQuoteRight,
  FaRegBookmark,
} from "react-icons/fa";
import { useBookmarksContext } from "../contexts/BookmarksContext";

interface CardPropsType {
  data: string;
  bookmarked?: boolean;
}

const Card: React.FC<CardPropsType> = ({ data, bookmarked = false }) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(bookmarked);
  const { bookmarks, setBookmarks } = useBookmarksContext();

  useEffect(() => {
    bookmarks.forEach((el) => {
      if (el.data === data) {
        setIsBookmarked(true);
      }
    });
  }, []);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);

    if (!isBookmarked) {
      // add to bookmark
      setBookmarks([...bookmarks, { data, bookmarked: true }]);
    } else {
      // remove
      setBookmarks((prevBookmarks) =>
        prevBookmarks.filter((el) => el.data !== data)
      );
    }
  };

  return (
    <div className="hover:shadow-lg hover:translate-y-1 duration-500 cursor-pointer bg-neutral-100 border w-[300px] h-fit p-4 rounded-lg space-y-3">
      <div className="flex justify-center gap-3 text-neutral-700">
        <FaQuoteLeft />
        <FaQuoteRight />
      </div>
      <div className="">{data}</div>
      <div className="flex border-t border-black/15 pt-2">
        <button className="ml-auto text-2xl" onClick={handleBookmark}>
          {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>
    </div>
  );
};

export default Card;
