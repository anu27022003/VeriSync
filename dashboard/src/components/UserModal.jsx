import PropTypes from 'prop-types';

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  // Close modal on outside click
  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal') {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{user.name}</h2>
        <p><strong>Username:</strong> @{user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      </div>
    </div>
  );
};

UserModal.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }).isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,  // Add PropTypes validation for onClose
};

export default UserModal;
