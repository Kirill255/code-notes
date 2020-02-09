module.exports = {
  title: 'Code Notes',
  description: 'The blog about JavaScript and JavaScript ecosystem and not only',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Posts', link: '/posts/' },
      { text: 'Tools', link: '/tools/' },
      { text: 'Tags', link: '/tag/' } // default route, exactly /tag/ not /tags/
      // { text: 'Google', link: 'https://google.com' }, // external source
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/Kirill255',
        },
        {
          type: 'gitlab',
          link: 'https://gitlab.com/Kirill255',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed',
          link: '',
        },
        {
          text: 'Copyright © 2020',
          link: '',
        },
      ],
    },
  },
}
