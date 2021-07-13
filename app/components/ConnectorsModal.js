import React from "react";
import { Modal, Button, useViewport } from "@aragon/ui";

import useAuth from "hooks/useAuth";

export default function ConnectorsModal(props) {
  const { width, below, above } = useViewport();
  const { login } = useAuth();

  function handleViewport() {
    return below("medium")
      ? Math.min(width - 48, 600)
      : Math.min(width - 48, 400);
  }

  function handleLogin(connectorName) {
    login(connectorName);
  }

  return (
    <Modal
      width={handleViewport}
      visible={props.open}
      onClose={props.handleClose}>
      <div
        style={{
          fontWeight: "bold",
        }}>
        Connect to a wallet
      </div>
      {/* This is a vertical line */}
      <div
        style={{
          margin: "1em 0",
          borderTop: "1px solid lightgrey",
        }}></div>
      <div>
        <Button
          style={{
            marginBottom: "1em",
          }}
          children={
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <p>Metamask</p>
              <img src="/connectors-img/metamask.svg" />
            </div>
          }
          onClick={() => handleLogin("Injected")}
          wide
        />
        <Button
          style={{
            marginBottom: "1em",
          }}
          children={
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <p>WalletConnect</p>
              <img src="/connectors-img/walletconnect.svg" />
            </div>
          }
          onClick={() => handleLogin("WalletConnect")}
          wide
        />
        <Button
          style={{
            marginBottom: "1em",
          }}
          children={
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <p>TrustWallet</p>
              <img src="/connectors-img/trustwallet.svg" />
            </div>
          }
          wide
        />
        <Button
          style={{
            marginBottom: "1em",
          }}
          children={
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <p>Authereum</p>
              <img src="/connectors-img/authereum.png" />
            </div>
          }
          onClick={() => handleLogin("Authereum")}
          wide
        />
      </div>
    </Modal>
  );
}
