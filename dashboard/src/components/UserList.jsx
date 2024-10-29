import { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import UserModal from './UserModal';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-list">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="user-list">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} onViewDetails={handleViewDetails} />
        ))}
      </div>
      <UserModal user={selectedUser} onClose={handleCloseModal} />
    </div>
  );
};

export default UserList;

