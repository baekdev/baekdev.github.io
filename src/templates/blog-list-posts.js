import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import PostsList from '../components/PostsList'
import SEO from '../components/SEO'
import PaginationPosts from "../components/PaginationPosts";
import {PageTitle, PageTitleHr} from "./blog-list-template";

class BlogListPosts extends React.Component {
  render() {
    const posts = this.props.data.posts.edges
    const { pageContext } = this.props

    return (
      <Layout location={this.props.location}>
        <SEO />
        <Wrapper>
            <PageTitle>Blog</PageTitle>
            <PageTitleHr/>
          <PostsList posts={posts} />
        </Wrapper>

        <PaginationPosts
          nbPages={pageContext.nbPages}
          currentPage={pageContext.currentPage}
        />
      </Layout>
    )
  }
}

export default BlogListPosts

export const pageQuery = graphql`
  query BlogListPosts($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: {regex: "/content/posts/"}
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
