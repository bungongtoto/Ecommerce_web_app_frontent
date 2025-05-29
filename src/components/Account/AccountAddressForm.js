import { useState } from "react";
import { PulseLoader } from "react-spinners";
import AuthInfo from "../information/AuthInfo";

function AccountAddressForm({
  address,
  isAddressUpdating,
  errorUpdateAddress,
  handleSubmit,
}) {
  //Managing state for User address
  const [post_code, setPostCode] = useState(address?.post_code);
  const [city, setCity] = useState(address?.city);
  const [address_line, setAddressLine] = useState(address?.address_line);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (post_code && city && address_line) {
          handleSubmit({ post_code, city, address_line });
        }
      }}
    >
      <label htmlFor="post-code">Post Code: </label>
      <input
        type="text"
        id="post-code"
        value={post_code}
        required
        onChange={(e) => setPostCode(e.target.value)}
      />
      <label htmlFor="city">City: </label>
      <input
        type="text"
        id="city"
        value={city}
        required
        onChange={(e) => setCity(e.target.value)}
      />
      <label htmlFor="address-line">Address Line: </label>
      <input
        type="text"
        id="address-line"
        value={address_line}
        required
        onChange={(e) => setAddressLine(e.target.value)}
      />
      {errorUpdateAddress && (
        <AuthInfo isError={true} messages={errorUpdateAddress} />
      )}
      {isAddressUpdating ? (
        <PulseLoader className="loader" color="#F34325" />
      ) : (
        <button type="submit" className="wish-list-btn">
          Update
        </button>
      )}
    </form>
  );
}

export default AccountAddressForm;
