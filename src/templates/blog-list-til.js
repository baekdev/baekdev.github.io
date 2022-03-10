import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import {PageTitle, PageTitleHr} from "./blog-list-template";
import TilList from "../components/TilList";

class BlogListTil extends React.Component {
  render() {
    const posts = this.props.data.posts.edges

    return (
      <Layout location={this.props.location}>
        <SEO />

        <Wrapper>
          <PageTitle>TIL</PageTitle>
          <PageTitleHr/>
          <TilList posts={posts} />
        </Wrapper>

      </Layout>
    )
  }
}

export default BlogListTil

export const pageQuery = graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
      posts: allMdx(sort: {order: ASC, fields: [frontmatter___title]}, filter: {fileAbsolutePath: {regex: "/content/til/"}, frontmatter: {published: {ne: false}, unlisted: {ne: true}}}) {
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
              date
              cover {
                publicURL
              }
            }
          }
        }
      }
    }
`
