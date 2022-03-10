import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {getTitlePrefix} from "../utils";

const Post = styled.article`
  padding-bottom: 0.5rem;
`
const PostHeader = styled.header`
  padding: 1em 0;
`

const Excerpt = styled.p`
  line-height: 1.45;
  padding-bottom: 0.5em;
  color: darkgray;
`

const PostTitleLink = styled(Link)`
  color: var(--color-h2);
  &:hover {
    border-bottom: 1px dotted var(--color-text);
  }
`

const TilListItem = props => {
  const { title, type, excerpt, slug, language, tags, timeToRead, hero, cover, date } = props
  return (
    <Post>
      <PostHeader>
        <h2>
          <PostTitleLink to={`/${slug}`}>
            {getTitlePrefix(type)}{title}
          </PostTitleLink>
        </h2>
      </PostHeader>

      <section>
        <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
      </section>
    </Post>
  )
}
export default TilListItem
