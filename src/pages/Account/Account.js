import { useEffect } from "react";
import "./Account.css";
import { useNavigate } from "react-router";
import { PulseLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import AuthInfo from "../../components/information/AuthInfo";
import { logoutUser } from "../../store/auth/Auth.actions";
import {
  fetchUserDetails,
  updateUserAddress,
  UpdateUserDetails,
} from "../../store/user/User.actions";
import GeneralInfo from "../../components/information/GeneralInfo";
import AccountUserForm from "../../components/Account/AccountUserForm";
import AccountAddressForm from "../../components/Account/AccountAddressForm";
import { enqueueSnackbar } from "notistack";

function Account() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //select user state
  const {
    user,
    address,
    isFetching: isFetchingUser,
    error: errorUser,
    isUserUpdating,
    isAddressUpdating,
    errorUpdateUser,
    errorUpdateAddress,
  } = useSelector((state) => state.user);

  //select auth state
  const { isFetching, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user === null && isAuthenticated) {
      dispatch(fetchUserDetails());
    }
  }, [dispatch, user, isAuthenticated]);

  const handleUpdateUser = (details) => {
    try {
      if (details) {
        dispatch(UpdateUserDetails(details));
        enqueueSnackbar("Updated", { variant: "success" });
      }
    } catch (error) {
      enqueueSnackbar(error, { variant: "error" });
    }
  };

  const handleUpdateAddress = (details) => {
    try {
      if (details) {
        dispatch(updateUserAddress(details));
        enqueueSnackbar("Updated Address.", { variant: "success" });
      }
    } catch (error) {
      enqueueSnackbar(error, { variant: "error" });
    }
  };

  //actions that triggers logout
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/auth");
  };

  if (errorUser) {
    return (
      <main id="account">
        <GeneralInfo
          isError={true}
          messages={errorUser}
          btnText="Retry"
          handleAction={() => dispatch(fetchUserDetails())}
        />
      </main>
    );
  }

  return (
    <main id="account">
      <h1>Account Details</h1>
      {isFetchingUser ? (
        <PulseLoader className="loader" color="#F34325" />
      ) : (
        user && (
          <AccountUserForm
            user={user}
            isUserUpdating={isUserUpdating}
            errorUpdateUser={errorUpdateUser}
            handleSubmit={handleUpdateUser}
          />
        )
      )}
      <h1>Address Details</h1>
      {isFetchingUser ? (
        <PulseLoader className="loader" color="#F34325" />
      ) : (
        user && (
          <AccountAddressForm
            address={address}
            isAddressUpdating={isAddressUpdating}
            errorUpdateAddress={errorUpdateAddress}
            handleSubmit={handleUpdateAddress}
          />
        )
      )}
      <h1>Account Actions</h1>
      <div id="account-actions">
        {isFetching ? (
          <PulseLoader className="loader" color="#F34325" />
        ) : (
          <button onClick={handleLogout} className="wish-list-btn">
            Logout
          </button>
        )}
        {error && <AuthInfo isError={true} messages={error} />}
      </div>
    </main>
  );
}

export default Account;
