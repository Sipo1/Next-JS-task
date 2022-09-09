const ContactInfo = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    return <h1>Contact is empty</h1>;
  }

  return (
    <div>
      <h1>{name}</h1>

      <div>
        <strong>Email </strong>
        {email}
      </div>
      <div>
        <strong>Address </strong>
        {`${street} , ${suite} , ${city}, ${zipcode}`}
      </div>
    </div>
  );
};

export default ContactInfo;
