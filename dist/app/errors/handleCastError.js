"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCastError = (error) => {
    const errors = [
        {
            path: error.path || '',
            // message: 'Invallid object id',
            message: 'ইনভেলিড অবজেক্ট আইডি',
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'ইনভেলিড অবজেক্ট আইডি',
        devMessage: 'Cast Error',
        errorMessages: errors,
    };
};
exports.default = handleCastError;
