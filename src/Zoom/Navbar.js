import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import { fade, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 1.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 1.25),
      },
      marginLeft: 0,
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '210px',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '10ch',
        },
      },
    },
    center: {
        justifyContent: 'center',
    },
  }));

export default function Navbar () {
    const classes = useStyles ();

    return (
        <div>
            <AppBar position="static" color="default">
                <Toolbar>
                  <div className={classes.root}>
                    <HomeOutlinedIcon style={{paddingRight: '5.5rem', fontSize: '40px'}}/>
                    <ChatBubbleOutlineIcon style={{paddingRight: '5.5rem', fontSize: '40px'}}/>
                    <ScheduleIcon color="primary" style={{paddingRight: '5.5rem', fontSize: '40px'}}/>
                    <AccountBoxOutlinedIcon style={{fontSize: '40px'}}/>
                  </div>
                  <div className={classes.search}>
                      <div className={classes.searchIcon}>
                      <SearchIcon />
                      </div>
                      <InputBase
                      placeholder="Search…"
                      classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                      />
                  </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}