import React, { createContext, useContext, useState } from "react";

const ContentContext = createContext();

export const useContent = () => useContext(ContentContext);

export const ContentProvider = ({ children }) => {
  const [movieList, setMovieList] = useState([]);
  return (
    <ContentContext.Provider value={{ movieList, setMovieList }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContext;
