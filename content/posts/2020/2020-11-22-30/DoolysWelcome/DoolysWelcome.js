import React from "react"
import { Welcome } from "./CONST.js"
import BuildMeme from "./BuildMeme"

const DoolysWelcome = props => {
	return (
		<div className="row memeContainer">
			<BuildMeme actorConst={Welcome} />
		</div>
	)
}

export default DoolysWelcome

// import React, { useRef } from "react"
// import "./style.scss"
// import bg_01 from "./bg_1.png"
// import { Welcome } from "./CONST.js"
// import { twoLineText } from "./TwoLineText.js"
// import { threeLineText } from "./ThreeLineText.js"

// const DoolysWelcome = props => {
// 	const filename = "doolys-welcome.png"
// 	const [msgStranger, setMsgStranger] = React.useState("어이 자바스크립트")
// 	const [msgDooly, setMsgDooly] = React.useState("NaN 어서오고")

// 	const canvasRef = useRef()
// 	const inputStrageRef = useRef()
// 	const inputDoolyRef = useRef()
// 	const downAnchorRef = useRef()

// 	React.useEffect(() => {
// 		updateCanvas()
// 		inputStrageRef.current.value = msgStranger
// 		inputDoolyRef.current.value = msgDooly
// 		inputStrageRef.current.addEventListener("keyup", onKeyUp)
// 		inputDoolyRef.current.addEventListener("keyup", onKeyUp)

// 		return () => {
// 			inputStrageRef.current.removeEventListener("keyup", onKeyUp)
// 			inputDoolyRef.current.removeEventListener("keyup", onKeyUp)
// 		}
// 	}, [])

// 	const onKeyUp = e => {
// 		console.log(e.target.id, e.target.value)

// 		e.target.name === "msgStranger"
// 			? setMsgStranger(e.target.value)
// 			: setMsgDooly(e.target.value)

// 		const items = [
// 			...twoLineText(msgStranger, Welcome.presets.twoLineConst),
// 			...threeLineText(msgDooly, Welcome.presets.threeLineConst),
// 		]
// 		const canvas = canvasRef.current

// 		var bgImage = new Image()
// 		bgImage.src = bg_01

// 		drawPreviewImage(canvas, bgImage, items)
// 	}

// 	const drawPreviewImage = (canvaspreview, bgImage, items) => {
// 		const ctx = canvaspreview.getContext("2d")
// 		ctx.drawImage(bgImage, 0, 0)
// 		items.forEach(v => {
// 			drawTextWithPostion(ctx, v.text, v.pos)
// 		})
// 	}

// 	const drawTextWithPostion = (ctx, text, position) => {
// 		ctx.font = "20pt 'Dotum'"
// 		ctx.lineWidth = 2
// 		ctx.fillStyle = "#313131"
// 		ctx.fillText(text, position.x, position.y)
// 	}

// 	const updateCanvas = () => {
// 		const canvas = canvasRef.current
// 		const ctx = canvas.getContext("2d")

// 		const items = [
// 			...twoLineText(msgStranger, Welcome.presets.twoLineConst),
// 			...threeLineText(msgDooly, Welcome.presets.threeLineConst),
// 		]

// 		var bgImage = new Image()
// 		bgImage.src = bg_01
// 		bgImage.onload = function () {
// 			ctx.drawImage(bgImage, 0, 0)
// 			items.forEach(v => {
// 				ctx.font = "20pt 'Dotum'"
// 				ctx.lineWidth = 2
// 				ctx.fillStyle = "#313131"
// 				ctx.fillText(v.text, v.pos.x, v.pos.y)
// 			})
// 		}
// 	}

// 	const download = () => {
// 		const canvas = canvasRef.current
// 		const link = downAnchorRef.current
// 		link.download = filename
// 		link.href = canvas.toDataURL("image/png")
// 		link.click()

// 		sendDownloadLog()
// 	}

// 	const sendDownloadLog = () => {
// 		console.log("sendDownloadLog..!")
// 	}

// 	return (
// 		<div className="row memeContainer">
// 			<a ref={downAnchorRef} hidden></a>
// 			<div className="row">
// 				<div className="row">
// 					<input
// 						type="text"
// 						name="msgStranger"
// 						ref={inputStrageRef}
// 						placeholder="어이 둘리."
// 						onKeyUp={onKeyUp}
// 						id="inputWelcomeStranger"
// 						maxlength="12"
// 					/>
// 				</div>
// 				<div className="row">
// 					<input
// 						type="text"
// 						name="msgDooly"
// 						ref={inputDoolyRef}
// 						placeholder="도우너 어서오고."
// 						onKeyUp={onKeyUp}
// 						id="inputWelcomeDooly"
// 						maxlength="23"
// 					/>
// 				</div>
// 			</div>

// 			<div className="row text-right">
// 				<button id="btnDownloadWelcome" onClick={download}>
// 					짤 저장
// 				</button>
// 			</div>

// 			<div className="row text-center memePreview">
// 				<canvas
// 					id="canvasWelcome"
// 					ref={canvasRef}
// 					width="519"
// 					height="606"
// 				></canvas>
// 			</div>
// 		</div>
// 	)
// }

// export default DoolysWelcome
