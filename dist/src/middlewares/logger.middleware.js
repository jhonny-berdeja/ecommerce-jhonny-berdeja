"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerGlobal = loggerGlobal;
function loggerGlobal(req, res, next) {
    console.log(`Method: ${req.method} Route: ${req.url} Date: ${new Date().toString()}`);
    next();
}
//# sourceMappingURL=logger.middleware.js.map