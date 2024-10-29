import UserList from './components/UserList';
import './index.css'; // Make sure to import your CSS

const App = () => {
  return (
    <div className="container">
      <h1>User Dashboard</h1>
      <UserList /> {/* Render UserList once */}
    </div>
  );
};

export default App;
