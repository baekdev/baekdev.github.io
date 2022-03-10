import React from 'react'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import {getTitlePrefix} from "../utils";

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  max-width: 770px;
  margin: 0 auto;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  padding-bottom: 20px;
  border-bottom: 1px solid #ececec;
`

const HeroSubTitle = styled.h2`
  margin: 10px 50px;
`

const Hero = props => {
  const { siteCover } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  const heroImg = props.heroImg || fluid.src

  return (
    <HeroContainer>
      <TitleContainer>
        <HeroTitle>{getTitlePrefix(props.type)}{props.title}</HeroTitle>
        {props.subTitle && <HeroSubTitle>{props.subTitle}</HeroSubTitle>}
      </TitleContainer>
    </HeroContainer>
  )
}

export default Hero
