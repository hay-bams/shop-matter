import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import { connectDb } from './Models/Index';
import Models from './Models/Index';
import Controllers from './Controllers/Index';
import Services from './Services/Index';
import Middleware from './Middleware/Index'

const Container = require('typedi').Container;

dotenv.config();

const app = express();

app.use(cors())

const registerDependency = () => {
  Container.set('Models', Models)
  Container.set('userService', new Services.UserService(Models.User));
  Container.set('customerService', new Services.CustomerService(Models.Customer));
  Container.set('userController', new Controllers.UserController(Container));
  Container.set('customerController', new Controllers.CustomerController(Container));
  Container.set('middleware', Middleware())
};

const registerMiddleware = () => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  const router = require('./Routes/Index').default;
  app.use(router);
};

connectDb().then(() => {
  console.log('Database connected');
});

registerDependency();
registerMiddleware();

app.get('/', function (req, res) {
  return res.send('Shop Matter API');
});

app.listen(process.env.PORT, function () {
  console.log(`server is listening on port ${process.env.PORT}`);
});
