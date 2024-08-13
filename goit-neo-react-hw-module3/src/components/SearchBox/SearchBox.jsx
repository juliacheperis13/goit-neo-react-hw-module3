const SearchBox = ({ searchRequest, handleChange }) => {
  return (
    <div className="inputContainer  container">
      <label htmlFor="search">Find contacts by name</label>
      <input
        name="search"
        type="text"
        className="input"
        value={searchRequest}
        onChange={handleChange}
        placeholder="Search ..."
      />
    </div>
  );
};

export default SearchBox;
