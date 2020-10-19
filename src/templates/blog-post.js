import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import HeroPost from '../components/HeroPost'
import ContentHeader from '../components/ContentHeader'
import Article from '../components/Article'
import PrevNextPost from '../components/PrevNextPost'
import SEO from '../components/SEO'
import Comments from '../components/Comments'
import GoogleAD from '../components/GoogleAD'

class BlogPostTemplate extends React.Component {
  render() {

    const siteMetadata = this.props.data.site.siteMetadata;
    const post = this.props.data.post
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          cover={post.frontmatter.hero ? post.frontmatter.hero : post.frontmatter.cover && post.frontmatter.cover.publicURL}
          imageShare={
            post.frontmatter.imageShare && post.frontmatter.imageShare.publicURL
          }
          lang={post.frontmatter.language}
          translations={post.frontmatter.translations}
          path={post.frontmatter.slug}
          isBlogPost
        />

        <Wrapper>
        <HeroPost title={post.frontmatter.title} />
        {(post.frontmatter.tags || post.frontmatter.date || post.frontmatter.translations) && (
          <ContentHeader date={post.frontmatter.date} tags={post.frontmatter.tags} translations={post.frontmatter.translations} />
        )}        
        {
          post.frontmatter.hero 
          ? ( <Hero heroImg={post.frontmatter.hero} /> )
          : ( <Hero heroImg={post.frontmatter.cover && post.frontmatter.cover.publicURL} /> )
        } 

          <GoogleAD />
          <Article post={post} siteMetadata={siteMetadata} />
          <GoogleAD />
        </Wrapper>

        <Wrapper as="aside">
           {/* <Disqus slug={post.frontmatter.slug} title={post.frontmatter.title} /> */}
           <Comments />  
        </Wrapper>

        <PrevNextPost previous={previous} next={next} />

      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
        site_url: siteUrl
      }
    }
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      excerpt
      body
      frontmatter {
        title
        date
        slug
        language
        tags
        hero
        cover {
          publicURL
        }
        imageShare {
          publicURL
        }
        translations {
          language
          link
          hreflang
        }
      }
    }
  }
`
