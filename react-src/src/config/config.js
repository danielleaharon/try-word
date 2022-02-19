
// const serverPaths = 'http://127.0.0.1:8081/';
const serverPaths = 'http://danielle.local:8081/';


function getServerPath() {
    // return 'https://opium-print.herokuapp.com/';
    return serverPaths;
}

function getWordpressPath() {
const pathLocal= "http://localhost:10003/wp-json/wp/v2/"
const path= "https://www.opiumstore.co.il/wp-json/wp/v2/"

    return path;
}



module.exports = {
    getServerPath: getServerPath,
    getWordpressPath: getWordpressPath,

};