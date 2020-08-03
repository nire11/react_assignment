import React from 'react';
import { makeStyles, Grid, Typography, Button, Container, CardContent, Card } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RefreshIcon from '@material-ui/icons/Refresh';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    top: {
        marginTop: '25px',
    },
    padding: {
        paddingRight: '20px',
    },
    root: {
        marginRight: '20px',
    },
    card: {
        marginTop: '15px',
    },
});

export default function Body() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3} className={classes.top}>
                <Grid xs={4}>
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <RefreshIcon />
                        </Grid>
                        <Grid item xs={6}>
                            <ButtonGroup color="gray" aria-label="contained primary button group">
                                <Button>Upcomming</Button>
                                <Button disabled>Recorded</Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item xs>
                            <AddBoxIcon />
                        </Grid>
                    </Grid>
                    <Typography variant='h5' align='center' style={{paddingTop: '60px'}}>
                        410 913 70125
                    </Typography>
                    <Typography variant='subtitle1' align='center' style={{paddingBottom: '20px'}}>
                        My Personal Meeting ID (PMI)
                    </Typography>
                    <Divider variant="middle" />
                    <Container maxWidth='md'>
                        <Typography variant='subtitle1' color='textSecondary' align='left' style={{paddingTop: '30px', paddingLeft: '30px'}}>
                            Recurring Meeting
                        </Typography>
                        <Card className={classes.card}>
                            <CardContent align='left' style={{paddingLeft: '30px'}}>
                                <Typography variant='h6' style={{fontSize: '1.15rem'}}>
                                    RAC-KNE PPs | General Member Meeting
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Meeting ID: 410 913 70125
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.card}>
                            <CardContent align='left' style={{paddingLeft: '30px', backgroundColor: '#3578E5'}}>
                                <Typography variant='h6' style={{fontSize: '1.15rem'}}>
                                    React JS Course
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Meeting ID: 410 913 70125
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.card}>
                            <CardContent align='left' style={{paddingLeft: '30px'}}>
                                <Typography variant='h6' style={{fontSize: '1.15rem'}}>
                                    Session on Effective Communication with Maria Creison
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Meeting ID: 410 913 70125
                                </Typography>
                            </CardContent>
                        </Card>
                    </Container>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid xs={7} style={{paddingTop: '70px'}}>
                    <Container maxWidth='md'>
                        <Typography variant='h4' align='left'>
                            React JS Course
                        </Typography>
                        <Typography variant='subtitle1' align='left' style={{paddingTop: '30px'}}>
                            Recuring | In Process
                        </Typography>
                        <Typography variant='subtitle1' align='left' style={{paddingTop: '10px'}}>
                            Meeting ID:410 913 70125
                        </Typography>
                        <Grid spacing={2} align='left' style={{paddingTop: '35px'}}>
                            <Button variant="contained" className={classes.root} disabled>
                                Start
                            </Button>
                            <Button variant='outlined' className={classes.root}>
                                <FileCopyIcon /> Copy Invitation
                            </Button>
                            <Button variant='outlined' className={classes.root}>
                                <EditIcon /> Edit
                            </Button>
                            <Button variant='outlined' className={classes.root}>
                                <ClearIcon /> Delete
                            </Button>
                        </Grid>
                        <Typography variant='subtitle1' align='left' color='primary' style={{paddingTop: '35px'}}>
                            Show Meeting Invitation
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}