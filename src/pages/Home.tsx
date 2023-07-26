import { useState } from "react";
import "../scss/Pages/Home.scss";
import { Form } from "react-bootstrap";
import QRCode from "react-qr-code";
import * as chains from "wagmi/chains";

const Home = () => {
  // console.log(address, isConnected, isDisconnected);
  const [QRString, setQRString] = useState("");
  const [accountAdd, setAccountAdd] = useState("");
  const [chainId, setChainId] = useState("1");
  const [amount, setAmount] = useState("");
  const [currentChain, setCurrentChain] = useState<chains.Chain>(chains.mainnet);

  const allChains = Object.values(chains);

  const generateQRCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalAmount = Number(amount) * Number(10) ** Number(currentChain.nativeCurrency.decimals) + "";
    console.log(finalAmount, amount, currentChain.nativeCurrency.decimals);
    const finalString = `ethereum:${accountAdd}@${chainId}?value=${finalAmount}`;
    setQRString(finalString);
  };

  return (
    <div className="d-flex align-items-center flex-column justify-content-center h-100">
      <div className="p-4 rounded-3 bg-secondary bg-opacity-50 mb-4" style={{ width: "30rem" }}>
        <Form onSubmit={(e) => generateQRCode(e)}>
          <Form.Group controlId="account-address" className="mb-2">
            <Form.Label>Account Address:</Form.Label>
            <Form.Control name="address" type="text" value={accountAdd} onChange={(e) => setAccountAdd(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="chainId" className="mb-2">
            <Form.Label>Chain Id:</Form.Label>
            <Form.Select
              name="chainId"
              value={chainId}
              onChange={(e) => {
                setChainId(e.target.value);
                setCurrentChain(allChains.find((ele) => ele.id === Number(e.target.value)) || chains.mainnet);
              }}
            >
              {allChains.map((e, index) => (
                <option key={`${e.id}-${index}`} value={e.id}>
                  {e.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="amount" className="mb-2">
            <Form.Label>Amount in ${currentChain.nativeCurrency.symbol}:</Form.Label>
            <Form.Control name="amount" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </Form.Group>
          <button className="btn btn-primary mt-3 text-center">Generate QRCode</button>
        </Form>
      </div>
      {QRString && <QRCode value={QRString} />}
    </div>
  );
};

export default Home;
