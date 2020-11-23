export const Welcome = {
	source: {
		canvasId: "canvasWelcome",
		imageSrc: "bg_1.png",
		imageWidth: 519,
		imageHeight: 606,

		twoLineTextId: "inputWelcomeStranger",
		threeLineTextId: "inputWelcomeDooly",

		downladButtonId: "btnDownloadWelcome",
		filename: "doolys-welcome",
	},
	presets: {
		twoLineConst: {
			placeholder: "어이 자바스크립트",
			maxMessageLength: 12,
			lineLimtLength: {
				first: 7,
				second: 5,
			},
			positions: {
				init: {
					x: 100,
					y: 70,
				},
				firstRow: {
					x: 70,
					y: 55,
				},
				secondRow: {
					x: 70,
					y: 90,
				},
			},
			countForMove: 4,
			lineHeight: 20,
		},
		threeLineConst: {
			placeholder: "NaN 어서오고ㅋ",
			maxMessageLength: 23,
			lineLimtLength: {
				first: 6,
				second: 9,
				third: 8,
			},
			positions: {
				init: {
					x: 300,
					y: 120,
				},
				firstRow: {
					x: 270,
					y: 80,
				},
				secondRow: {
					x: 250,
					y: 120,
				},
				thirdRow: {
					x: 260,
					y: 160,
				},
			},
			countForMove: 5,
			lineHeight: 20,
		},
	},
}

export const Hoi = {
	source: {
		canvasId: "canvasHoi",
		imageSrc: "bg_2.png",
		imageWidth: 430,
		imageHeight: 542,

		twoLineTextId: "inputHoiDooly",

		downladButtonId: "btnDownloadHoi",
		filename: "doolys-hoi",
	},
	presets: {
		twoLineConst: {
			placeholder: "merge conflic 맛 좀 볼래?",
			maxMessageLength: 22,
			lineLimtLength: {
				first: 11,
				second: 11,
			},
			positions: {
				init: {
					x: 120,
					y: 100,
				},
				firstRow: {
					x: 65,
					y: 75,
				},
				secondRow: {
					x: 65,
					y: 115,
				},
			},
			countForMove: 5,
			lineHeight: 20,
		},
	},
}

export const Smoke = {
	source: {
		canvasId: "canvasSmoke",
		imageSrc: "bg_3.png",
		imageWidth: 532,
		imageHeight: 539,

		twoLineTextId: "inputSmokeStranger",
		threeLineTextId: "inputSmokeDooly",

		downladButtonId: "btnDownloadSmoke",
		filename: "doolys-smoke",
	},
	presets: {
		twoLineConst: {
			placeholder: "TDD 맛 좀 볼래?",
			maxMessageLength: 21,
			lineLimtLength: {
				first: 11,
				second: 10,
			},
			positions: {
				init: {
					x: 110,
					y: 80,
				},
				firstRow: {
					x: 60,
					y: 60,
				},
				secondRow: {
					x: 50,
					y: 100,
				},
			},
			countForMove: 5,
			lineHeight: 20,
		},
		threeLineConst: {
			placeholder: "빨간불 좋지ㅋ",
			maxMessageLength: 25,
			lineLimtLength: {
				first: 8,
				second: 9,
				third: 8,
			},
			positions: {
				init: {
					x: 340,
					y: 190,
				},
				firstRow: {
					x: 290,
					y: 155,
				},
				secondRow: {
					x: 290,
					y: 190,
				},
				thirdRow: {
					x: 290,
					y: 225,
				},
			},
			countForMove: 5,
			lineHeight: 20,
		},
	},
}

export const Over = {
	source: {
		canvasId: "canvasOver",
		imageSrc: "bg_4.png",
		imageWidth: 481,
		imageHeight: 540,

		twoLineTextId: "inputOverDooly",

		downladButtonId: "btnDownloadOver",
		filename: "doolys-over",
	},
	presets: {
		twoLineConst: {
			placeholder: "오버플로우네;;",
			maxMessageLength: 16,
			lineLimtLength: {
				first: 8,
				second: 8,
			},
			positions: {
				init: {
					x: 170,
					y: 100,
				},
				firstRow: {
					x: 130,
					y: 75,
				},
				secondRow: {
					x: 130,
					y: 115,
				},
			},
			countForMove: 5,
			lineHeight: 20,
		},
	},
}
