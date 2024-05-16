import "./SelectMenu.css"
const SelectMenu = ({ onChangeFlavour, flavourValue, onChangeVolume, volumeValue }) => (
  <div className="select-menu-container">
    <select onChange={onChangeFlavour} value={flavourValue}>
      <option value="All">All</option>
      <option value="Vanila">Vanila</option>
      <option value="Stawberry">Stawberry</option>
      <option value="Chocolate">Chocolate</option>
    </select>
    <select onChange={onChangeVolume} value={volumeValue}>
      <option value="All">All</option>
      <option value="100 ml">100 ml</option>
      <option value="500 ml">500 ml</option>
      <option value="1 l">1 l</option>
    </select>
  </div>
);

export default SelectMenu;
