const GenreDropDown = ({handleSelectGenre}) => {

    return (

        <div id="genre-dropdown">
            <label htmlFor="genre">By Genre: </label>
            <select name="genre" id="genre" defaultValue="all" onChange={handleSelectGenre}>
                <option value="all">All</option>
                <option value="rock">Rock</option>
                <option value="dance">Dance</option>
                <option value="country">Country</option>
            </select>
        </div>

    );

}

export default GenreDropDown;