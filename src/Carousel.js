import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  }

  static getDerivedStateFromProps({ media }) {  // static means it is only available at the class level, not "copied" to all instances
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo[`@size`] === `pn`);
    }

    return { photos };

  }
  
  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal"/>
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img 
              key={photo.value} 
              src={photo.value} 
              alt="animal thumbnail" 
              className={index === active ? 'active': ''}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;