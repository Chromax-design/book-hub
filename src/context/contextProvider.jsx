import React, { useCallback, useEffect, useState } from "react";
import Context from "./context";
import axios from "axios";

const ContextProvider = ({ children }) => {
  const [search, setsearch] = useState("Harry Potter");
  const [loading, setloading] = useState(false);
  const [result, setresult] = useState([]);

  const url = `https://openlibrary.org/search.json?title=${search}`;
  const getdata = useCallback(async () => {
    setloading(true);
    const { data } = await axios.get(url);
    setresult(data.docs);
    setloading(false);
  }, [search]);

  useEffect(() => {
    getdata();
  }, [search, getdata]);

  return (
    <Context.Provider
      value={{search, setsearch, loading, setloading, result, setresult}}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
