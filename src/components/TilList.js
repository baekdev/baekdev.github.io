import React, { Fragment } from 'react'

import useSiteMetadata from '../hooks/use-site-config'
import TilListItem from "./TilListItem";

const TilList = ({ posts }) => {
  const { defaultLang } = useSiteMetadata()

  return (
    <Fragment>
      {posts.map(post => {
        const props = {
          title: post.node.frontmatter.title,
          type: post.node.frontmatter.type,
          excerpt: post.node.excerpt,
          slug: post.node.frontmatter.slug,
          timeToRead: post.node.timeToRead,
          language: post.node.frontmatter.language || defaultLang,
          tags: post.node.frontmatter.tags || [],
          hero: post.node.frontmatter.hero,
          cover: post.node.frontmatter.cover,
          date: post.node.frontmatter.date,
        }
        return <TilListItem key={props.slug} {...props} />
      })}
    </Fragment>
  )
}
export default TilList
