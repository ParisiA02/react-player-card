function Card(props){
    return(
        <div className="player-card">
            
            <div className="player-card-text name">
                {props.player.name}
            </div>

            <div className="player-card-image">
                <img src={`./${props.player.img}`} alt="player"/>
            </div>

            <div className="player-card-text rate">
                Gold Rare
            </div>

        </div>
    );
}
export default Card;