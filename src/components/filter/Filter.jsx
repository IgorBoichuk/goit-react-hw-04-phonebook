import style from '../style.module.css';

export const Filter = ({ changeFilterInput }) => {
  const onChangeFilter = event => {
    changeFilterInput(event.target.value);
  };

  return (
    <div className={style.filterwrapper}>
      <label htmlFor="filter" className={style.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        className={style.forminput}
        onChange={onChangeFilter}
      />
    </div>
  );
};
