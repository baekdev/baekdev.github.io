import React, { Component } from 'react';

class ResizeImage extends Component {

    render() {

        const { src, alt, width, height } = this.props;

        const tempStyle={
          width : "" + width,
          height : "" + height,
          }       

        const wrapStyle = {
            "vertical-align" : "middle",
            "text-align" : "center",
            "width" : "100%",
            "margin" : "20px 0",
        }
    
        return(
            <div style={wrapStyle}>
            <img src={src} alt={alt} style={tempStyle} />
            </div>
        );
    }
}

export default ResizeImage;