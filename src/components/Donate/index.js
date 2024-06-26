import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Donate = () => {
  return (
    <PayPalScriptProvider options={{ clientId: "test" }}>
      <PayPalButtons style={{ layout: "horizontal" }} />
    </PayPalScriptProvider>
  );
};

export default Donate;
