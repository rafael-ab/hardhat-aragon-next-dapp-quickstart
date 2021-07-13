import { useCallback } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";

import useToast from "hooks/useToast";

import { connectorsByName } from "utils/connectors";

export default function useAuth() {
  const { activate, deactivate, active, account } = useWeb3React();
  const { toastError } = useToast();

  const login = useCallback(
    (connectorName) => {
      const connector = connectorsByName[connectorName];
      if (connector) {
        activate(connector, async (_error) => {
          if (_error instanceof UnsupportedChainIdError) {
            toastError("Invalid Network", "This network is unavailable");
          } else {
            if (_error instanceof NoEthereumProviderError) {
              toastError("Provider Error", "No provider was found");
            } else if (_error instanceof UserRejectedRequestErrorInjected) {
              toastError(
                "Authorization Error",
                "Please authorize to access your account"
              );
            } else {
              toastError(_error.name, _error.message);
            }
          }
        });
      } else {
        toastError("Unable to find connector", "The connector config is wrong");
      }
    },
    [activate, toastError]
  );

  const logout = useCallback(() => {
    deactivate();
  }, [deactivate]);

  return { login, logout, active, account };
}
