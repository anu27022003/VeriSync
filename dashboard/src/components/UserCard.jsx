import PropTypes from 'prop-types';

const UserCard = ({ user, onViewDetails }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <button onClick={() => onViewDetails(user)}>View Details</button>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired, // Validate user prop as an object with a required name field
  onViewDetails: PropTypes.func.isRequired, // Validate onViewDetails as a required function
};

export default UserCard;
