import React from 'react';
import { makeStyles, Container, Grid, Typography,  Divider, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, CardActions, CardContent, CardActionArea, Card } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import Image from '../images/opt_mkp_react_thumbnail.jpg';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
createData('Elements', 60, 100),
createData('Plugins', 4, 6),
createData('Example Pages', 3, 12),
createData('Full Coded', ),
createData('Doucumentation', ),
createData('SASS Files', ),
createData('Photoshop Files', ),
createData('SketcheFiles', ),
createData('Premium Support',),
];

const useStyles = makeStyles({
    title: {
        flexGrow: 1,
    },
    cont: {
        marginTop: '9rem',
    },
    text: {
        color: 'white',
    },
    image: {
        height: '400px',
        width: '560px',
        borderRadius: '5%',
    },
    raised: {
        margin: '-60px 30px 0px',
        borderRadius: '6px',
        boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'white',
    },
});

export default function Material() {
    const classes = useStyles();

    return(
        <div>
            <div  style={{backgroundColor: '#51c9f5'}}>
                <Grid container>
                    <Grid item xs={12}>
                        <Container maxWidth='lg'>
                            <Typography variant="h6" align='left' className={classes.title}>
                                Creative Tim
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
                <Grid container spacing={1} style={{paddingBottom: '7rem'}}>
                    <Grid item xs={7} style={{marginTop: '4rem'}}>
                        <Container maxWidth='sm'>
                            <img src={Image} alt='image' className={classes.image} />
                            <div style={{marginTop: '20px'}}>
                                <Button variant="outlined" style={{marginRight: '20px'}}>Live Preview</Button>
                                <Button variant="contained">Docs</Button>
                            </div>
                        </Container>
                    </Grid>
                    <Grid item xs={4} className={classes.cont}>
                        <Container maxWidth='sm'>
                            <Typography variant='h4' className={classes.text}>
                                Material Kit PRO React
                            </Typography>
                            <Typography variant='subtitle1' className={classes.text} style={{paddingTop: '10px'}}>
                                PREMIUM MATERIAL-UI KIT
                            </Typography>
                            <Typography variant='subtitle2' className={classes.text} style={{paddingTop: '20px'}}>
                                <StarIcon /><StarIcon/><StarIcon/><StarIcon/><StarIcon/> 4.90/5 (122 Reviews)
                            </Typography>
                            <Typography variant='subtitle2' className={classes.text} style={{paddingTop: '30px', paddingBottom: '20px'}}>
                                Licence (EULA)
                            </Typography>
                            <Divider variant="middle" style={{marginBottom: '20px'}} />
                            <Button variant="contained" style={{marginRight: '20px'}}>Buy Now - $89</Button>
                            <Button variant="outlined">get free demo</Button>
                        </Container>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Container maxWidth='lg' className={classes.raised}>
                    <Grid container>
                        <Grid item xs={8}>
                            <Container maxWidth='md'style={{paddingLeft: '45px'}}>
                                <div>
                                    <Typography variant='subtitle2' color='textSecondary' align='left' style={{marginTop: '4rem', fontWeight: 'bold'}}>
                                        PREMIUM MATERIAL-UI REACT KIT
                                    </Typography>
                                    <Typography variant='h4' align='left' style={{paddingTop: '15px', fontSize: '2rem', fontSize: '30px'}}>
                                        Product Description
                                    </Typography>
                                    <Typography variant='h6' align='left' style={{marginTop: '5rem', fontSize: '18px'}}>
                                        Start Your Development With A Badass Material-UI React Kit inspired by Material Design. 
                                        If you like Google's Material Design, you will love this kit! It features a huge number of components built to fit together and look amazing.
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant='h6' align='left' style={{marginTop: '4rem', fontWeight: 'bold', fontSize: '18px'}}>
                                        FULLY CODED COMPONENT
                                    </Typography>
                                    <Typography variant='h6' align='left' style={{marginTop: '2rem', fontSize: '18px'}}>
                                        Material Kit PRO React features over 1000 individual components, giving you the freedom of choosing and combining. This means that there are thousands of possible combinations.
                                        All components can take variations in colour, that you can easily modify using SASS and JSX files (for the JSS syntax).
                                    </Typography>
                                    <Typography variant='h6' align='left' style={{marginTop: '4.5rem', fontSize: '18px'}}>
                                        Every item comes in 2 forms: PSD element and HTML/ReactJS/CSS/JSS implementation. You will save a lot of time going from prototyping to full-functional code, because all elements are implemented. 
                                        We wanted the design process to be seamless, so switching from image to the real page is very easy to do.
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant='h6' align='left' style={{marginTop: '4rem', fontWeight: 'bold', fontSize: '18px'}}>
                                        LAYERED COMPONENTS
                                    </Typography>
                                    <Typography variant='h6' align='left' style={{marginTop: '1rem', fontSize: '18px'}}>
                                        Every component comes with separate layers organized in folders. Every element has multiple states for colors, styles, hover, focus, that you can easily access and use. 
                                        All PSD files are easy-to-use and we also offer support for any issue that you may find. You will find it easy to make changes and customize the elements, due to the smart objects used.
                                        View all components here.
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant='h6' align='left' style={{marginTop: '4rem', fontWeight: 'bold', fontSize: '18px'}}>
                                        Sections
                                    </Typography>
                                    <Typography variant='h6' align='left' style={{marginTop: '1rem', fontSize: '18px'}}>
                                        Material Kit PRO React comes packed with a large number of sections. Putting together a page has never been easier than matching together sections. 
                                        From team presentation to pricing options, you can easily customise and built your pages. We have created multiple options for you to put together and customise into pixel perfect pages.
                                    </Typography>
                                </div>
                                <div style={{paddingBottom: '1.35rem'}}>
                                    <Typography variant='h6' align='left' style={{marginTop: '4rem', fontWeight: 'bold', fontSize: '18px'}}>
                                        Example Pages
                                    </Typography>
                                    <Typography variant='h6' align='left' style={{marginTop: '1rem', fontSize: '18px'}}>
                                        If you want to get inspiration or just show something directly to your clients, you can jump-start your development with our pre-built example pages. 
                                        From landing pages to e-commerce or blog pages, you will be able to quickly set up the basic structure for your web project.
                                    </Typography>
                                </div>
                                <Divider variant="middle" />
                                <Typography variant='caption'>
                                    Product Certified by: Creative Tim
                                </Typography>
                            </Container>
                        </Grid>
                        <Grid item xs={4}>

                        </Grid>
                        <Grid xs={12}>
                            <Typography variant='h5' style={{marginTop: '7rem'}}>
                                Trusted by 1,249,395 developers and these companies
                            </Typography>
                            <Container maxWidth="lg">
                                <Grid container style={{justifyContent: 'center'}}>
                                    <Grid xs={2} style={{marginTop: "70px", marginBottom: "60px"}}>
                                        <Card style={{maxWidth: '345'}}>
                                            <CardActionArea>
                                                <CardContent className={classes.content}>
                                                    <Typography variant="h5" color="textSecondary" align="center" gutterBottom>
                                                        Freelancer
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" align="center">
                                                        Good for a personal or client web/mobile app
                                                    </Typography> 
                                                </CardContent>
                                                <CardContent>
                                                    <Typography variant="h4" align="center">
                                                        $89
                                                    </Typography>
                                                    
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button variant="contained" style={{width: "100%", backgroundColor: '#422525'}} color="primary">
                                                    buy now
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid xs={2} style={{marginTop: "70px", marginBottom: "60px"}}>
                                        <Card>
                                            <CardActionArea>
                                                <CardContent className={classes.content}>
                                                    <Typography variant="h5" color="textSecondary" align="center" gutterBottom>
                                                        Startup
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" align="center" >
                                                        Build your startup or client web/mobile app.
                                                    </Typography> 
                                                </CardContent>
                                                <CardContent>
                                                    <Typography variant="h4" align="center">
                                                        $149
                                                    </Typography>
                                                    
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button variant="contained" style={{width: "100%", backgroundColor: '#422525'}} color="primary">
                                                    Buy Now
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid xs={2} style={{marginTop: "70px", marginBottom: "60px"}}>
                                        <Card style={{backgroundColor: '#444'}}>
                                            <CardActionArea>
                                                <CardContent className={classes.content}>
                                                    <Typography variant="h5" color="textSecondary" className={classes.text} align="center" gutterBottom>
                                                        Company
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" className={classes.text} align="center">
                                                        Perfect for web/mobile apps or SaaS projects.
                                                    </Typography> 
                                                </CardContent>
                                                <CardContent>
                                                    <Typography variant="h4" className={classes.text} align="center">
                                                        $299
                                                    </Typography>
                                                    
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button variant="contained" style={{width: "100%", backgroundColor: '#FF281E '}} color="primary">
                                                    Buy Now
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid xs={2} style={{marginTop: "70px", marginBottom: "60px"}}>
                                        <Card>
                                            <CardActionArea>
                                                <CardContent className={classes.content}>
                                                    <Typography variant="h5" color="textSecondary" align="center" gutterBottom>
                                                        Enterprise
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" align="center">
                                                        Deploy large-scale projects which include redistribution rights.
                                                    </Typography> 
                                                </CardContent>
                                                <CardContent>
                                                    <Typography variant="h4" align="center">
                                                        $799
                                                    </Typography>
                                                    
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button variant="contained" style={{width: "100%", backgroundColor: '#422525'}} color="primary">
                                                    Buy Now
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div style={{backgroundColor: '#eaeaea'}}>
                <Grid container maxWidth='md'>
                    <Grid item xs={12}>
                        <Typography variant='h4' style={{marginTop: '4.5rem'}}>
                            Get Free Demo
                        </Typography>
                        <Container maxWidth='lg'>
                            <Grid container  style={{paddingBottom: '7rem', marginTop: '4rem'}}>
                                <Grid item xs={6}>
                                    <Container maxWidth='sm'>
                                        <Typography variant='h6' align='left' style={{ fontSize: '18px' }}>
                                            Learn more about Material Kit PRO React in the light demo version. 
                                            It has features from the full version. We hope you will like this introduction to this product!
                                        </Typography>
                                        <TableContainer  style={{paddingTop: '1rem'}}>
                                            <Table aria-label='simple table'>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell></TableCell>
                                                        <TableCell>What is in Demo?</TableCell>
                                                        <TableCell>What is in PRO Version</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.map((row) => (
                                                        <TableRow key={row.name}>
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="right">{row.calories}</TableCell>
                                                        <TableCell align="right">{row.fat}</TableCell>
                                                        <TableCell align="right">{row.carbs}</TableCell>
                                                        <TableCell align="right">{row.protein}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Container>
                                </Grid>
                                <Grid item xs={6}>
                                    <Container maxWidth='sm' style={{marginTop: '3rem'}}>
                                        <img src={Image} alt='image' className={classes.image} />
                                        <div style={{marginTop: '20px'}}>
                                            <Button variant="outlined" style={{marginRight: '20px'}}>Live Preview</Button>
                                            <Button variant="outlined" color='primary'>Docs</Button>
                                        </div>
                                    </Container>
                                </Grid>
                            </Grid>
                        </Container>
                        
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}