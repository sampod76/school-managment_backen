/* eslint-disable @typescript-eslint/no-unused-vars */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import httpStatus from 'http-status';

import express, {
  Application,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';
// create xss-clean.d.ts file after work this xss
import path from 'path';
import xss from 'xss-clean';
const app: Application = express();
// app.use(cors());

// app.use(
//   cors({
//     origin: ['https://example.app', 'http://localhost:3000'],
//     credentials: true,
//   })
// );

app.use(cors());

//  app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", 'https://example.app')
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept")
//   next()
// })
// const allowedHeaders = [
//   'Origin',
//   'X-Requested-With',
//   'Content-Type',
//   'Accept',
//   'Authorization',
// ];

// app.use(
//   cors({
//     origin: 'https://example.app',
//     allowedHeaders: allowedHeaders,
//   })
// );

app.use(xss());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


const run: RequestHandler = (req, res, next) => {
  try {
    // jwtHelpers.verifyToken(`${req.headers.authorization}`, config.jwt.secret as string);
    // console.log('first');
    next();
  } catch (error) {
    next(error);
  }
};

app.use(
  '/images',
  run,
  express.static(path.join(__dirname, '../dist/uploadFile/images/'))
);

app.use(
  '/profile',
  run,
  express.static(path.join(__dirname, '../dist/uploadFile/profile/'))
);

app.use(
  '/videos',
  run,
  express.static(path.join(__dirname, '../dist/uploadFile/videos/'))
);
app.use(
  '/pdfs',
  run,
  express.static(path.join(__dirname, '../dist/uploadFile/pdfs/'))
);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views/success.ejs'));


import globalErrorHandler from './app/middlewares/globalErrorHandler';
// import { uploadSingleImage } from './app/middlewares/uploader.multer';
import routes from './app/routes/index_route';

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send({ message: 'server is running....' });
  } catch (error) {
    next(error);
  }
  // res.send('server is running');
});

//Application route
app.use('/api/v1', routes);

// Set the views directory and the view engine

// global error handlar
app.use(globalErrorHandler);

//handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).send({
    success: false,
    message: 'Not found route',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'api not found',
      },
    ],
  });
  next();
});

const test = async () => {
  try {
    // const result = await FileUploade.deleteMany({});
    // const result = await RunContest.find({});
    // const result5 = await Purchased_courses.deleteMany();
    // const result2 = await PhotoContestUser.deleteMany({});
    // const result2 = await RunContest.deleteMany({});
    // console.log(result2);
    // console.log(ENUM_USER_ROLE.STUDENT);
    setInterval(() => {
      console.log("object");
    },600000)
  } catch (error) {
    console.log(error);
  }
};
test();

export default app;
