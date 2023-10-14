import jwt from 'jsonwebtoken';
import { badResponse, notAuth } from './handle_error';

const verityToken = (req, res, next) => {

    const token = req.headers.authorization;

    if(!token) return badResponse('Require authorization', res);

    const accessToken = token.split(' ')[1];

    jwt.verify( accessToken, 
                process.env.JWT_SECRET, 
                (err, user) => {
                    if(err) return notAuth('Access Token may be expired or invalid', res);
                    req.user = user;
                    next()

    } ) 
}

export default verityToken;