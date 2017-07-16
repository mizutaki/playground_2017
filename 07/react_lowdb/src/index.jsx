import low from 'lowdb'
import ReactDOM from 'react-dom'
import ArticleContainer from './components/ArticleContainer'
const db = low('db.json')
db.defaults({ tasks: [], archive: [], id: 1 }).write()

ReactDOM.render(
    <ArticleContainer/>, document.querySelector('#myApp'));
