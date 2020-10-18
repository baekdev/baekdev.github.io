const path = require('path')
const config = require('./data/siteConfig')
const moment = require('moment-timezone');

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
        name: 'static',
        path: path.join(__dirname, `static`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: 'content/posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: 'content/pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: 'content/images',
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
          default: require.resolve('./src/templates/page.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          { resolve: 'gatsby-remark-prismjs' },
          { resolve: 'gatsby-remark-responsive-iframe' },
          { resolve: 'gatsby-remark-copy-linked-files' },
          { resolve: 'gatsby-remark-smartypants' },
          { resolve: 'gatsby-remark-embedder' },
          { resolve: 'gatsby-remark-autolink-headers' },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: config.github,
              includeDefaultCss: true,
            }
          }
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
        publisherId: `ca-pub-6059434733081357`
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
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-starter-morning-dew'],
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
        resolveSiteUrl: ({site, allSitePage}) => {
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 1.0,
            }
        })
      }
    },
    {
      resolve: 'gatsby-plugin-buildtime-timezone',
      options: {
        tz: 'Asia/Seoul',
        format: 'YYYY-MM-DD hh:mm',
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
              }
            }
          }
        `,
        feeds: [
          getBlogFeed({
            output: '/feed.xml',
            title: '아웃풋 트레이닝',
          }),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: config.siteUrl,
          sitemap: `${config.siteUrl}sitemap.xml`,
          policy: [{ userAgent: '*', allow: '/' }],
      }
    }
  ],
}

function getBlogFeed(overrides) {

  return {
    serialize: ({ query: { site, allMarkdownRemark } }) => {
      return allMarkdownRemark.edges.map(edge => {
        const siteUrl = site.siteMetadata.siteUrl
        const postText = `
          <div style="margin-top=55px; font-style: italic;">(This is an article posted to my blog at 아웃풋 트레이닝. You can read it online by <a href="${
            siteUrl + edge.node.frontmatter.slug
          }">clicking here</a>.)</div>
        `
        let html = edge.node.html
        // Hacky workaround for https://github.com/gaearon/overreacted.io/issues/65
        html = html
          .replace(/href="\//g, `href="${siteUrl}/`)
          .replace(/src="\//g, `src="${siteUrl}/`)
          .replace(/"\/static\//g, `"${siteUrl}/static/`)
          .replace(/,\s*\/static\//g, `,${siteUrl}/static/`)

        return Object.assign({}, edge.node.frontmatter, {
          description: edge.node.excerpt,
          date: moment(edge.node.frontmatter.date).tz("Asia/Seoul").format(),
          url: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.slug,
          guid: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.slug,
          custom_elements: [{ 'content:encoded': html + postText }],
        })
      })
    },
    query: `
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] },
          filter: {
            fileAbsolutePath: {regex: "/content/posts/"}
            frontmatter: { 
              published: { ne: false } 
            }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              html
              frontmatter {
                title
                date
                slug
              }
            }
          }
        }
      }
    `,
    ...overrides,
  }
}