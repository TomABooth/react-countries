import React from 'react';
import './main.css';
import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../../card/countrycard.js';

export default function Main() {
  const { countries } = useCountries();
  return (
    <main>
      {countries.map((country) => {
        return <CountryCard key={country.id} {...country} />;
      })}
    </main>
  );
}
