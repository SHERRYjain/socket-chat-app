const generateMessage = (id,username,text) => {
    return {
        id,
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generateLocationMessage = (id,username, url) => {
    return {
        id,
        username,
        url: url,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}