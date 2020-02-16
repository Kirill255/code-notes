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
      { text: 'Tags', link: '/tags/' },
      // TODO: не работает !!!
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      // { text: 'Google', link: 'https://google.com' }, // external source
      // { text: 'RSS Feed', link: '/rss.xml' } // TODO: не работает вроде, и нужно значком сделать, а не надписью ???
    ],
    // logo: '/logo.png', // TODO: не работает лого?
    frontmatters: [
      { id: 'tag', keys: ['tag', 'tags'], path: '/tags/' }
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        { type: 'github', link: 'https://github.com/Kirill255' },
        { type: 'gitlab', link: 'https://gitlab.com/Kirill255' },
        { type: 'mail', link: 'mailto:code-notes@mail.ru' }
      ],
      copyright: [
        { text: 'Privacy Policy', link: 'https://policies.google.com/privacy?hl=en-US' },
        { text: 'MIT Licensed', link: '' },
        { text: 'Copyright © 2020', link: '' }
      ]
    },
    // TODO: hostname plugins comment не работает сейчас ???
    // hostname: 'http://localhost', // кажется нужен адрес уже задеплоиного сайта
    plugins: {},
    comment: {
      service: "disqus", // <Disqus/>
      shortname: "code-notes-comments", // https://help.disqus.com/en/articles/1717111-what-s-a-shortname нужно создать приложение, план выбирать не обязательно
    }
  }
}
