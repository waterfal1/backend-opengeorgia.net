import devLogger from "./dev-logger.js";
import prodLogger from "./prod-logger.js";


let logger = null;
if (process.env.DEV_MODE === "true") {
    logger = devLogger()
} else {
    logger = prodLogger();
}

export default logger;
