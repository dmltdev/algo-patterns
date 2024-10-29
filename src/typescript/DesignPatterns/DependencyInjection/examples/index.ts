/**
 * Dependency Injection Pattern
 * 
 * A design pattern where dependencies are passed into an object rather than being created inside.
 * This promotes loose coupling, easier testing, and more flexible code by allowing dependencies
 * to be swapped without changing the dependent class's code.
 */


// Interface for the dependency
interface Logger {
    log(message: string): void;
}

// Concrete implementation of the logger
class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(`[ConsoleLogger]: ${message}`);
    }
}

// Another concrete implementation
class FileLogger implements Logger {
    log(message: string): void {
        console.log(`[FileLogger]: Writing to file: ${message}`);
    }
}

// Service that depends on the logger
class UserService {
    private logger: Logger;

    // Dependency is injected through constructor
    constructor(logger: Logger) {
        this.logger = logger;
    }

    createUser(username: string): void {
        // Business logic here
        this.logger.log(`Creating new user: ${username}`);
    }
}

// Example usage
const consoleLogger = new ConsoleLogger();
const fileLogger = new FileLogger();

// Inject ConsoleLogger
const userServiceWithConsole = new UserService(consoleLogger);
userServiceWithConsole.createUser("John");

// Inject FileLogger
const userServiceWithFile = new UserService(fileLogger);
userServiceWithFile.createUser("Jane");
