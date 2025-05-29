import { useState } from "react";
import { PulseLoader } from "react-spinners";
import AuthInfo from "../information/AuthInfo";

const UK_PHONE_REGEX = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;

function AccountUserForm({
  user,
  isUserUpdating,
  errorUpdateUser,
  handleSubmit,
}) {
  //managing Account Details from state
  const [first_name, setFirstName] = useState(user?.first_name);
  const [last_name, setLastName] = useState(user?.last_name);
  const [telephone, setTelephone] = useState(user?.telephone);
  const [isValid, setIsValid] = useState(true);

  const handleTelChange = (e) => {
    const value = e.target.value;
    setTelephone(value);
    setIsValid(UK_PHONE_REGEX.test(value));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (isValid && first_name && last_name && telephone) {
          handleSubmit({ first_name, last_name, telephone });
        }
      }}
    >
      <label htmlFor="email">Email: </label>
      <input id="email" type="email" value={user.email} disabled />
      <label htmlFor="first-name">First Name: </label>
      <input
        type="text"
        id="first-name"
        value={first_name}
        required
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="last-name">First Name: </label>
      <input
        type="text"
        id="last-name"
        value={last_name}
        required
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="telephone">Telephone: </label>
      <input
        type="tel"
        id="telephone"
        value={telephone}
        required
        onChange={handleTelChange}
      />
      {!isValid && (
        <AuthInfo isError={true} messages="Please Enter a Valid UK number" />
      )}
      {errorUpdateUser && (
        <AuthInfo isError={true} messages={errorUpdateUser} />
      )}
      {isUserUpdating ? (
        <PulseLoader className="loader" color="#F34325" />
      ) : (
        <button type="submit" className="wish-list-btn" disabled={!isValid}>
          Update
        </button>
      )}
    </form>
  );
}

export default AccountUserForm;
