import React from "react"
import { Smoke } from "./CONST.js"
import BuildMeme from "./BuildMeme"

const DoolysSmoke = props => {
	return (
		<div className="row memeContainer">
			<BuildMeme actorConst={Smoke} />
		</div>
	)
}

export default DoolysSmoke
