"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultLogger = void 0;
const chalk_1 = __importDefault(require("chalk"));
const vendure_logger_1 = require("./vendure-logger");
const DEFAULT_CONTEXT = 'Vendure Server';
/**
 * @description
 * The default logger, which logs to the console (stdout) with optional timestamps. Since this logger is part of the
 * default Vendure configuration, you do not need to specify it explicitly in your server config. You would only need
 * to specify it if you wish to change the log level (which defaults to `LogLevel.Info`) or remove the timestamp.
 *
 * @example
 * ```ts
 * import { DefaultLogger, LogLevel, VendureConfig } from '\@vendure/core';
 *
 * export config: VendureConfig = {
 *     // ...
 *     logger: new DefaultLogger({ level: LogLevel.Debug, timestamp: false }),
 * }
 * ```
 *
 * @docsCategory Logger
 */
class DefaultLogger {
    constructor(options) {
        /** @internal */
        this.level = vendure_logger_1.LogLevel.Info;
        this.defaultContext = DEFAULT_CONTEXT;
        this.localeStringOptions = {
            year: '2-digit',
            hour: 'numeric',
            minute: 'numeric',
            day: 'numeric',
            month: 'numeric',
        };
        this.level = options && options.level != null ? options.level : vendure_logger_1.LogLevel.Info;
        this.timestamp = options && options.timestamp !== undefined ? options.timestamp : true;
    }
    /**
     * @description
     * A work-around to hide the info-level logs generated by Nest when bootstrapping the AppModule.
     * To be run directly before the `NestFactory.create()` call in the `bootstrap()` function.
     *
     * See https://github.com/nestjs/nest/issues/1838
     * @internal
     */
    static hideNestBoostrapLogs() {
        const { logger } = vendure_logger_1.Logger;
        if (logger instanceof DefaultLogger) {
            if (logger.level === vendure_logger_1.LogLevel.Info) {
                this.originalLogLevel = vendure_logger_1.LogLevel.Info;
                logger.level = vendure_logger_1.LogLevel.Warn;
            }
        }
    }
    /**
     * @description
     * If the log level was changed by `hideNestBoostrapLogs()`, this method will restore the
     * original log level. To be run directly after the `NestFactory.create()` call in the
     * `bootstrap()` function.
     *
     * See https://github.com/nestjs/nest/issues/1838
     * @internal
     */
    static restoreOriginalLogLevel() {
        const { logger } = vendure_logger_1.Logger;
        if (logger instanceof DefaultLogger && DefaultLogger.originalLogLevel !== undefined) {
            logger.level = DefaultLogger.originalLogLevel;
        }
    }
    setDefaultContext(defaultContext) {
        this.defaultContext = defaultContext;
    }
    error(message, context, trace) {
        if (context === 'ExceptionsHandler' && this.level < vendure_logger_1.LogLevel.Verbose) {
            // In Nest v7, there is an ExternalExceptionFilter which catches *all*
            // errors and logs them, no matter the LogLevel attached to the error.
            // This results in overly-noisy logger output (e.g. a failed login attempt
            // will log a full stack trace). This check means we only let it log if
            // we are in Verbose or Debug mode.
            return;
        }
        if (this.level >= vendure_logger_1.LogLevel.Error) {
            this.logMessage(chalk_1.default.red(`error`), chalk_1.default.red(this.ensureString(message) + (trace ? `\n${trace}` : '')), context);
        }
    }
    warn(message, context) {
        if (this.level >= vendure_logger_1.LogLevel.Warn) {
            this.logMessage(chalk_1.default.yellow(`warn`), chalk_1.default.yellow(this.ensureString(message)), context);
        }
    }
    info(message, context) {
        if (this.level >= vendure_logger_1.LogLevel.Info) {
            this.logMessage(chalk_1.default.blue(`info`), this.ensureString(message), context);
        }
    }
    verbose(message, context) {
        if (this.level >= vendure_logger_1.LogLevel.Verbose) {
            this.logMessage(chalk_1.default.magenta(`verbose`), this.ensureString(message), context);
        }
    }
    debug(message, context) {
        if (this.level >= vendure_logger_1.LogLevel.Debug) {
            this.logMessage(chalk_1.default.magenta(`debug`), this.ensureString(message), context);
        }
    }
    logMessage(prefix, message, context) {
        process.stdout.write([prefix, this.logTimestamp(), this.logContext(context), message, '\n'].join(' '));
    }
    logContext(context) {
        return chalk_1.default.cyan(`[${context || this.defaultContext}]`);
    }
    logTimestamp() {
        if (this.timestamp) {
            const timestamp = new Date(Date.now()).toLocaleString(undefined, this.localeStringOptions);
            return chalk_1.default.gray(timestamp + ' -');
        }
        else {
            return '';
        }
    }
    ensureString(message) {
        return typeof message === 'string' ? message : JSON.stringify(message, null, 2);
    }
}
exports.DefaultLogger = DefaultLogger;
//# sourceMappingURL=default-logger.js.map