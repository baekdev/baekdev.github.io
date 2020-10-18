import React from 'react'
import styled from 'styled-components'

const Time = props => {
  const TimeContainer = styled.time`
    color: var(--color-textSecondary);
  `
  const { date } = props

  const dateObject = new Date(date)

  const yyyymmdd = dateObject
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: 'numeric',
    })
    .split('/')
    .reverse()
    .join('-')

  const friendlyDate = dateObject.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return <TimeContainer datetime={yyyymmdd}>{friendlyDate}</TimeContainer>
}
export default Time
