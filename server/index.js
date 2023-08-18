import express from 'express';
import bodyParser from 'body-parser'; // parsing data comming in.
import cors from 'cors'; // cross-origin-research sharing.
import dotenv from 'dotenv'; // to access enviroment variables.
import helmet from 'helmet'; // for protecting APIs.
import morgan from 'morgan'; // for logging API calls.
import path from 'path';
import { fileURLToPath } from 'url';
import { checkLanguage } from './middlewares/checkLanguage.js';
import {
  categoriesRouter,
  homeRouter,
  productsRouter,
  contactUsRouter,
} from './routes/index.js';

/*  configuration */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' })); // allow cross-origin sharing request.
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

/* MOUNTING ROUTES */
app.use(checkLanguage);
app.use('/', homeRouter);
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);
app.use('/contactUs', contactUsRouter);
app.all('*', (req, res) => res.status(404).send({ Error: 'URL not found.' }));

const PORT = process.env.PORT || 6001;

app.listen(PORT, () => {
  console.log(`server is running on: ${PORT}...`);
});
