import express from 'express';
import {logger} from '../utils';

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(express.json()); // for parsing application/json

app.get('/', async (_req, res) => {
  res.send('Hello World, this is a test!');
});

app.listen(PORT, () => logger.info(`App listening on PORT ${PORT}`));
