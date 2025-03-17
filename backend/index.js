//const app = require('./app');
//const config = require('./utils/config');
//const logger = require('./utils/logger');
import app from "./app.js";
import {PORT} from "./config/config.js";
import {info} from "./utils/logger.js";

app.listen(PORT, () => {
    info(`Server is running on http://localhost:${PORT}`);
    info(`Server is running on http://localhost:${PORT}/api/users`);
});