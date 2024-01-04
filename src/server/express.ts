import env from '@/lib/env';
import routes from '@/transports/rest/routes';
import express from 'express'; 
import cors from 'cors';
import Logger from '@/lib/logger';

const app = express();

app.use(express.json()); // Enable body parsing of application/json
app.use(express.urlencoded({ extended: true })); // Enable body parsing of application/x-www-form-urlencoded
app.use(express.static('public')); // Serve public files
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
})); // Enable Cross Origin Resource Sharing for all origins by default
app.use('/api', routes); 

const port = env.PORT || 3000;
app.listen(port, () => {
  Logger.info(`Server is running on port ${port}`);
});

export default app;