 import {articles} from '../../../data'

 export default function handler(req,res) {
     console.log(articles, 'artlica')
     res.status(200).json(articles)
 }