import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Title = (props) => {
  return (
    <Helmet>
      <title>Justify Print | {props.title}</title>
    </Helmet>
  );
};
