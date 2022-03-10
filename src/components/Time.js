import React from "react"
import styled from "styled-components"
const moment = require("moment-timezone")

const Time = props => {
	const TimeContainer = styled.time`
		color: var(--color-textSecondary);
	`
	const { date, updated } = props
	const formattingDate = moment(date).tz("Asia/Seoul").format("YYYY-MM-DD")
	const formattingUpdated = moment(updated).tz("Asia/Seoul").format("YYYY-MM-DD")

	return <TimeContainer>{formattingDate}{updated && `(Updated: ${formattingUpdated})`}</TimeContainer>
}
export default Time
