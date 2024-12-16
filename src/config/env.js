// require('dotenv').config() //--------forma antigua
// const { get } = require('env-var'); //-------forma antigua

import env from 'dotenv'
import envvar from 'env-var'

env.config() //--------forma moderna

export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

// module.exports= { --------- forma antigua
//     envs --------- forma antigua
