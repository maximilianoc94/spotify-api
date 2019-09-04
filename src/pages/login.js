import React from 'react';
import Button from '@material-ui/core/Button';
import Spotify from '../api/spotify';

function Login() {
return (
  <main>
    <Button onClick={() => { window.location.href = Spotify.url; }} variant="contained" color="primary" style={{ margin: '20px auto' }}>
      Inicia sesion con spotify
    </Button>
  </main>
);
}

export default Login;
