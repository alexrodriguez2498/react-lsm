import React, { useState, useRef, useEffect } from 'react'
import { AppBar, Typography, IconButton, Toolbar, Button, Hidden, Container, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Menu, Inbox } from '@material-ui/icons'
import Modal from './Modal'
import { Link as SmoothScrollLink, animateScroll as scroll } from 'react-scroll'
import { Link as ReactRouterLink } from 'react-router-dom'

const useStyles = makeStyles({
  grow: {
    flex:1,
    marginTop: '-64px',
    '& img':{
      maxWidth:"150px"
    }
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
  SmoothScrollLink: {
    color: 'white',
    fontSize: '14px'
  },
  contractButton: {
    borderRadius: '999px'
  },
  anchor:{
    textDecoration: 'none',
    color: 'white'
  },
  anchorButton:{
    borderRadius: '999px',
    height: '100%'
  }

})

function Navbar() {
  const classes = useStyles()
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()

  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100 
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  let styles = {
    backgroundColor: navBackground ? "#330033 " : "transparent",
    transition: "400ms ease",
  }

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
    <AppBar position="sticky" className={classes.grow} style={styles}>
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => scroll.scrollToTop()}>
            <img src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm-assets%2Flogo-2.0.png?alt=media&token=c114218a-ff66-4b83-80ec-78e64dba6210" alt=""/>
          </IconButton>
          <div className={classes.navbarRight}>
            <Hidden smDown>
              <SmoothScrollLink to="services" smooth={true} duration={1000}>
                <IconButton aria-label="productos" >
                  <Typography variant="body2" className={classes.SmoothScrollLink}>Productos</Typography> 
                </IconButton>
              </SmoothScrollLink>
              <SmoothScrollLink to="prices" smooth={true} duration={1000}>
                <IconButton aria-label="productos" >
                  <Typography variant="body2" className={classes.SmoothScrollLink}>Paquetes</Typography>
                </IconButton>
              </SmoothScrollLink>
              <SmoothScrollLink to="portfolio" smooth={true} duration={1000}>
                <IconButton aria-label="productos" >
                  <Typography variant="body2" className={classes.SmoothScrollLink}>Portafolio</Typography>
                </IconButton>
              </SmoothScrollLink>
              <SmoothScrollLink to="features" smooth={true} duration={1000}>
                <IconButton aria-label="productos" >
                  <Typography variant="body2" className={classes.SmoothScrollLink}>Sobre Nosotros</Typography>
                </IconButton>
              </SmoothScrollLink>
              <SmoothScrollLink to="contactUs" smooth={true} duration={1000}>
                <IconButton aria-label="productos" >
                  <Typography variant="body2" className={classes.SmoothScrollLink}>Contactanos</Typography> 
                </IconButton>
              </SmoothScrollLink> 
              <ReactRouterLink to="/lsm-components" className={classes.anchor}>
                <Button className={classes.anchorButton} color="primary" variant="contained" >Lsm Components</Button>
              </ReactRouterLink> 
              <Button className={classes.contractButton} color="secondary" variant="contained" onClick={showModal}>Contratanos</Button>
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
                  <SmoothScrollLink to="services" smooth={true} duration={1000}>  
                    <ListItem button>
                      <ListItemIcon>
                        <Inbox />
                      </ListItemIcon>
                      <ListItemText primary="Productos" />
                    </ListItem>
                  </SmoothScrollLink>
                  <SmoothScrollLink to="prices" smooth={true} duration={1000}>
                    <ListItem button>
                      <ListItemIcon>
                        <Inbox />
                      </ListItemIcon>
                      <ListItemText primary="Paquetes" />
                    </ListItem>
                  </SmoothScrollLink>
                  <SmoothScrollLink to="portfolio" smooth={true} duration={1000}>
                    <ListItem button>
                      <ListItemIcon>
                        <Inbox />
                      </ListItemIcon>
                      <ListItemText primary="Portafolio" />
                    </ListItem>
                  </SmoothScrollLink>
                  <SmoothScrollLink to="features" smooth={true} duration={1000}>
                    <ListItem button>
                      <ListItemIcon>
                        <Inbox />
                      </ListItemIcon>
                      <ListItemText primary="Sobre Nosotros" />
                    </ListItem>
                  </SmoothScrollLink>
                  <SmoothScrollLink to="contactUs" smooth={true} duration={1000}>
                    <ListItem button>
                      <ListItemIcon>
                        <Inbox />
                      </ListItemIcon>
                      <ListItemText primary="Contactanos" />
                    </ListItem>
                  </SmoothScrollLink>
                  <ListItem button>
                    <Button className={classes.contractButton} variant="contained" color="secondary" onClick={showModal}>
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
