module.exports = {
    ...require('./production'),
    server: {
        port: 666, 
    },
    db:{
        connectionString: ''
    }
}