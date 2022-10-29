import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';



export default function Home({allPostsData}) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Self-taught front-end web developer, at the eternal beggining of his Journey.<br/>
          You can contact me on social media; either <a target='_blank' rel='noreferrer' href='https://www.facebook.com/alfonzo.raul/'>Facebook</a>
          , <a target='_blank' rel='noreferrer' href='https://twitter.com/RaulAlfonzoUs'>Twitter</a> or <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/raulalfonzorondon/'>LinkedIn</a>
        </p>
        <ul className={utilStyles.list}>
          
          {allPostsData.map(({id,date,title})=>(
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}<br/>
              </Link>
              {id}<br/>
              <Date dateString={date} />
            </li>
          ))}

        </ul>
      </section>
    </Layout>
  );
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}