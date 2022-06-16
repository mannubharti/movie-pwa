import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';



const SimpleBottomNavigation = () =>{
    const [value, setValue] = React.useState(0);


  return (
    <Box>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className="bottomNavigation"     
      >
        <BottomNavigationAction component={Link} to="/" label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction component={Link} to="/movies" label="Movies" icon={<MovieCreationIcon />} />
        <BottomNavigationAction component={Link} to="/series" label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction component={Link} to="/search" label="Search" icon={<SearchIcon />} />
      </BottomNavigation>     
      
      </Box>
  );
}
export default SimpleBottomNavigation