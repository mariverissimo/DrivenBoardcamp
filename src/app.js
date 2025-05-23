import express from 'express';
import routes from '../router/router.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT 

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
