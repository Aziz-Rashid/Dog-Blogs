import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "gatsby"
import '../../templates/blog.css'

const Cards = ({title,about,image,slug})=> {
  return (
    <div className="width"  >
    <Card className="card">
       <Link to={`/${slug}`} style={{color:'black',textDecorationLine:'none'}}>
      <CardActionArea>
        <img className="b" src={image} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" >
          <p className="parag a" >{title}</p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="new">
          {about}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display:'flex',justifyContent:'center'}}>
        <Button variant="outlined" color="primary">
          Details
        </Button >
        <Button variant="contained"  color="primary">
          Learn More
        </Button>
      </CardActions>
      </Link>
    </Card>
    </div>
  );
}


export default Cards
