import { server } from '../config'
import Articlelist from '../components/ArticleList'

export default function Home({articles}) {
  return (
    
    <div>
      <Articlelist articles={articles} />
    </div>
  )
}

//Data Fetching
// getstaticprops - fetch at build time
// getserversideprops - fetch on every request
// getstaticpaths - dynamically generate paths based on data being fetched
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: { // wrap your data in props object
      articles
    }
  }
}