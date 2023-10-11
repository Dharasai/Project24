import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const ShowCard = ({ source }) => {
    const classes = useStyles();
    const [showproducts, setShowproducts] =useState(false)
    const [products, setProducts] = useState([]);
    const { url, title, subtitle } = source;

    const FetchData = async () => {
        const response = await axios.get(url);
        console.log("response", response);
        console.log("response data", response.data);

        setProducts(response.data)
        // console.log("images",response.data)
    }

    useEffect(() => {
        FetchData();
    }, []);

    useEffect(() => {
        // FetchData();
        setShowproducts(true);
        console.log("products data", products)
    }, [products]);

  
    return (
        <>
            <div>
                <div style={{ height: "170px", backgroundColor: "#e3e2e1" }}>
                    <h1 style={{ padding: "19px", fontSize: "60px" }}>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
                <Container style={{ marginTop: "10px" }}>
                    <Row>

                        {showproducts && products.map((item) => { 
                            // <Col><img src={item.image} alt={item} /></Col>
                            // <Col lg={4} key={item.id}>
                            //     <Card className={classes.root} >
                            //         <CardActionArea>
                            //             {/* <CardMedia
                            //                 className={classes.media}
                            //                 image={`${item.image}`}
                            //                 title="Green Formal Outfit"
                            //             /> */}
                            //             <img src={item.image} alt="fs" />

                            //             <CardContent>
                            //                 <Typography gutterBottom variant="h5" component="h2">
                            //                     {item.title}
                            //                 </Typography>
                            //                 <Typography gutterBottom variant="h5" component="h2">
                            //                     {item.price}
                            //                 </Typography>
                            //             </CardContent>
                            //         </CardActionArea>
                            //         <CardActions>
                            //             <Button size="small" color="primary">
                            //                 Share
                            //             </Button>
                            //             <Button size="small" color="primary">
                            //                 BUY NOW
                            //             </Button>
                            //         </CardActions>
                            //     </Card>
                            // </Col>
                        })}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ShowCard
