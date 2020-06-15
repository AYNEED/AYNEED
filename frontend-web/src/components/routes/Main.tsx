import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Page } from 'src/components/wrappers/Page';

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const Main: React.FC = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <Page title>
      {data.rates.map(({ currency, rate }: any) => (
        <p key={currency}>
          {currency}: {rate}
        </p>
      ))}
    </Page>
  );
};

export default Main;
