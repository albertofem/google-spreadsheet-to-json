var gsjson = require('./index')

gsjson({
    spreadsheetId: '',
    apiKey: ''
    // or
    client_email: "",
    private_key: ""
})
.then(function(res) {
    console.log(res)
    console.log(res.length)
})
.catch(function(err) {
    console.log(err.stack)
})
