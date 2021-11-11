import {addUser, userLogin, setRank , getRank,getMessage} from '../service/Service.js'

const Router=(app, parser)=>{
    const url="http://facedetection-backend5466.herokuapp.com"

    app.post(url+"/user", addUser)
    app.post(url+'/login', userLogin)
    app.get(url+'/setRank', setRank)
    app.get(url+'/getRank', getRank)
    app.get('/', getMessage)

}
export default Router;