import {addUser, userLogin} from '../service/Service.js'

const Router=(app, parser)=>{

    app.post("/user", addUser)
    app.post('/login', userLogin)

}
export default Router;