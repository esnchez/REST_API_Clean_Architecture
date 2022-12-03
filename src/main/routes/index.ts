import {Router} from "express"
import {readdirSync} from "fs"

export const router = Router()
const routesPath = `${__dirname}`

const cleanRoute = (file: string): string | undefined => {
    return file.split(".").shift()
}

//function to add subrouters to our main router object dynamically  
//we can give default folder route by adding filename to use path '/'
const loadRoute = (fileName: string | undefined) => {
    import(`./${fileName}`).then((moduleRouter) => {
        router.use(`/`, moduleRouter.router)
    })
}

//routes folder reader and processer
readdirSync(routesPath).filter((file) => {
    const route = cleanRoute(file)
    if (route !== "index") {
        loadRoute(route)
    }
})


