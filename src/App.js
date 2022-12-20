import logo from './logo.svg';
import './App.css';
import Address from './profil/Address';
import FullName from './profil/FullName';
import ProfilePhoto from './profil/ProfilePhoto';
function App() {
  return (
    <div className="App-header">
      <ProfilePhoto />

      <FullName />
      <Address />

    </div>
  );
}

export default App;
