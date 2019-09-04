const axios = require('axios');

function generateRandomString(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

const client_id = '841f5755811c41e1ba05eb30e96e1e70'; // Your client id
const redirect_uri = 'http://localhost:3000/auth'; // Your redirect uri

const state = generateRandomString(16);

const scope = 'user-read-private user-read-email';

const stateKey = 'spotify_auth_state';
localStorage.setItem(stateKey, state);

let url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += `&client_id=${encodeURIComponent(client_id)}`;
url += `&scope=${encodeURIComponent(scope)}`;
url += `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
url += `&state=${encodeURIComponent(state)}`;


module.exports = {
  url,
  getCategories: async (accessToken) => {
    const { data } = await axios.get('https://api.spotify.com/v1/browse/categories?country=ES&locale=es_ES',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      return data.categories.items;
  },
  getPlaylist: async (accessToken, id) => {
    const { data } = await axios.get(`https://api.spotify.com/v1/browse/categories/${id}/playlists?country=ES&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      return data.playlists.items;
  }
};
