const adminAuth = (req, res, next) => {
    const token = "adminToken";
    const isAdminAuthorized = token == 'adminToken';
    if(!isAdminAuthorized) {
        res.send("Failed to authorize the request")
    } else {
        next();
    }
}

const userAuth = (req, res, next) => {
    const token = "userToken";
    const isAdminAuthorized = token == 'userToken';
    if(!isAdminAuthorized) {
        res.send("Failed to authorize the request")
    } else {
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth
}