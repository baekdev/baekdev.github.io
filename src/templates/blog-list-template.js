import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import PostsList from '../components/PostsList'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import styled from 'styled-components'

export const PageTitle = styled.h2`
`
export const PageTitleHr = styled.hr`
  margin: 20px 0 10px 0;
`

class BlogList extends React.Component {
  render() {
    const posts = this.props.data.posts.edges
    const { pageContext } = this.props

    return (
      <Layout location={this.props.location}>
        <SEO />
        {/* <HeroMain title={title} subTitle={description} /> */}
        <Wrapper>
          <PageTitle>All Posts</PageTitle>
          <PageTitleHr/>
          <PostsList posts={posts} />
        </Wrapper>

        <Pagination
          nbPages={pageContext.nbPages}
          currentPage={pageContext.currentPage}
        />
      </Layout>
    )
  }
}

export default BlogList

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: {regex: "/content/posts/|/content/til/"}
        frontmatter: { published: { ne: false }, unlisted: { ne: true } }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            type
            tags
            language
            slug
            hero
            cover {
              publicURL
            }
          }
        }
      }
    }
  }
`
