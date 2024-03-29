/* eslint-disable no-undef */
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { PAGINATION_FIELDS } from '../../../constant/pagination';
// import { globalImport } from '../../../import/global_Import';
// import ApiError from '../../errors/ApiError';
import catchAsync from '../../share/catchAsync';
import pick from '../../share/pick';
import sendResponse from '../../share/sendResponse';

import { FILEUPLOADE_FILTERABLE_FIELDS } from './consent.fileUploade';
import { IFileUploade } from './interface.fileUploade';
import { FileUploadeService } from './service.fileUploade';

// ! ********** file upload server **********
// import { z } from 'zod'
const uploadeSingleFileByServer = catchAsync(
  async (req: Request, res: Response) => {
    const fileDetails = req.file;
    const file = {
      filename: fileDetails?.filename as string,
      mimetype: fileDetails?.mimetype,
      destination: fileDetails?.destination,
      path: `uploadFile/images`,
      size: fileDetails?.size,
    };
    const result = await FileUploadeService.createFileUploadeByDb(file);
    sendResponse<any>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'successfull uploade single file',
      data: result,
    });
  }
);

const uploadeProfileFileByServer = catchAsync(
  async (req: Request, res: Response) => {
    const fileDetails = req.file;
    const file = {
      filename: fileDetails?.filename as string,
      mimetype: fileDetails?.mimetype,
      destination: fileDetails?.destination,
      path: 'uploadFile/profile',
      size: fileDetails?.size,
    };

    const result = await FileUploadeService.createFileUploadeByDb(file);
    sendResponse<any>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'successfull uploade single file',
      data: result,
    });
  }
);

const uploadeMultipalFileByServer = catchAsync(
  async (req: Request, res: Response) => {
    const files = req.files as Express.Multer.File[];
    const filesDetailes = files?.map(value => ({
      filename: value?.filename,
      mimetype: value?.mimetype,
      destination: value?.destination,
      path: 'uploadFile/images',
      size: value?.size,
    }));
    console.log(68,filesDetailes)
    const result = await FileUploadeService.createMultipalFileUploadeByDb(
      filesDetailes
    );
    console.log(68,result)
    sendResponse<any>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'successfull uploade multipal file',
      data: result,
    });
  }
);
const uploadePdfFileByServer = catchAsync(
  async (req: Request, res: Response) => {
    const fileDetails = req.file;
    const file = {
      filename: fileDetails?.filename as string,
      mimetype: fileDetails?.mimetype,
      destination: fileDetails?.destination,
      path: 'uploadFile/pdfs',
      size: fileDetails?.size,
    };

    const result = await FileUploadeService.createFileUploadeByDb(file);
    sendResponse<any>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'successfull uploade single file',
      data: result,
    });
  }
);

// ! ********** file upload server --end ***************

const createFileUploade = catchAsync(async (req: Request, res: Response) => {
  const { ...FileUploadeData } = req.body;
  req.body.userId = req?.user?._id;
  const result = await FileUploadeService.createFileUploadeByDb(
    FileUploadeData
  );

  sendResponse<IFileUploade>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'successfull create FileUploade',
    data: result,
  });
  // next();
  /* res.status(200).send({
      success: true,
      data: result,
      message: 'successfull create FileUploade FileUploade',
    }); */
});

const getAllFileUploade = catchAsync(async (req: Request, res: Response) => {
  //****************search and filter start******* */
  let queryObject = req.query;
  queryObject = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(queryObject).filter(([_, value]) => Boolean(value))
  );
  const filters = pick(queryObject, FILEUPLOADE_FILTERABLE_FIELDS);

  //****************pagination start************ */

  const paginationOptions = pick(queryObject, PAGINATION_FIELDS);

  const result = await FileUploadeService.getAllFileUploadeFromDb(
    filters,
    paginationOptions
  );

  sendResponse<IFileUploade[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'successfull Get FileUploade FileUploade',
    meta: result.meta,
    data: result.data,
  });
  // next();
});

const getSingleFileUploade = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  /*   if (!globalImport.ObjectId.isValid(id)) {
      throw new ApiError(400, 'invalid id sampod');
    } */

  const result = await FileUploadeService.getSingleFileUploadeFromDb(id);

  /* if (!result) {
      throw new ApiError(400, 'No data found');
    } */
  sendResponse<IFileUploade>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'successfull get FileUploade FileUploade',
    data: result,
  });
});
const updateFileUploade = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  /*   if (!globalImport.ObjectId.isValid(id)) {
      throw new ApiError(400, 'invalid id sampod');
    } */

  const result = await FileUploadeService.updateFileUploadeFromDb(
    id,
    updateData
  );

  /* if (!result) {
      throw new ApiError(400, 'No data found');
    } */
  sendResponse<IFileUploade>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'successfull update FileUploade FileUploade',
    data: result,
  });
});

const deleteFileUploade = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FileUploadeService.deleteFileUploadeByIdFromDb(id);
  sendResponse<IFileUploade>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'successfull delete FileUploade FileUploade',
    data: result,
  });
});
export const FileUploadeController = {
  createFileUploade,
  getAllFileUploade,
  getSingleFileUploade,
  updateFileUploade,
  deleteFileUploade,
  uploadeSingleFileByServer,
  uploadeProfileFileByServer,
  uploadeMultipalFileByServer,
  uploadePdfFileByServer
};
