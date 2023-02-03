
import './App.css';

function App() {
   const headTitle = "Homepage";
  
  return (
    <div className="App">

       
      <h1 className="profile">{headTitle}</h1>  
      {/* <Job salary={90000} position="Senior SDE" company="Amazon" /> */}
      {/* <Cond /> */}
      {/* <Arr /> */}
      {/* <ShowList /> */}
      <GasPlanets />
    </div>
  );
}



//  const Job =(props)=>{
//   return (
//   <div>
//  <p style={{color:"green", border:"1px solid grey"}}>{props.salary}</p>
//  <p>{props.position}</p>
//  <p>{props.company}</p>
 
//  </div>);

//  };





//  const Cond = ()=>{

//   const isAdult = true;

//   return <p>{isAdult?"yes, he is an adult" : "Nope, he is not an adult"}</p>

//  };





// const names = ["Aaran", "Aaren", "Aiden" ];

// const ShowList = () =>{

// return (
//   names.map((name)=>{
//     return <p>{name}</p>
//   })
// );


// }




const planets = [
  { name: "Mars", isGasPlanet: false },
  { name: "Earth", isGasPlanet: false },
  { name: "Jupiter", isGasPlanet: true },
  { name: "Venus", isGasPlanet: false },
  { name: "Neptune", isGasPlanet: true },
  { name: "Uranus", isGasPlanet: true },
];


const GasPlanets = ()=>{

  return (<div>{
    planets.map(
      (planet)=>{
        return <p>{planet.isGasPlanet && planet.name}</p>
        
      }
    )
    }</div>);

}

 





export default App;
