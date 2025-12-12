let provider, signer;

document.getElementById("connectBtn").onclick = async () => {
  if (!window.ethereum) return alert("MetaMask is required!");

  await ethereum.request({ method: "eth_requestAccounts" });

  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();

  const account = await signer.getAddress();
  document.getElementById("account").innerText = account;
};
