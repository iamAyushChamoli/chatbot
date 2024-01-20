import {connect, disconnect} from 'mongoose';
async function connectToDatabase() {
    try {
        await connect("mongodb+srv://root:root@cluster0.xmbpiny.mongodb.net/?retryWrites=true&w=majority");
    } catch (error) {
        console.log(error);
        throw new Error("Cannot Connect To MongoDB");
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Disconnect Failed");
    }
}

export {connectToDatabase, disconnectFromDatabase};