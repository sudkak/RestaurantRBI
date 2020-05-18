import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';


const Items = (props) => { 

      const processImageUrl = (item) => item.image.asset._ref.replace('-','s/').replace(/\-(?=[^-]*$)/,'.') ;
     
       const dishes = props.items.map( (item) => {
          return  (  
              <div  className="col-12 col-md-4 ">
                <Card key={item._id} style={{ margin:"1rem 0"}}>
                      <CardTitle style={{ textAlign:"center",margin:"1rem 0"}}>{item.name.en}</CardTitle>          
                  <CardImg width="100%" src = { processImageUrl(item) } height="240px" />
                </Card>
              </div>)

       });
    
      return (
          <div style={{ clear:"both", margin:"2rem 0"}}> 
            <div className="row">
                 {dishes}
              </div>
          </div>

      )

}

export default Items;
