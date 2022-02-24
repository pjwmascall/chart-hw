const Song = ({title, artist, genre, image, position}) => {

    return (

        <div id="song">
            <p>{position}. {title} - {artist}</p>
            <p>{genre}</p>
            <img src={image} alt="" />
        </div>

    );

}

export default Song;