import {useState, useEffect} from 'react';
import SongList from '../components/SongList';
import NumberDropDown from '../components/NumberDropDown';
import GenreDropDown from '../components/GenreDropDown';

const SongContainer = () => {

    const [listOfSongs, setListOfSongs] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState("5");
    const [selectedGenre, setSelectedGenre] = useState("all")

    useEffect(() => {
        const genreId = getGenreId(selectedGenre);
        getSongs(selectedNumber, genreId);
    }, [selectedNumber, selectedGenre]);

    const getGenreId = (genreName) => {
        if (genreName === "all") {
            return '';
        }
        if (genreName === "rock") {
            return 'genre=21/';
        }
        if (genreName === "dance") {
            return 'genre=17/';
        }
        if (genreName === "country") {
            return 'genre=6/';
        }
    }

    const getSongs = (number, genreId) => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=${number}/${genreId}json`)
        .then(response => response.json())
        .then((data) => setListOfSongs(data['feed']['entry']));
    }

    const handleSelectNumber = (event) => {
        setSelectedNumber(event.target.value);
    }

    const handleSelectGenre = (event) => {
        setSelectedGenre(event.target.value);
    }

    return (

        <>
            <NumberDropDown handleSelectNumber={handleSelectNumber}/>
            <GenreDropDown handleSelectGenre={handleSelectGenre} />
            <SongList listOfSongs={listOfSongs} />
        </>

    );

}

export default SongContainer;