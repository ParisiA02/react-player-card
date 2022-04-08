const Column = (props) => {
    return (  
        <div className="column">
            <div className="text">  
                {props.ability.title}     
            </div>
            <div className="half-circle">
                
            </div>
            <div className="number" style={{color:`${props.ability.overall <= 50 ? "red" : props.ability.overall<=70 ? "yellow" : "green"}`}}>
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
                            <div className="stats-bar" style={{background:`${(stat.value <= 50 && `linear-gradient(90deg, red ${stat.value}%, grey ${stat.value}%)` ) || 
                                                                             ((stat.value > 50 && stat.value < 70)  && `linear-gradient(90deg, yellow ${stat.value}%, grey ${stat.value}%)`) || 
                                                                             (stat.value > 70 && `linear-gradient(90deg, #1CAA16 ${stat.value}%, grey ${stat.value}%)`)}`}}>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
 
export default Column;