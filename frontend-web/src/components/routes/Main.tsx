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

type Rates = {
  rates: { currency: string; rate: string }[];
};

const Main: React.FC = () => {
  const { loading, error, data } = useQuery<Rates>(EXCHANGE_RATES);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
    return <p>Error</p>;
  }

  return (
    <Page title>
      {data.rates.map(({ currency, rate }) => (
        <p key={currency}>
          {currency}: {rate}
        </p>
      ))}
    </Page>
  );
};

export default Main;
