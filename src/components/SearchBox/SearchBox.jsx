import { useDispatch, useSelector } from "react-redux";

import { changeFilter, selectNameFilter } from "../../redux/filter/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    const action = changeFilter(evt.target.value);
    dispatch(action);
  };
  return (
    <div>
      <label htmlFor="find">Find contact by name</label>
      <input type="text" value={searchValue} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
