"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = void 0;
const handleValidationError = (error) => {
    const errors = Object.values(error.errors).map((el) => {
        return {
            path: el === null || el === void 0 ? void 0 : el.path,
            message: el === null || el === void 0 ? void 0 : el.message,
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: 'বাধ্যতামূলক দিতে হবে এমন কিছু ফিল্ড বাদ পড়ে গেছে!',
        devMessage: 'Validation Error',
        errorMessages: errors,
    };
};
exports.handleValidationError = handleValidationError;
