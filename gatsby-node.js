const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const BlogPostTemplate = require.resolve('./src/templates/blog-post.js')
  const BlogPostShareImage = require.resolve('./src/templates/blog-post-share-image.js')
  const PostsBytagTemplate = require.resolve('./src/templates/tags.js')
  const AllPostsTemplate = require.resolve('./src/templates/blog-list-template.js')
  const PostsListTemplate = require.resolve('./src/templates/blog-list-posts.js')
  const TilListTemplate = require.resolve('./src/templates/blog-list-til.js')

  const allMarkdownQuery = await graphql(`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          site_url: siteUrl
        }
      }
      allMarkdown: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { ne: false } } }
        limit: 1000
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              title
              slug
              tags
              language
              hero
              date
              cover {
                publicURL
              }
              unlisted
            }
            timeToRead
            excerpt
          }
        }
      }
    }
  `)

  if (allMarkdownQuery.errors) {
    reporter.panic(allMarkdownQuery.errors)
  }

  const postPerPageQuery = await graphql(`
    {
      site {
        siteMetadata {
          postsPerPage
        }
      }
    }
  `)

  const markdownFiles = allMarkdownQuery.data.allMarkdown.edges
  const posts = markdownFiles
      .filter(item => item.node.fileAbsolutePath.includes('/content/posts/') || item.node.fileAbsolutePath.includes('/content/til/'))
      .filter(item => item.node.frontmatter.unlisted !== true)

  // generate paginated post list
  const postsPerPage = postPerPageQuery.data.site.siteMetadata.postsPerPage
  const nbPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: nbPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/pages/${i + 1}`,
      component: AllPostsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        nbPages: nbPages,
      },
    })
  })

  const blogPosts = markdownFiles
      .filter(item => item.node.fileAbsolutePath.includes('/content/posts/'))
      .filter(item => item.node.frontmatter.unlisted !== true)
  const blogPostsNbPages = Math.ceil(blogPosts.length / postsPerPage)

  Array.from({ length: blogPostsNbPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `post/` : `post/pages/${i + 1}`,
      component: PostsListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        nbPages: blogPostsNbPages,
      },
    })
  })

  createPage({
    path: `til/`,
    component: TilListTemplate,
  })

  // generate blog posts
  posts.forEach((post, index, posts) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.frontmatter.slug,
      component: BlogPostTemplate,
      context: {
        slug: post.node.frontmatter.slug,
        previous,
        next,
      },
    })

    // generate post share images (dev only)
    if (process.env.gatsby_executing_command.includes('develop')) {
      createPage({
        path: `${post.node.frontmatter.slug}/image_share`,
        component: BlogPostShareImage,
        context: {
          slug: post.node.frontmatter.slug,
          width: 440,
          height: 220,
        },
      })
    }
  })

  // generate tag page
  markdownFiles
    .filter(item => item.node.frontmatter.tags !== null)
    .reduce(
      (acc, cur) => [...new Set([...acc, ...cur.node.frontmatter.tags])],
      []
    )
    .forEach(uniqTag => {
      createPage({
        path: `tags/${uniqTag}`,
        component: PostsBytagTemplate,
        context: {
          tag: uniqTag,
        },
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  });
};
