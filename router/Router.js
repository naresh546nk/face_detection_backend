import {addUser, userLogin, setRank , getRank,getMessage} from '../service/Service.js'

const Router=(app, parser)=>{
    const url="http://facedetection-backend5466.herokuapp.com"

    app.post("/user", addUser)
    app.post('/login', userLogin)
    app.get('/setRank', setRank)
    app.get('/getRank', getRank)
    app.get('/', getMessage)

}
export default Router;