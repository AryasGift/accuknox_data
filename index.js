const json_server=require('json-server')
const middleware=json_server.defaults()
const dashboard_server=json_server.create()
const router=json_server.router('data.json')
const cors=require('cors')
dashboard_server.use(cors())
dashboard_server.use(middleware)
dashboard_server.use(router)
const port=7000
dashboard_server.listen(port,()=>{
    console.log(`The server started at ${port}`);
    
})