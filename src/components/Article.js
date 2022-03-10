import React from 'react'
import styled from 'styled-components'
import Bio from './Bio'
import Content from './Content'
import FacebookLike from './FacebookLike'
import {isProd} from "../utils";

const ArticleWrapper = styled.article`
  padding: 0;

  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

const ArticleFooter = styled.footer`
  position: relative;
  margin: 6rem 0 0;
  padding: 3rem 0 0;
  border-bottom: 1px solid #ececec;
`

const CoupangPartners = styled.div`
  text-align: center; 
  font-size: .1em; 
  color: #80808078;
`

class Article extends React.Component {
  render() {

    const { post, siteMetadata } = this.props
    const sdk = require('./FacebookSdk');

    return (
      <ArticleWrapper>
        {/* <script dangerouslySetInnerHTML= {{ __html: sdk}} /> */}
        <FacebookLike siteUrl={siteMetadata.siteUrl} slug={post.frontmatter.slug}/>
        <Content
          content={post.body}
          date={post.frontmatter.date}
          tags={post.frontmatter.tags}
          translations={post.frontmatter.translations}
        />
        <br/>
        <br/>
        <FacebookLike siteUrl={siteMetadata.siteUrl} slug={post.frontmatter.slug}/>
        <CoupangPartners>
          쿠팡 파트너스 활동을 통해 일정액의 커미션을 제공받을 수 있습니다.
        </CoupangPartners>
        {/* <ArticleFooter>
          <Bio />
        </ArticleFooter> */}
      </ArticleWrapper>
    )
  }
}

export default Article
