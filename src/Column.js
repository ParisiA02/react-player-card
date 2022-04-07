const Column = (props) => {
    return (  
        <div className="column">
            <div className="text">  
                {props.ability.title}     
            </div>
            <div className="half-circle">
                
            </div>
            <div className="number">
                {props.ability.overall}
            </div>
            <div className="stats">
                    {props.ability.stats.map((stat) => (
                        <div>
                            <div className="stats-text">
                                {stat.name}
                            </div>
                            <div className="stats-number">
                                {stat.value}
                            </div>
                            <div className="stats-bar stats-bar-91">
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
 
export default Column;