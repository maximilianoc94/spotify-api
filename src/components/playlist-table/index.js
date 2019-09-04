import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Section from '../shared/section';
import Spotify from '../../api/spotify';

function PlaylistTable({ accessToken, categoryId }) {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    if (categoryId) {
      Spotify.getPlaylist(accessToken, categoryId).then(response => {
      setPlaylists(response);
    });
    }
  }, [categoryId, accessToken]);

  return (
    <Section>
      {playlists.length > 0 && (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Dirección</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playlists.map(playlist => (
              <TableRow key={playlist.name}>
                <TableCell component="th" scope="row">
                  {playlist.name}
                </TableCell>
                <TableCell align="right">
                  <a target="_blank" rel="noopener noreferrer" href={playlist.external_urls.spotify}>{playlist.external_urls.spotify}</a>
                </TableCell>
              </TableRow>
          ))}
          </TableBody>
        </Table>
      </Paper>
)}
    </Section>
   );
}

export default PlaylistTable;
