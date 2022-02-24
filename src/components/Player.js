const Player = ({preview}) => {

    return (
        
        <div id="player">
            <audio controls>
                <source src={preview} />
                Your browser does not support the audio element.
            </audio>
        </div>
    );

}

export default Player;