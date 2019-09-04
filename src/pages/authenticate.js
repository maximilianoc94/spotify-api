import React, { useEffect } from 'react';
import QueryString from 'query-string';
import { navigate } from '@reach/router';


function Categories() {
  useEffect(() => {
    if (window.location.href.includes('#access_token=')) {
      const accessToken = QueryString.parse(window.location.hash).access_token;
      navigate('/categories', { state: { accessToken } });
    } else {
      navigate('/');
    }
  }, []);

    return (
      <main>Loading...</main>
    );
}

export default Categories;
