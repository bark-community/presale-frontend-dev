import React, { useState, useEffect } from 'react';

const Tokenomics: React.FC = () => {
  const [tokenomicsData, setTokenomicsData] = useState<any | null>(null);

  useEffect(() => {
    // Simulate fetching tokenomics data from API
    setTimeout(() => {
      setTokenomicsData({
        chart: 'token-distribution-chart.png',
        description: 'Learn about the tokenomics of BARK including distribution, supply, and allocation.'
      });
    }, 1000);
  }, []);

  return (
    <div className="tokenomics" id="tokenomics">
      <h2 className="tokenomics__heading">Tokenomics</h2>
      {tokenomicsData && (
        <>
          <img src={tokenomicsData.chart} alt="Token Distribution Chart" className="tokenomics__chart" />
          <p className="tokenomics__description">{tokenomicsData.description}</p>
        </>
      )}
    </div>
  );
}

export default Tokenomics;
