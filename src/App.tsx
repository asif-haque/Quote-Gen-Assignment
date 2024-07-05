import { Route, Routes } from "react-router-dom";
import Generate from "./pages/Generate";
import Bookmarks from "./pages/Bookmarks";
import Navbar from "./components/Navbar";
import { BookmarksContextProvider } from "./contexts/BookmarksContext";
import { useEffect, useState } from "react";

const App = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [data, setData] = useState<string>("");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="">
      <Navbar />
      <BookmarksContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Generate
                mounted={mounted}
                setMounted={setMounted}
                data={data}
                setData={setData}
              />
            }
          />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </BookmarksContextProvider>
    </div>
  );
};

export default App;
