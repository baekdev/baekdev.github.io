import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {isProd} from "../utils";

function GoogleAD() {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                googleAdsence {
                    adClient
                    adSlot
                }
              }
            }
          }
        `
      )
    
      useEffect(()=>{
        (window.adsbygoogle = window.adsbygoogle || []).push({});   
      })
        return isProd() && (
            
                <ins className="adsbygoogle"
                    style={{ "display":"block", "text-align":"center" }}
                    data-ad-layout="in-article"
                    data-ad-format="fluid"
                    data-ad-client={site.siteMetadata.googleAdsence.adClient}
                    data-ad-slot={site.siteMetadata.googleAdsence.adSlot} ></ins>
            
        )
    }
    export default GoogleAD
