import * as React from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';

function MainPage() {

  const drawerWidth = 140;
  const drawerWidthMobile = 300;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} drawerWidthMobile={drawerWidthMobile}/>
      <Content drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}/>
    </Box>
  );
}

export default MainPage;
