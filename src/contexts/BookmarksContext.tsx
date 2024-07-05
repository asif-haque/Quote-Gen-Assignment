import React, { createContext, ReactNode, useContext, useState } from "react";

interface Bookmark {
  data: string;
  bookmarked: boolean;
}

interface BookmarksContextType {
  bookmarks: Bookmark[] | [];
  setBookmarks: React.Dispatch<React.SetStateAction<Bookmark[] | []>>;
}

const BookmarksContext = createContext<BookmarksContextType | undefined>(
  undefined
);

interface PropsType {
  children: ReactNode;
}

export const BookmarksContextProvider: React.FC<PropsType> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[] | []>([]);

  return (
    <BookmarksContext.Provider value={{ bookmarks, setBookmarks }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export const useBookmarksContext = () => {
  const context = useContext(BookmarksContext);
  if (context === undefined)
    throw new Error("Must call from the Nodes under Provider");
  return context;
};
