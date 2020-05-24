import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// CSS
import './Projects.css';

// Media
import computer from './SVG/computer.svg';
import github from './SVG/github-purple.svg';
import code from './Media/code.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Ivan's Portfolio"
                    height="140"
                    image={code}
                    title="Project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <span id='projectTitle'>Portfolio</span>
                    </Typography>
                    <Typography component="p">
                        <span id='projectDescription'>The site you're currently on! It was built from scratch without the use of a template. </span>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div class='labels'>
                <span className='label'>ReactJS</span>
                <span className='label'>Material-UI</span>
                <span className='label'>HTML5</span>
                <span className='label'>CSS3</span> 
                <span className='label'>JavaScript</span> 
            </div>
            <CardActions>
                <Button size="small" color="primary" href="https://github.com/IvunOrtiz/portfolio" target="_blank">
                    <img className='svgIcons' src={computer} alt='computer'/> View Demo
                </Button>
                <Button size="small" color="primary" href="https://github.com/IvunOrtiz/portfolio" target="_blank">
                    <img className='svgIcons' src={github} alt='github icon'/> View Code
                </Button>
            </CardActions>
        </Card>
    );
}