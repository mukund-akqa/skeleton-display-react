import Avatar from "react-avatar";

const Card = ({ name, email, street, city }) => {
  return (
    <div className="card">
      <Avatar name={name} className="avatar" />
      <h1>{name}</h1>
      <h3>{email}</h3>
      <p>
        {street},{city}
      </p>
    </div>
  );
};

export default Card;
