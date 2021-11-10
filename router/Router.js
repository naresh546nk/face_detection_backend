import {addUser, userLogin, setRank , getRank} from '../service/Service.js'

const Router=(app, parser)=>{

    app.post("/user", addUser)
    app.post('/login', userLogin)
    app.get('/setRank', setRank)
    app.get('/getRank', getRank)

}
export default Router;