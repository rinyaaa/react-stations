export const BreedsSelect = props => {
  const { breeds, selectedBreed, onBreedChange, onDisplayClick } = props

  return (
    <div className="labels">
      <label className="breed-list" htmlFor="breed-select">
        Breeds List
      </label>
      <select
        id="breed-select"
        value={selectedBreed}
        onChange={e => onBreedChange(e.target.value)} // 選択変更時にonBreedChangeを呼び出す
      >
        <option value="Select">Select</option>
        {breeds.map(breed => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>

      <button onClick={onDisplayClick} className="show">
        表示
      </button>
    </div>
  )
}

export default BreedsSelect
