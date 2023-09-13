"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (error) => {
    const statusCode = 400;
    const errors = error.issues.map((issue) => {
        return {
            path: issue === null || issue === void 0 ? void 0 : issue.path[issue.path.length - 1],
            message: issue === null || issue === void 0 ? void 0 : issue.message,
        };
    });
    return {
        statusCode,
        message: 'বাধ্যতামূলক দিতে হবে এমন কিছু ফিল্ড বাদ পড়ে গেছে',
        devMessage: 'Validation Error',
        errorMessages: errors,
    };
};
exports.default = handleZodError;
/*

errors:  [
  {
    "code": "invalid_type",
    "expected": "string",
    "received": "number",
    "path": [
      "body",
      "role"
    ],
    "message": "Expected string, received number"
  }
]

 */
