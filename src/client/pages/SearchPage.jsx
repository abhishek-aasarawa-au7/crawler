import React, { useState, useEffect, useCallback } from "react";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

// api url
import baseURL from "../configs/baseURL";

// component
import DataTable from "../components/Table";

const SearchResult = ({ history }) => {
  // data state
  const [data, setData] = useState([]);

  // fetching search result
  let fetchResult = useCallback(async () => {
    let query = history.location.search.slice(1);
    try {
      let response = await axios.get(`${baseURL}api?${query}`);

      // setting data to state
      setData(response.data.data);
    } catch (err) {
      console.log("error==>", err);
      if (!!err.response && !!err.response.data)
        window.alert(err.response.data.msg);
      window.alert("Sorry! server is down");
    }
  }, [history]);

  // component did mount
  useEffect(() => {
    if (data.length === 0) fetchResult();
  }, [fetchResult, data]);

  return (
    <Paper style={{ height: 693, width: "100%" }}>
      {data.length !== 0 ? (
        <DataTable
          rowCount={data.length}
          rowGetter={({ index }) => data[index]}
          columns={[
            {
              width: 400,
              label: "Title",
              dataKey: "title",
            },
            {
              width: 270,
              label: "IMDb Rating",
              dataKey: "imdb",
              numeric: true,
            },
            {
              width: 270,
              label: "Director",
              dataKey: "director",
            },
            {
              width: 270,
              label: "Genre",
              dataKey: "genre",
            },
            {
              width: 270,
              label: "Stars",
              dataKey: "stars",
            },
          ]}
        />
      ) : (
        <h1>Fetching the list.....</h1>
      )}
    </Paper>
  );
};

export default SearchResult;
