import React, { useState } from 'react';
import { Redirect } from '@reach/router';
import CategoryList from '../components/category-list';
import PlaylistTable from '../components/playlist-table';


function Categories({ location }) {
  const accessToken = location && location.state && location.state.accessToken;
  const [categoryId, setCategoryId] = useState();


  if (!accessToken) {
    return <Redirect noThrow to="/" />;
  }

    return (
      <main>
        <CategoryList accessToken={accessToken} setCategoryId={setCategoryId} />
        <PlaylistTable accessToken={accessToken} categoryId={categoryId} />
      </main>
  );
}

export default Categories;
