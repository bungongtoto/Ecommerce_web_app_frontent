import { useCallback } from "react";
import { createCheckoutSession } from "../../api/checkout";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { enqueueSnackbar } from "notistack";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_API_KEY}`);

function Checkout() {
  const fetchClientSecret = useCallback(async () => {
    try {
      const response = await createCheckoutSession();
      return response.clientSecret;
    } catch (error) {
      console.log(error);
      enqueueSnackbar(`An Error: ${error.error}`, { variant: "error" });
    }
  }, []);
  const options = { fetchClientSecret };
  return (
    <main id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </main>
  );
}

export default Checkout;
