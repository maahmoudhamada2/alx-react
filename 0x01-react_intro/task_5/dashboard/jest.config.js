module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
    moduleNameMapper: {
        '\\.(css|png|jpg)$': "<rootDir>/config/ignoreCSS.js"
    }
}