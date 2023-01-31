import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useMediaQuery } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));



const AdminCommon = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery('(min-width:600px)'); // Change this value to match your desired breakpoint
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setOpen(!open)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Post Now   
          </Typography>
        </Toolbar>
      </AppBar>
      {matches ? (
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
          <List>
{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
<ListItem button key={text}>
<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
<ListItemText primary={text} />
</ListItem>
))}
</List>
<Divider />
<List>
{['All mail', 'Trash', 'Spam'].map((text, index) => (
<ListItem button key={text}>
<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
<ListItemText primary={text} />
</ListItem>
))}
</List>
</div>
</Drawer>
) : (
<Drawer
className={classes.drawer}
variant="temporary"
open={open}
onClose={() => setOpen(false)}
classes={{
paper: classes.drawerPaper,
}}
>
<Toolbar />
<div className={classes.drawerContainer}>
<List>
{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
<ListItem button key={text}>
<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
<ListItemText primary={text} />
</ListItem>
))}
</List>
<Divider />
<List>
{['All mail', 'Trash', 'Spam'].map((text, index) => (
<ListItem button key={text}>
<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
<ListItemText primary={text} />
</ListItem>
))}
</List>
</div>
</Drawer>
)}
<main className={classes.content}>
<Toolbar />
{/* Add your content here */}
</main>
</div>
);
}





            


export default AdminCommon