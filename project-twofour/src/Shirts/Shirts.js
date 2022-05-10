import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import greenshirt from '../Assets/Images/green_formal_shirt.webp'
import { Container, Row, Col } from 'react-bootstrap';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 440,
    },
});
const Shirts = () => {
    const classes = useStyles();

    return (
        <>
            <div>
                <Container style={{marginTop:"10px"}}>
                    <Row>
                    <Col lg={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={greenshirt}
                                title="Green Formal Outfit"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Formal Outfit
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                BUY NOW
                            </Button>
                        </CardActions>
                    </Card>
                    </Col>
                    <Col lg={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://cdn.shopify.com/s/files/1/0752/6435/products/2_0a9d945b-e3e3-4748-ad89-a814117a6237.jpg?v=1650639369"
                                title="Black Formal Outfit"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Formal Outfit
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                BUY NOW
                            </Button>
                        </CardActions>
                    </Card>
                    </Col>
                    <Col lg={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://cdn.shopify.com/s/files/1/0752/6435/products/30_765x.jpg?v=1648050385"
                                title="Blue Formal Outfit"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Formal Outfit
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                BUY NOW
                            </Button>
                        </CardActions>
                    </Card>
                    </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Shirts