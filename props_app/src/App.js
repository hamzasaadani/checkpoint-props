import './App.css';
import Profil from './Profile/Profile';
import imgagehamza from './Profile/hamza.jpg';

function App() {
  const handelfullname=(name)=>alert(name);
  const name="HAMZA SAADANI";
  const bios="test";
  const work="developpeur";
  return (
<div >
  <Profil 
  fullname={name}
   bio ={bios} 
  profession={work}
  handelfullname={handelfullname}
  >

{imgagehamza}
  </Profil>
   </div>
  );
  
}
export default App;
