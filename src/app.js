import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { connectDb } from './Models/Index';
import Models from './Models/Index';
import Controllers from './Controllers/Index';
import Services from './Services/Index';
import Middleware from './Middleware/Index'

const Container = require('typedi').Container;

dotenv.config();

const app = express();

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

const PORT = 3000;

app.get('/', function (req, res) {
  return res.send('Shop Matter API');
});

app.listen(PORT, function () {
  console.log(`server is listening on port ${PORT}`);
});
