import Card from '../src/Card'
import PlayerStats from '../src/PlayerStats'

const PLAYER = { 
  name:"Messi",
  img:"messi.webp",
  rarity:"Gold Rare",
}
const ABILITIES = [
  {
    title:"PACE",
    overall:"85",
    stats:[
      {
        name:"Acceleration",
        value:"91"
      },
      {
        name:"Sprint Speed",
        value:"80"
      }
    ]
  },
  {
    title:"SHOOTING",
    overall:"92",
    stats:[
      {
        name:"Att.Position",
        value:"93"
      },
      {
        name:"Finishing",
        value:"95"
      },
      {
        name:"Shot Power",
        value:"86"
      },
      {
        name:"Long Shot",
        value:"94"
      },
      {
        name:"Volleys",
        value:"88"
      },
      {
        name:"Penalties",
        value:"75"
      }
    ]
  },
  {
    title:"PASSING",
    overall:"91",
    stats:[
      {
        name:"Vision",
        value:"95"
      },
      {
        name:"Crossing",
        value:"85"
      },
      {
        name:"FK. Acc",
        value:"94"
      },
      {
        name:"Short Pass",
        value:"91"
      },
      {
        name:"Long pass",
        value:"91"
      },
      {
        name:"Curve",
        value:"93"
      }
    ]
  },
  {
    title:"DRIBLING",
    overall:"95",
    stats:[
      {
        name:"Agility",
        value:"91"
      },
      {
        name:"Balance",
        value:"95"
      },
      {
        name:"Crossing",
        value:"95"
      },
      {
        name:"Reactions",
        value:"94"
      },
      {
        name:"Ball Controll",
        value:"96"
      },
      {
        name:"Composure",
        value:"96"
      }
    ]
  },
  {
    title:"DEFENDING",
    overall:"38",
    stats:[
      {
        name:"Interceptions",
        value:"40"
      },
      {
        name:"Heading Acc.",
        value:"70"
      },
      {
        name:"Def. Aware",
        value:"32"
      },
      {
        name:"Stand Tackle",
        value:"35"
      },
      {
        name:"Slide Tackle",
        value:"35"
      }
    ]
  },
  {
    title:"PHYSICAL",
    overall:"65",
    stats:[
      {
        name:"Jumping",
        value:"68"
      },
      {
        name:"Stamina.",
        value:"72"
      },
      {
        name:"Strenght",
        value:"69"
      },
      {
        name:"Aggression",
        value:"44"
      },
    ]
  }
]

function App() {
  return (
    <div className="App">
      <div className="container">
          <Card player = {PLAYER} />
          <PlayerStats abilities={ABILITIES}/>
      </div>
    </div>
  );
}

export default App;
