import './App.css';
import UserCard from './components/UserCard';

const utilisateur = {
  nom: "Doe",
  prenom: "John",
  email: "john.doe@example.com",
  ImageUrl: "https://icones.pro/wp-content/uploads/2021/03/avatar-de-personne-icone-homme.png",
 };
 
function App() {
  return (
    <div className="container">
      <UserCard nom={utilisateur.nom} prenom={utilisateur.prenom} email={utilisateur.prenom} image={utilisateur.ImageUrl}/>
    </div>
  );
}

export default App;
