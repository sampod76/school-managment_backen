import mongoose from 'mongoose';
import { IGenericErrorResponse } from '../interface/common';
import { IGenericErrorMessage } from '../interface/error';

export const handleValidationError = (
  error: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    }
  );
  const statusCode = 400;
  return {
    statusCode,
    message: 'বাধ্যতামূলক দিতে হবে এমন কিছু ফিল্ড বাদ পড়ে গেছে!',
    devMessage: 'Validation Error',
    errorMessages: errors,
  };
};
