import React from "react";

function SearchItem({ search, setSearch }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Tasks"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </form>
  );
}

export default SearchItem;
