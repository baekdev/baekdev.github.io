import React, { Component } from 'react';
import {isProd} from "../utils";

class FacebookLike extends Component {

    render() {

        const { siteUrl, slug } = this.props;

        const style = {
            'margin': '10px 0 20px 0',
            'text-align' : 'center',
        }
    
        return isProd() && (
            <div style={style}>               
                <div className="fb-like" data-href={siteUrl + "/" + slug}
                    data-width="300" data-layout="button_count" data-action="like"
                    data-size="small" data-show-faces="true" data-share="true"></div>
            </div>
        );
    }
}

export default FacebookLike;
