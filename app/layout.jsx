import { Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import 'nextra-theme-docs/style.css'

export default async function RootLayout({ children, params }) {
  const { lang } = await params

  const navbar = (
    <Navbar
      logo={
          <span style={{fontSize: "1.6rem"}}><b>Sicilian</b></span>
      }
      logoLink="/"
      projectLink="https://github.com/ayden94/sicilian"
    />
  )

  return (
    <html
    lang={lang}
    dir="ltr"
    suppressHydrationWarning
  >
    <Head></Head>
    <body>
    <Layout
          navbar={navbar}
          pageMap={
            [
              { "data": {} },
              {
                // content/index.mdx
                "name": "intro",
                "route": "/",
                "title": "Introduce the sicilian",
                "frontMatter": {}
              },
              {
                "name": "tutorials",
                "title": "Tutorials",
                "route": "/tutorial",
              },
              {
                "name": "guides",
                "title": "Guides",
                "route": null,
                "children": [
                  {
                    "name": "create a formController",
                    "route": "/guides/create-a-form-controller",
                    "title": "Create a formController",
                    "frontMatter": {}
                  },
                  {
                    "name": "tools of the formController",
                    "route": "/guides/tools-of-the-form-controller",
                    "title": "Tools of the formController",
                    "frontMatter": {}
                  },
                  {
                    "name": "resolver and validator",
                    "route": "/guides/resolver-and-validator",
                    "title": "Resolver and Validator",
                    "frontMatter": {}
                  },
                  {
                    "name": "sicilian-provider",
                    "route": "/guides/sicilian-provider",
                    "title": "Sicilian Provider",
                    "frontMatter": {}
                  },
                  {
                    "name": "in app router",
                    "route": "/guides/in-app-router",
                    "title": "In App Router",
                    "frontMatter": {}
                  }
                ]
              },
            ]
          }
          i18n={[
            { locale: 'en', name: 'English' }, 
            { locale: 'ko', name: '한국어' }
          ]}
          docsRepositoryBase="https://github.com/ayden94/sicilian"
          search={<Search placeholder="Search..." />}
          editLink={null}
          feedback={
            {content: null}
          }
        >
          {children}
        </Layout>
    </body>
    </html>
  )
}
