import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lato", sans-serif;
  color: var(--color-text);
  background-color: var(--color-siteBackground);
  word-break: break-all;
  text-align: justify;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}

a {
  text-decoration: none;
  color: var(--color-text);
}

hr {
  border: 0;
  border-top: 1px solid var(--color-grey100);
  margin: 50px 0 5px 0;
}

ul,
ol {
  padding-left: 2em;
  margin: 10px 0 10px 0;
}

ul ul,
ol ol {
 margin: 0 !important;
}

.utterances {
  max-width: 100% !important;
}

*::selection {
  background-color: var(--color-secondary);
}

code[class*="language-"], pre[class*="language-"]{
  font-size: 0.9em;
}
`
export const StyledLink = styled(Link)`
  box-shadow: 0 2px 0 0 var(--color-secondary);

  &:hover {
    filter: brightness(150%);
    box-shadow: none;
  }
`

export const Text = styled.p`
  line-height: 1.6;
  margin: 1em 0 0 0;
`

export const Bull = styled.span`
  display: inline-block;
  color: var(--color-textSecondary);
  margin: 0 4px;
  &::before {
    content: '•';
  }
`

export const ReadingTime = props => {
  const ReadingTimeContainer = styled.span`
    text-transform: uppercase;
    color: var(--color-textSecondary);
  `
  return <ReadingTimeContainer>{props.min} min read</ReadingTimeContainer>
}
