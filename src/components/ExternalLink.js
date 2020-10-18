import React, { Component } from 'react';
import ResizeImage from 'components/ResizeImage';

class ExternalLink extends Component {

    render() {

        const { href, target, text, src, alt, width, height } = this.props;
        
        return(
            <a href={href} target={target}>
            { src? (<ResizeImage src={src} alt={alt} width={width} height={height} />) : text }
            </a>
        );
    }
}

export default ExternalLink;