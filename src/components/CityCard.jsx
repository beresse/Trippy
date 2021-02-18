import React from "react";

class CityCard extends React.Component {
  render() {
    return (
      <div
        className='cityCard mb-3'
        style={{ width: "18rem" }}
        onClick={this.props.click}>
        <img src={this.props.image} className='card-img-top' alt='' />
        <div className='card-body'>
          <h4 className='card-title'>{this.props.cities}</h4>
        </div>
      </div>
    );
  }
}

export default CityCard;
