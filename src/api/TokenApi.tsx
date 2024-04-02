import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface TokenData {
  price: number;
  allocation: number;
}

const TokenApi: React.FC = () => {
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await axios.get<TokenData>('https://api.goingecho.com/token-data', {
          headers: {
            'Authorization': 'Bearer BARK_API_KEY'
          }
        });

        setTokenData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch BARK token data. Please try again later.');
        setLoading(false);
      }
    };

    fetchTokenData();
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    setTokenData(null); // Clear previous data
    setError(null); // Clear previous error
    fetchTokenData();
  };

  return (
    <div>
      <h2>BARK Token Data</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {tokenData && (
        <div>
          <p>Price: ${tokenData.price.toFixed(2)}</p>
          <p>Allocation: {tokenData.allocation.toFixed(2)}%</p>
        </div>
      )}
      <button onClick={handleRefresh} disabled={loading}>
        {loading ? 'Refreshing...' : 'Refresh'}
      </button>
    </div>
  );
}

export default TokenApi;
