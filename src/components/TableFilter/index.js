const TableFilter = ({ filter, setFilter }) => {
  return (
    <div className="input__field">
      <div className="input__field--group">
        <input
          placeholder="Search"
          type="search"
          value={filter || ""}
          onChange={(e) => {
            setFilter(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default TableFilter;
