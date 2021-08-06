// import {useRouter} from 'next/router'
import { server } from '../../../config'
import Link from 'next/link';
import Meta from '../../../components/Meta'

function article ({article}) {
    console.log(article)
    // const router = useRouter()
    // const {id} = router.query

    return (
       <>
        <Meta title={article.title} />
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">Go back</Link>
       </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json();

    return {
        props: { article }
    }
}

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json();

//     return {
//         props: { article }
//     }
// }

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json();
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
            paths,
            fallback: false
    }
}

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const articles = await res.json();
//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({ params: { id: id.toString() } }))

//     return {
//             paths,
//             fallback: false
//     }
// }

export default article
