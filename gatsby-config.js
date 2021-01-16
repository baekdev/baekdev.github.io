const path = require("path")
const config = require("./data/siteConfig")
const moment = require("moment-timezone")

module.exports = {
	siteMetadata: {
		title: config.siteTitle,
		author: config.authorName,
		description: config.siteDescription,
		...config,
	},
	pathPrefix: config.pathPrefix,
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: "static",
				path: path.join(__dirname, `static`),
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: "posts",
				path: "content/posts",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: "pages",
				path: "content/pages",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: "images",
				path: "content/images",
			},
		},
		{
			resolve: `gatsby-plugin-page-creator`,
			options: {
				path: path.join(__dirname, `src`, `pages`),
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				defaultLayouts: {
					default: require.resolve("./src/templates/page.js"),
				},
				gatsbyRemarkPlugins: [
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 590,
							linkImagesToOriginal: false,
							withWebp: true,
						},
					},
					{ resolve: "gatsby-remark-prismjs" },
					{ resolve: "gatsby-remark-responsive-iframe" },
					{ resolve: "gatsby-remark-copy-linked-files" },
					{ resolve: "gatsby-remark-smartypants" },
					{ resolve: "gatsby-remark-embedder" },
					{ resolve: "gatsby-remark-autolink-headers" },
					{
						resolve: "gatsby-remark-embed-gist",
						options: {
							username: config.github,
							includeDefaultCss: true,
						},
					},
				],
			},
		},
		// Reminder (https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-509405867)
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [`gatsby-remark-images`],
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-cname`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: config.googleAnalyticsId,
			},
		},
		{
			resolve: `gatsby-plugin-google-adsense`,
			options: {
				publisherId: `ca-pub-6059434733081357`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: config.siteTitle,
				short_name: config.siteTitle,
				start_url: config.pathPrefix,
				background_color: config.background_color,
				theme_color: config.theme_color,
				display: config.display,
				icon: config.icon,
			},
		},
		// https://www.gatsbyjs.org/docs/themes/converting-a-starter/#transpiling-your-theme-with-webpack
		{
			resolve: "gatsby-plugin-compile-es6-packages",
			options: {
				modules: ["gatsby-starter-morning-dew"],
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				output: `/sitemap.xml`,
				query: `
        {
          site {
            siteMetadata {
              siteUrl
              pathPrefix
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }
          `,
				resolveSiteUrl: ({ site, allSitePage }) => {
					return site.siteMetadata.siteUrl
				},
				serialize: ({ site, allSitePage }) => [
					...allSitePage.nodes.map(node => {
						return {
							url: `${site.siteMetadata.siteUrl}${node.path}`,
							changefreq: `daily`,
							priority: 1.0,
						}
					}),
					{
						url: `${site.siteMetadata.siteUrl}/doolys-welcome/`,
						changefreq: `daily`,
						priority: 1.0,
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-buildtime-timezone",
			options: {
				tz: "Asia/Seoul",
				// format: "YYYY-MM-DD hh:mm",
				format: "YYYY-MM-DDThh:mm:ss.SSSZ",
			},
		},

		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
				{
					site {
					  siteMetadata {
						title
						description
						siteUrl
						site_url: siteUrl
						author
						image_url: siteHero
						authorAvatar
						language
					  }
					  pathPrefix
					  pubDate: buildTimeZone
					}
				  }
				  
				  
			  `,
				feeds: [
					{
						serialize: ({ query: { site, allMarkdownRemark } }) => {
							return allMarkdownRemark.edges.map(edge => {
								const date = moment(edge.node.frontmatter.date)
									.tz("Asia/Seoul")
									.format()

								const imgSrcPattern = new RegExp(
									`(${site.pathPrefix})?/assets/`,
									"g"
								)

								const link =
									site.siteMetadata.siteUrl +
									site.pathPrefix +
									"/" +
									edge.node.frontmatter.slug

								return Object.assign({}, edge.node.frontmatter, {
									author: "BAEKDEV",
									description: edge.node.html.slice(0,310),
									date: edge.node.frontmatter.date,
									url: link,
									guid: link,
									custom_elements: [
										{
											"content:encoded": edge.node.html.replace(
												imgSrcPattern,
												`${site.siteMetadata.siteUrl}/assets/`
											),
										},
									],
								})
							})
						},
						query: `
						{
							allMarkdownRemark(
							  limit: 100
							  filter: {
						  fileAbsolutePath: {regex: "/content/posts/"}
						  frontmatter: {
							published: { ne: false }
						  }
						}
							  sort: { order: DESC, fields: [frontmatter___date] },
							) {
							  edges {
								node {
								  excerpt
								  html
								  frontmatter {
									title
									date
									slug
									hero
								  }
								}
							  }
							}
						  }
				  `,
						output: "/feed.xml",
						title: "아웃풋 트레이닝",
						// optional configuration to insert feed reference in pages:
						// if `string` is used, it will be used to create RegExp and then test if pathname of
						// current page satisfied this regular expression;
						// if not provided or `undefined`, all pages will have feed reference inserted
						// match: "^/post/",
						// optional configuration to specify external rss feed, such as feedburner
						// link: "https://feeds.feedburner.com/gatsby/blog",
					},
				],
			},
		},
		// {
		// 	resolve: `@darth-knoppix/gatsby-plugin-feed`,
		// 	options: {
		// 		baseUrl: `https://baek.dev`,
		// 		query: `{
		//   site {
		//     siteMetadata {
		//       title
		//       description
		//       siteUrl
		//       author
		//     }
		//     pathPrefix
		//   }
		// }`,
		// 		setup: options => {
		// 			const { pathPrefix } = options.query.site
		// 			const {
		// 				author,
		// 				description,
		// 				siteUrl,
		// 				title,
		// 			} = options.query.site.siteMetadata
		// 			const baseUrl = siteUrl + pathPrefix
		// 			const currentYear = new Date().getUTCFullYear()

		// 			return {
		// 				...options,
		// 				encoding: "utf8",
		// 				language: "ko",
		// 				id: baseUrl,
		// 				link: baseUrl,
		// 				baseUrl,
		// 				title,
		// 				description,
		// 				copyright: `All rights reserved ${currentYear}, ${author}`,
		// 				updated: moment(Date.now()).tz("Asia/Seoul").format(),
		// 				author: {
		// 					name: author,
		// 					link: "https://baek.dev/",
		// 					email: "diveintotechnology@gmail.com",
		// 				},
		// 				generator: "BAEKDEV",
		// 				image: `${baseUrl}/assets/images/basic/001.png`,
		// 				favicon: `${baseUrl}/favicon.ico`,
		// 				feedLinks: {
		// 					atom: `${baseUrl}/atom.xml`,
		// 					json: `${baseUrl}/feed.json`,
		// 					rss: `${baseUrl}/feed.xml`,
		// 				},
		// 				categories: [
		// 					"Web development",
		// 					"Software Engineer",
		// 					"Side projects",
		// 				],
		// 			}
		// 		},
		// 		feeds: [
		// 			{
		// 				query: `{
		//       allMarkdownRemark(
		//         limit: 100
		//         filter: {
		//     fileAbsolutePath: {regex: "/content/posts/"}
		//     frontmatter: {
		//       published: { ne: false }
		//     }
		//   }
		//         sort: { order: DESC, fields: [frontmatter___date] },
		//       ) {
		//         edges {
		//           node {
		//             excerpt
		//             html
		//             frontmatter {
		//               title
		//               date
		//               slug
		//               hero
		//             }
		//           }
		//         }
		//       }
		//     }`,
		// 				serialize: ({
		// 					query: {
		// 						allMarkdownRemark,
		// 						site: {
		// 							pathPrefix,
		// 							siteMetadata: { siteUrl },
		// 						},
		// 					},
		// 				}) =>
		// 					allMarkdownRemark.edges.map(({ node }) => {
		// 						// const date = new Date(Date.parse(node.frontmatter.date))
		// 						const date = moment(node.frontmatter.date)
		// 							.tz("Asia/Seoul")
		// 							.format()

		// 						const imgSrcPattern = new RegExp(
		// 							`(${pathPrefix})?/assets/`,
		// 							"g"
		// 						)

		// 						const link = siteUrl + pathPrefix + "/" + node.frontmatter.slug
		// 						let image = node.frontmatter.hero
		// 							? siteUrl + node.frontmatter.hero
		// 							: null

		// 						return {
		// 							id: link,
		// 							link,
		// 							title: node.frontmatter.title,
		// 							date,
		// 							pubDate: date,
		// 							published: date,
		// 							description: node.excerpt,
		// 							content: node.html.replace(
		// 								imgSrcPattern,
		// 								`${siteUrl}/assets/`
		// 							),
		// 							image,
		// 						}
		// 					}),
		// 				title: "아웃풋 트레이닝",
		// 			},
		// 		],
		// 	},
		// },

		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: config.siteUrl,
				sitemap: `${config.siteUrl}sitemap.xml`,
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
	],
}
