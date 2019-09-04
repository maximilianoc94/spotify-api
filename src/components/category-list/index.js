import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Spotify from '../../api/spotify';
import Section from '../shared/section';

function CategoryList({ accessToken, setCategoryId }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Spotify.getCategories(accessToken).then(response => {
      setCategories(response);
    });
  }, [accessToken]);

  return (
    <Section>
      <List component="nav" aria-label="primary category">
        {categories.map(category => (
          <div key={category.id}>
            <ListItem button onClick={() => { setCategoryId(category.id); }}>
              <ListItemText primary={category.name} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Section>
      );
}

export default CategoryList;
