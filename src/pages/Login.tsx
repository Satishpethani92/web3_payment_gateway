import { Web3Button } from "@web3modal/react";

const Login = () => {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <Web3Button icon="show" label="Connect Wallet" balance="show" />
    </div>
  );
};

export default Login;
