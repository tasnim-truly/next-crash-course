import {articles} from '../../../data'

export default function handler({query: {id}},res) {
    const filtered = articles.find(el => el.id === id)

    if (filtered) {
        res.status(200).json(filtered)
    } else {
        res.status(404).json({ message: `article with id of ${id} not found`  })
    }

}