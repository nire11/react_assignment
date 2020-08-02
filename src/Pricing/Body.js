import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core\/Typography';
import Button from '@material-ui/core/Button';
import { CardContent, Grid, CardActionArea, CardActions } from '@material-ui/core';

const useStyles = makeStyles ({
    title: {
        marginTop: "70px",
    },
    root: {
        maxWidth: "345",
    },
    content: {
        height: "45px",
        backgroundColor: "#80808017",
    },
    pgraph: {
        paddingRight: "53px",
        paddingLeft: "55px",
        color: "black",
    },
    g1: {
        marginTop: "90px",
        marginBottom: "60px",
    },
});

export default function Body () {
    const classes = useStyles();

    return (
        <div>
            <Container>
                <Container maxWidth="sm" className={classes.title}>
                    <Typography variant="h2" align="center">
                        Pricing
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" style={{marginTop:"20px"}}>
                        Quickly build an effective pricing table for your potential customers with this layout. 
                            It's built with default Material-UI components with little customization.
                    </Typography>
                </Container>
                <Container maxWidth="md">
                    <Grid container spacing={4} style={{justifyContent: 'center'}}>
                        <Grid xs={3} spacing={3} className={classes.g1} style={{marginRight: "30px"}}>
                            <Card>
                                <CardActionArea>
                                    <CardContent className={classes.content}>
                                        <Typography variant="h5" color="textSecondary" align="center">
                                            Free
                                        </Typography>
                                    </CardContent>
                                    <CardContent>
                                        <Typography variant="h3" align="center">
                                            $0
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" align="center" className={classes.pgraph}>
                                            10 users included 2 GB of storage Help center access Email support
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button variant="outlined" style={{width: "100%"}} color="primary">
                                        SIGN UP FOR FREE
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid xs={3} style={{marginTop: "70px", marginBottom: "60px", marginRight: "30px"}}>
                            <Card>
                                <CardActionArea>
                                    <CardContent className={classes.content}>
                                        <Typography variant="h5" color="textSecondary" align="center">
                                            Pro
                                        </Typography>
                                    </CardContent>
                                    <CardContent>
                                        <Typography variant="h3" align="center">
                                            $15
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" align="center" className={classes.pgraph}>
                                            10 users included 2 GB of storage Help center access Email support
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button variant="outlined" style={{width: "100%"}} color="primary">
                                        SIGN UP FOR FREE
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid xs={3} className={classes.g1}>
                        <Card>
                            <CardActionArea>
                                <CardContent className={classes.content}>
                                    <Typography variant="h5" color="textSecondary" align="center">
                                        Enterprised
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography variant="h3" align="center">
                                        $30
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" align="center" className={classes.pgraph}>
                                        10 users included 2 GB of storage Help center access Email support
                                    </Typography> 
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button variant="outlined" style={{width: "100%"}} color="primary">
                                    SIGN UP FOR FREE
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    </Grid>
                </Container>
            </Container>
        </div>
    )
}