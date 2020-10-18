import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html lang="ko" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        
        {/* fb:app_id */}
        {/* <meta property="fb:app_id" content="2757197850997445" /> */}

        {/* google search console */}
        <meta name="google-site-verification" content="azlxaB7gWVOHFnwO3w2PxSyV2qA1Bzq4UFLkaZQcmxo" />

        {/* naver web master */}
        <meta name="naver-site-verification" content="11ec9086ec9292ebc8dc73f6224492f208b2007b"/>
      </head>
      <body {...props.bodyAttributes}>
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
