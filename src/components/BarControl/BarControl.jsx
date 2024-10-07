import css from './BarControl.module.css'

const BarControl = ({ onAddBeer, onAddWine, onAddWhiskey }) => {
  return (
    <div className={css.barStyle}>
      <button onClick={onAddBeer} className={css.btnStyle}>Add beer </button>
      <button onClick={onAddWine} className={css.btnStyle}>Add wine</button>
      <button onClick={onAddWhiskey} className={css.btnStyle}>Add whiskey</button>
    </div>
  );
}

export default BarControl;