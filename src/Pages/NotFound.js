import React from 'react';
import ErrorDetails from '../Components/ErrorDetails';

export default function NotFound () {
  return <ErrorDetails error={{status: 404}}></ErrorDetails>
}
