const NumberDropDown = ({handleSelectNumber}) => {

    return (

        <div id="number-dropdown">
            <label htmlFor="number">Display: </label>
            <select name="number" id="number" defaultValue="5" onChange={handleSelectNumber}>
                <option value="5">Top 5</option>
                <option value="10">Top 10</option>
                <option value="20">Top 20</option>
            </select>
        </div>

    );
    
}

export default NumberDropDown;