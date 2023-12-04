import React from 'react';
import { AppBar,Button,Tab, Tabs, Toolbar, Typography,} from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';


const Navbar = () => {
  return (
    <>
      
      <AppBar position="static">
       <Toolbar> 
       <ConnectWithoutContactIcon/>
        <Typography variant="h6">KHPPOST</Typography>
           <Tabs sx={{marginLeft:`auto`}} textcolor="inherit">
            <Tab label="HOME"/>
            <Tab label="PROFIE"/>
            <Tab label="SEARCH"/>
           </Tabs>
           <Button sx={{marginLeft: `auto`}} variant='conatined'>LOGIN</Button>
           <Button sx={{marginLeft: `10px`}} variant='conatined'>REGIStER</Button>
          
        </Toolbar>
        
         </AppBar>
      

      
    </>
  );
};

export default Navbar;
