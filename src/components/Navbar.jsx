import React, { useState } from 'react'
import { AppBar, Typography, IconButton, Toolbar, Button, Hidden, Container, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Menu, Inbox } from '@material-ui/icons'
import Modal from './Modal'
import { Link, animateScroll as scroll } from 'react-scroll'

const useStyles = makeStyles({
  grow: {
    flex:1
  },
  navbarRight:{
    display: 'flex',
    justifyContent: 'flex-end',
    flex:1
  },
  menuIcon: {
    color: 'white'
  },
  drawer: {
    width: '100%',
    minWidth: '260px',
  },
  link: {
    color: 'white',
    fontSize: '14px'
  }
})

function Navbar() {
  const classes = useStyles()
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const handleDrawer = () => {
    setOpen(true)
  }

  

  return (
    <AppBar position="sticky" className={classes.grow}>
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => scroll.scrollToTop()}>
            <Typography variant="h6">
              Lsm Company
            </Typography>
          </IconButton>
          <div className={classes.navbarRight}>
            <Hidden smDown>
              <Link to="services" smooth={true} duration={1000}>
                <IconButton aria-label="productos" >
                  <Typography variant="body2" className={classes.link}>Productos</Typography> 
                </IconButton>
              </Link>
              <Link to="prices" smooth={true} duration={1000}>
                <IconButton aria-label="productos" >
                  <Typography variant="body2" className={classes.link}>Paquetes</Typography>
                </IconButton>
              </Link>
              <Link to="portfolio" smooth={true} duration={1000}>
                <IconButton aria-label="productos" >
                  <Typography variant="body2" className={classes.link}>Portafolio</Typography>
                </IconButton>
              </Link>
              <Link to="features" smooth={true} duration={1000}>
                <IconButton aria-label="productos" >
                  <Typography variant="body2" className={classes.link}>Sobre Nosotros</Typography>
                </IconButton>
              </Link>
              <Link to="contactUs" smooth={true} duration={1000}>
                <IconButton aria-label="productos" >
                  <Typography variant="body2" className={classes.link}>Contactanos</Typography> 
                </IconButton>
              </Link> 
              
              <Button color="secondary" variant="contained" onClick={showModal}>Contratanos</Button>
            </Hidden>
            <Hidden mdUp>
              <IconButton onClick={handleDrawer} >
                <Menu className={classes.menuIcon} />
              </IconButton>
            </Hidden>
            
            <Modal show={show} close={closeModal}/>

            <Drawer
              variant="temporary"
              anchor="right"
              open={open}
              onClose={() => setOpen(false)}
            >
              <div className={classes.drawer}>
                <List component='nav'>
                  <Link to="services" smooth={true} duration={1000}>  
                    <ListItem button>
                      <ListItemIcon>
                        <Inbox />
                      </ListItemIcon>
                      <ListItemText primary="Productos" />
                    </ListItem>
                  </Link>
                  <Link to="prices" smooth={true} duration={1000}>
                    <ListItem button>
                      <ListItemIcon>
                        <Inbox />
                      </ListItemIcon>
                      <ListItemText primary="Paquetes" />
                    </ListItem>
                  </Link>
                  <Link to="portfolio" smooth={true} duration={1000}>
                    <ListItem button>
                      <ListItemIcon>
                        <Inbox />
                      </ListItemIcon>
                      <ListItemText primary="Portafolio" />
                    </ListItem>
                  </Link>
                  <Link to="features" smooth={true} duration={1000}>
                    <ListItem button>
                      <ListItemIcon>
                        <Inbox />
                      </ListItemIcon>
                      <ListItemText primary="Sobre Nosotros" />
                    </ListItem>
                  </Link>
                  <Link to="contactUs" smooth={true} duration={1000}>
                    <ListItem button>
                      <ListItemIcon>
                        <Inbox />
                      </ListItemIcon>
                      <ListItemText primary="Contactanos" />
                    </ListItem>
                  </Link>
                  <ListItem button>
                    <Button variant="contained" color="secondary" onClick={showModal}>
                      Contratanos
                    </Button>
                  </ListItem>
                </List>
              </div>
            </Drawer>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
