import Column from "./Column"
const PlayerStats = (props) => {
    return (  
        <div className="player-stats">
            <div className="player-stats-title">
                ATTRIBUTE DETAILS
            </div>
            <div className="player-stats-detailed">
                
                {props.abilities.map((ability)=>( 
                    <div key={ability.title} className="player-stats-column">
                        <Column ability = {ability}/>
                    </div>
                ))}  
            </div>

        </div>
    );
}
 
export default PlayerStats;