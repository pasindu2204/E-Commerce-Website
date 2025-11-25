import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
    try {
        const token = req.headers.token || req.headers['token'] || req.headers.authorization;
        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized access' });
        }

        // If using "Bearer <token>" in Authorization header, extract the token
        const rawToken = typeof token === 'string' && token.startsWith('Bearer ') ? token.split(' ')[1] : token;

        const decoded = jwt.verify(rawToken, process.env.JWT_SECRET);

        // decoded can be an object (common) or a primitive/string depending on how token was created
        let isAdmin = false;
        if (decoded && typeof decoded === 'object') {
            if (decoded.email && decoded.email === process.env.ADMIN_EMAIL) isAdmin = true;
            if (decoded.role && (decoded.role === 'admin' || decoded.role === 'ADMIN')) isAdmin = true;
            if (decoded.email === process.env.ADMIN_EMAIL && decoded.password === process.env.ADMIN_PASSWORD) isAdmin = true;
        } else if (typeof decoded === 'string') {
            if (decoded === (process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD)) isAdmin = true;
        }

        if (!isAdmin) {
            return res.status(401).json({ success: false, message: 'Unauthorized access' });
        }

        // Attach admin info to request for downstream handlers if needed
        req.admin = decoded;
        return next();
    } catch (error) {
        console.log('adminAuth error ->', error.message || error);
        return res.status(401).json({ success: false, message: 'Unauthorized access' });
    }
};

export default adminAuth;