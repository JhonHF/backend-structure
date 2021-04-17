const {createServer} = require("./server")
const {connectDb} = require("./db-connection")

const start = async () => {
    try {
       await connectDb()
       await createServer()
    } catch (error) {
        console.error("cannot run server at :3000", error)
    }
}

start();