import WalletConnect from '@walletconnect/client';
import { useCallback, useEffect, useState } from 'react';

interface WalletConnectService {
  connect: () => void;
  disconnect: () => void;
  sendTransaction: (transaction: any) => void;
  isConnected: boolean;
  errorMessage: string | null;
  accounts: string[] | null;
}

const WalletConnectService = (): WalletConnectService => {
  const [walletConnect, setWalletConnect] = useState<WalletConnect | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [accounts, setAccounts] = useState<string[] | null>(null);

  useEffect(() => {
    const initializeWalletConnect = async () => {
      try {
        const connector = new WalletConnect({
          bridge: 'https://bridge.walletconnect.org',
        });

        connector.on('connect', (error, payload) => {
          if (error) {
            setErrorMessage(error.message);
            return;
          }
          setIsConnected(true);
          setAccounts(payload.params[0].accounts);
        });

        connector.on('disconnect', () => {
          setIsConnected(false);
          setAccounts(null);
          setErrorMessage('Connection lost. Please reconnect.');
        });

        setWalletConnect(connector);
      } catch (error) {
        console.error('Error initializing WalletConnect:', error);
        setErrorMessage('Failed to initialize WalletConnect. Please try again.');
      }
    };

    initializeWalletConnect();

    return () => {
      if (walletConnect) {
        walletConnect.killSession();
      }
    };
  }, []);

  const handleConnect = useCallback(() => {
    setErrorMessage(null);
    if (walletConnect) {
      walletConnect.createSession();
    }
  }, [walletConnect]);

  const handleDisconnect = useCallback(() => {
    if (walletConnect) {
      walletConnect.killSession();
      setWalletConnect(null);
      setIsConnected(false);
      setAccounts(null);
    }
  }, [walletConnect]);

  const sendTransaction = useCallback((transaction: any) => {
    if (!walletConnect) {
      setErrorMessage('WalletConnect is not initialized.');
      return;
    }

    walletConnect.sendTransaction(transaction);
  }, [walletConnect]);

  return {
    connect: handleConnect,
    disconnect: handleDisconnect,
    sendTransaction,
    isConnected,
    errorMessage,
    accounts,
  };
};

export default WalletConnectService;
