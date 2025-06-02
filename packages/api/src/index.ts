import express from "express"
import { buildBeans, ServiceLocator } from "./infrastructure/config/service-locator";
import { adminRouter } from "./interfaces/routes/Admin";
const app = express()

const beans = buildBeans();
app.locals = beans as ServiceLocator;

app.use("api/v1",adminRouter )

app.listen("5000",()=>{
    console.log("server is running ");
})