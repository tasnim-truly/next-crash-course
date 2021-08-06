import ArticleItem from './ArticleItem'

import articleStyles from '../styles/Article.module.css'

export default function Articlelist({articles}) {  

    return (
        <div className={articleStyles.grid}>
        {
            articles.map((article, index) => {
                return <ArticleItem key={index} article={article} />
            })
        }   
        </div>
    )
}
