import Service from '../service/Service.js'

const Router=(app, parser)=>{

    app.post("/user", Service)

}
export default Router;