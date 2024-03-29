import React, { Fragment } from 'react'
import styled from 'styled-components'
import TagList from './TagList'
import Translations from './Translations'
import Time from './Time'
import { Bull } from './Commons'

const Header = styled.header`
  margin: 1rem 0;
  color: var(--color-textSecondary);
  font-size: 0.9em;
  text-align: right;
`

class ContentIntro extends React.Component {
  render() {
    const { date, updated, tags, translations } = this.props

    return (
      <Header>
        {date && <Time date={date} updated={updated} />}
        {Array.isArray(tags) && tags.length > 0 && <Bull />}
        {Array.isArray(tags) && tags.length > 0 && (
          <Fragment>
            <TagList tags={tags} />
          </Fragment>
        )}

        {translations && <Translations translations={translations} />}
      </Header>
    )
  }
}

export default ContentIntro
