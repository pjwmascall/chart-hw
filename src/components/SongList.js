import Song from './Song';
import Player from './Player'

const SongList = ({listOfSongs}) => {

    const songNodes = listOfSongs.map((song, idx) => {

        return (

            <li key={song['id']['attributes']['im:id']}>
                <Song
                    // key={song['id']['attributes']['im:id']}
                    title={song['im:name']['label']}
                    artist={song['im:artist']['label']}
                    genre={song['category']['attributes']['term']}
                    image={song['im:image'][2]['label']}
                    position={idx+1}
                />

                <Player  
                    // key={song['id']['attributes']['im:id']}
                    preview={song['link'][1]['attributes']['href']}                
                />
            </li>

        );

    });

    return (

        <ul id="song-list">
            {songNodes}
        </ul>

    );

}

export default SongList;