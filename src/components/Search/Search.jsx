import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../reducer/reducer";
import AddIcon from "@mui/icons-material/Add";

function Search({ hideButtons }) {
  const [{ term }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    navigate("/search");
  };

  return (
    <form className="search" onSubmit={search}>
      <div className="search_data">
        <SearchIcon className="inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="buttons shortcuts">
          <Button variant="outlined">
            <AddIcon className="addIcon" />
            <div className="addShortcuts">Add Shortcuts</div>
          </Button>
        </div>
      ) : (
        <Button variant="outlined" className="buttonsHidden">
          Add Shortcuts
        </Button>
      )}
    </form>
  );
}

export default Search;
