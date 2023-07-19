import jwt from "jsonwebtoken";

const secret = "Y8bD7rK2sF9aZ1";

const authentication = async (require, response, next) => {
    try {
        const token = require.headers.authorization.split(' ')[1];
        const isCustomAuth = token.length < 500;
        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, secret);
            require.userId = decodedData?.id;

        } else {
            decodedData = jwt.decode(token);
            require.userId = decodedData?.sub;
        }

        next();

    } catch (error) {

        console.log(error);
    }
}

export default authentication;