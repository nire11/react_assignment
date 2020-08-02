import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
  content: {
    paddingRight: '20px',
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Company name
          </Typography>
          <Typography variant="h6" className={classes.content}>
              Features
          </Typography>
          <Typography variant="h6" className={classes.content}>
              Enterprise
          </Typography>
          <Typography variant="h6"className={classes.content}>
              Support
          </Typography>
          <Button variant="outlined" color="primary">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
