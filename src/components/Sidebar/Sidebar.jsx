import React from 'react'
import Box from '@mui/material/Box';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import './Sidebar.css';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({ drawerWidth, handleDrawerToggle, mobileOpen, drawerWidthMobile }) => {

  // Sidebar structure on desktop
  const drawer = (
    <div>
      <List>
        {
          ['Dashboard', 'Assessment', 'My Library'].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton className={index === 1 ? 'sidebar sidebar_select' : 'sidebar'}>
                <ListItemIcon className='sidebar_icon'>
                  {index === 0 ? <DashboardOutlinedIcon /> : index === 1 ? <AssessmentOutlinedIcon style={{color: '#6073E6'}}/> : <LibraryBooksOutlinedIcon />}
                </ListItemIcon>
                <span className='sidebar_text'>
                  {text}
                </span>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
      <hr className="sidebar_divider" />
      <div className="sidebar_tag">Admin</div>
      <List>
        {
          ['Round Status'].map((text, index) => (
            <ListItem key={index}>
              <ListItemButton className='sidebar'>
                <ListItemIcon className='sidebar_icon'>
                  <PendingActionsOutlinedIcon />
                </ListItemIcon>
                <span className='sidebar_text'>
                  {text}
                </span>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </div>
  );

  // Sidebar structure on phone and tab
  const drawerMobile = (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8% 6% 4% 8%' }}>
        <div style={{ fontFamily: 'Inter', fontWeight: '600' }}>Menu</div>
        <CloseIcon onClick={handleDrawerToggle} className='mobile_sidebar_close'/>
      </div>
      <List>
        {
          ['Dashboard', 'Assessment', 'My Library'].map((text, index) => (
            <ListItem key={index}>
              <ListItemButton className={index === 1 ? 'sidebarMobile sidebar_select' : 'sidebarMobile'}>
                <ListItemIcon>
                  {index === 0 ? <DashboardOutlinedIcon /> : index === 1 ? <AssessmentOutlinedIcon style={{color: '#0073E6'}}/> : <LibraryBooksOutlinedIcon />}
                </ListItemIcon>
                <span className='sidebar_text'>
                  {text}
                </span>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
      <hr className="sidebar_divider_mobile" />
      <List>
        {
          ['Round Status'].map((text, index) => (
            <ListItem key={index}>
              <ListItemButton className='sidebar_mobile'>
                <ListItemIcon>
                  <PendingActionsOutlinedIcon />
                </ListItemIcon>
                <span className='sidebar_text'>
                  {text}
                </span>
                <div className="sidebar_tag_mobile">Admin</div>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { md: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidthMobile },
        }}
      >
        {drawerMobile}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: {sm: 'none', xs: 'none', md: 'block'},
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default Sidebar