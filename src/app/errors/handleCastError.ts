import mongoose from 'mongoose';
import { IGenericErrorMessage } from '../interface/error';

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
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

export default handleCastError;
