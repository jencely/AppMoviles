
import './App.css';
import React from 'react';
import { useState } from 'react';
import axios from "axios"


// lista de perfiles de github
const testData=[{name: "Steven Chinchin", avatar_url: "https://avatars.githubusercontent.com/u/52291881?v=4", company: "@facebook"},
{name: "Kevin Guchamira", avatar_url: "https://avatars.githubusercontent.com/u/33032880?v=4", company: "@facebook"},
{name: "Fernando", avatar_url: "https://avatars.githubusercontent.com/u/47802477?v=4", company: "@facebook"},
{name: "Mauricio Matango", avatar_url: "https://avatars.githubusercontent.com/u/61792044?v=4", company: "@facebook"},
{name: "Henry", avatar_url: "https://avatars.githubusercontent.com/u/67518799?v=4", company: "@facebook"}];

//DDRC-comment componente formulario

function Formulario (props){
  //establece una propiedad(userName),un setter(setName) y un getter generico(useState)
  const [userName, setName] = useState('');
//establece un metodo que maneja el comportamiento del boton Añadir tarjetas
  const handleSubmit= (async (event)=>{
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${userName}`);
    props.onSubmit(resp.data);
    setName('');
  });
  //devuelve un elemento(formulario)jsx 
    return(
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={userName}
        onChange={event=>setName(event.target.value)}
        placeholder="Usuario de gihub"
        required
        /> 
        <button>Añadir tarjeta</button>
      </form>
    );
}
//DDRC-comment  obtine y enumera la lista de cartas
function CardList(props){
  return(<div className='listaCartas'>
    {props.profiles.map(profile=><Card {...profile}/>)}
  </div>);
}

// DDRC-comment carta de información de un perfil de github
function Card(props) {
  	const profile = props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} width='100vw' height='100vw'/>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
}

//DDRC-comment componente que recopila tanto el formulario como la lista de tarjetas para que sean renderizadas
function App (props) {
 const [profiles,setProfile]=useState(testData);
 
  const addNewProfile = (profileData) => {
  	setProfile([...profiles, profileData],);
  };

  	return (
    	<div>
    	  <div className="header">{props.title}</div>
        <Formulario onSubmit={addNewProfile} />
        <CardList profiles={profiles} />
    	</div>
    );
  
}
// exporta app para ser usado donde sea
export default App;

