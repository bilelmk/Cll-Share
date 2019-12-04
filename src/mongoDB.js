import {connect} from 'mongoose'
connect(process.env.MONOGO_DB_ENDPOINT , {
    useNewUrlParser:true,
    useCreateIndex:true,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000})