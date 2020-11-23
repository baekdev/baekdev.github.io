import React, { useRef, useEffect } from "react"
import "./style.scss"
import bg_01 from "./bg_1.png"
import bg_02 from "./bg_2.png"
import bg_03 from "./bg_3.png"
import bg_04 from "./bg_4.png"
import { twoLineText } from "./TwoLineText.js"
import { threeLineText } from "./ThreeLineText.js"

const BuildMeme = props => {
	const { actorConst } = props
	const { presets, source } = actorConst

	const [msgStranger, setMsgStranger] = React.useState(
		presets.twoLineConst.placeholder
	)
	const [msgDooly, setMsgDooly] = React.useState(
		presets.threeLineConst.placeholder
	)

	const canvasRef = useRef()
	const inputStrageRef = useRef()
	const inputDoolyRef = useRef()
	const downAnchorRef = useRef()

	useEffect(() => {
		updateCanvas()
		inputStrageRef.current.value = msgStranger
		inputDoolyRef.current.value = msgDooly
		inputStrageRef.current.addEventListener("keyup", onKeyUp)
		inputDoolyRef.current.addEventListener("keyup", onKeyUp)

		return () => {
			inputStrageRef.current.removeEventListener("keyup", onKeyUp)
			inputDoolyRef.current.removeEventListener("keyup", onKeyUp)
		}
	}, [])

	const onKeyUp = e => {
		e.target.name === source.twoLineTextId
			? setMsgStranger(e.target.value)
			: setMsgDooly(e.target.value)

		const items = [
			...twoLineText(msgStranger, presets.twoLineConst),
			...threeLineText(msgDooly, presets.threeLineConst),
		]

		const bgImage = new Image()
		bgImage.src = selectBackgroundImg(source.imageSrc)

		const canvas = canvasRef.current
		drawPreviewImage(canvas, bgImage, items)
	}

	const drawPreviewImage = (canvaspreview, bgImage, items) => {
		const ctx = canvaspreview.getContext("2d")
		ctx.drawImage(bgImage, 0, 0)
		items.forEach(v => {
			drawTextWithPostion(ctx, v.text, v.pos)
		})
	}

	const drawTextWithPostion = (ctx, text, position) => {
		ctx.font = "20pt 'Dotum'"
		ctx.lineWidth = 2
		ctx.fillStyle = "#313131"
		ctx.fillText(text, position.x, position.y)
	}

	const selectBackgroundImg = filename => {
		if (filename.indexOf("bg_1") === 0) return bg_01
		if (filename.indexOf("bg_2") === 0) return bg_02
		if (filename.indexOf("bg_3") === 0) return bg_03
		if (filename.indexOf("bg_4") === 0) return bg_04
	}

	const updateCanvas = () => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext("2d")

		const items = [
			...twoLineText(msgStranger, actorConst.presets.twoLineConst),
			...threeLineText(msgDooly, actorConst.presets.threeLineConst),
		]

		const bgImage = new Image()
		bgImage.src = selectBackgroundImg(source.imageSrc)
		bgImage.onload = function () {
			ctx.drawImage(bgImage, 0, 0)
			items.forEach(v => {
				ctx.font = "20pt 'Dotum'"
				ctx.lineWidth = 2
				ctx.fillStyle = "#313131"
				ctx.fillText(v.text, v.pos.x, v.pos.y)
			})
		}
	}

	const download = () => {
		const canvas = canvasRef.current
		const link = downAnchorRef.current
		link.download = source.filename
		link.href = canvas.toDataURL("image/png")
		link.click()

		sendDownloadLog()
	}

	const sendDownloadLog = () => {
		console.log("sendDownloadLog..!")
	}

	return (
		<React.Fragment>
			<a ref={downAnchorRef} hidden></a>
			<div className="row">
				<div className="row">
					<input
						type="text"
						name={source.twoLineTextId}
						ref={inputStrageRef}
						placeholder={presets.twoLineConst.placeholder}
						onKeyUp={onKeyUp}
						maxlength="12"
					/>
				</div>
				<div className="row">
					<input
						type="text"
						name={source.threeLineTextId}
						ref={inputDoolyRef}
						placeholder={presets.threeLineConst.placeholder}
						onKeyUp={onKeyUp}
						maxlength="23"
					/>
				</div>
			</div>

			<div className="row text-right">
				<button onClick={download}>짤 저장</button>
			</div>

			<div className="row text-center memePreview">
				<canvas
					ref={canvasRef}
					width={source.imageWidth}
					height={source.imageHeight}
				></canvas>
			</div>
		</React.Fragment>
	)
}

export default BuildMeme
