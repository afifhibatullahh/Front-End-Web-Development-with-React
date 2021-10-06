import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const dish = this.props.dish;
    const comment = this.props.dish.comments.map((data) => {
      return (
        <ul className="list-unstyled">
          <li key={data.id}>
            <p>{data.comment}</p>
            <p>
              -- {data.author}, &nbsp;
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(new Date(data.date))}
            </p>
          </li>
        </ul>
      );
    });

    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name} </CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {comment}
        </div>
      </div>
    );
  }
}

export default DishDetail;
