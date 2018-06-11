import React from 'react';
import './ErrorDetails.scss';

export default function ErrorDetails ({ error }) {
  return <div class="Error">
    {JSON.stringify(error)}
  </div>;
}
