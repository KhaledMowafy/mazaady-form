import { useState, useEffect } from "react";
import { readAll } from "./API";

function useApiServices({ path, CRUD, id='' }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (CRUD === "get") {
      readAll(path)
        .then((response) => {
          setData(response);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }else if(CRUD==='getID'&& id!==''){
      readAll(`${path}`)
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    }
  }, [path, CRUD, id]);

  return {data, loading, error};
}

export default useApiServices;
