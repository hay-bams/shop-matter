import express from 'express';

const Container = require("typedi").Container;

const router = express.Router();
 
router.post('/signup', Container.get('middlewares').ensureUserDoesNotExists,  Container.get('userController').signup)

export default router;