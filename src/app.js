import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { connectDb } from './models';
import Models from './models';
import Controllers from './controllers';
import Services from './services';
import Middlewares from './middlewares'

const Container = require('typedi').Container;

dotenv.config();

const app = express();

const registerDependency = () => {
  Container.set('Models', Models)
  Container.set('userService', new Services.UserService(Models.User));
  Container.set('userController', new Controllers.UserController(Container));
  Container.set('middlewares', Middlewares)
};

const registerMiddleware = () => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  const router = require('./routes').default;
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
