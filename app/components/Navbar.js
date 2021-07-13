import React, { useState, useContext, useEffect } from "react";
import NextLink from "next/link";
import {
  Bar,
  Button,
  ButtonBase,
  SidePanel,
  IconWallet,
  textStyle,
  IdentityBadge,
  useViewport,
} from "@aragon/ui";
import {
  Menu as IconMenu,
  Box as IconBox,
  LogOut as IconLogOut,
} from "react-feather";

import ConnectorsModal from "components/ConnectorsModal";
import useAuth from "hooks/useAuth";

export default function Navbar({ props }) {
  const [open, toggle] = useState(false);
  const [openConnectors, setOpenConnectors] = useState(false);
  const { below, above } = useViewport();
  const { logout, active, account } = useAuth();

  function handleToggle() {
    toggle(!open);
  }

  function handleConnectors() {
    setOpenConnectors(true);
  }
  function handleCloseConnectors() {
    setOpenConnectors(false);
  }

  useEffect(() => {
    if (active) {
      setOpenConnectors(false);
    }
  }, [active]);

  return (
    <>
      <ConnectorsModal
      style={{ zIndex: "9999" }}
        open={openConnectors}
        handleClose={handleCloseConnectors}
      />
      <Bar
        primary={
          <>
            <IconBox size={34} /> <div>Dapp</div>
          </>
        }
        secondary={
          <>
            {above("medium") && (
              <>
                <div
                  style={{
                    margin: "0 1em",
                  }}>
                  <NextLink href="/">
                    <ButtonBase>Home</ButtonBase>
                  </NextLink>
                </div>
                {active ? (
                  <>
                    <IdentityBadge entity={account} connectedAccount />
                    <ButtonBase style={{ margin: "0 1em" }} onClick={logout}>
                      <IconLogOut size={28} />
                    </ButtonBase>
                  </>
                ) : (
                  <Button
                    size={"small"}
                    icon={<IconWallet />}
                    label={"Connect Wallet"}
                    onClick={handleConnectors}
                  />
                )}
              </>
            )}
            {below("medium") && (
              <>
                <div
                  style={{
                    margin: "0 0.5em",
                    display: "flex",
                  }}
                  onClick={handleToggle}>
                  <ButtonBase>
                    <IconMenu size={26} />
                  </ButtonBase>
                </div>
              </>
            )}
          </>
        }
      />
      <SidePanel title="Menu" opened={open} onClose={handleToggle}>
        <div style={{ paddingTop: "1em", width: "100% !important" }}>
          <div style={{ marginBottom: "1em" }}>
            <div style={{ fontSize: 15, fontWeight: "bold" }}>Navigation</div>
            <div
              style={{
                margin: "0 1em",
              }}>
              <NextLink href="/">
                <ButtonBase>Home</ButtonBase>
              </NextLink>
            </div>
          </div>
          <div style={{ fontSize: 15, fontWeight: "bold" }}>Account</div>
          {active ? (
            <>
              <IdentityBadge entity={account} connectedAccount />
              <ButtonBase style={{ margin: "0 1em" }} onClick={logout}>
                <IconLogOut size={28} />
              </ButtonBase>
            </>
          ) : (
            <Button
              size={"small"}
              icon={<IconWallet />}
              label={"Connect Wallet"}
              onClick={handleConnectors}
              wide
            />
          )}
        </div>
      </SidePanel>
    </>
  );
}
