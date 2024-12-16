
// const { envs } = require('./config/env') // ----------- (forma antigua)
import { envs } from './config/env.js'

// const { startServer } = require('./server/server') // ---------(forma antigua)
import { startServer } from './server/server.js'

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}


// funcion agnostica autoconvocada
// Agnostica porque no tiene nombre
// Autoconvocada porque la ejecutamos con los parentesis
( async () => {
    main()
})()