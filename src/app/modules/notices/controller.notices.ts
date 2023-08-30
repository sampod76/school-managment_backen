import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { PAGINATION_FIELDS } from '../../../constant/pagination';
import catchAsync from '../../share/catchAsync';
import pick from '../../share/pick';
import sendResponse from '../../share/sendResponse';
import { noticeFilterableFields } from './constant.notices';

import { INotice } from './interface.notices';
import { NoticeService } from './service.notices';

const getAllNotices = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, noticeFilterableFields);
  const paginationOptions = pick(req.query, PAGINATION_FIELDS);

  const result = await NoticeService.getAllNoticesFromDb(
    filter,
    paginationOptions
  );
  sendResponse<INotice[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Notices retrieved successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const createSingleNotice = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await NoticeService.createSingleNoticeFromDb(req.body);
  sendResponse<INotice>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Notice create successfully !',
    data: result,
  });
});
const getSingleNotice = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await NoticeService.getSingleNoticeFromDb(id);

  sendResponse<INotice>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Notice retrieved successfully !',
    data: result,
  });
});

const updateNotice = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await NoticeService.updateNoticeFromDb(id, updatedData);

  sendResponse<INotice>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Notice updated successfully !',
    data: result,
  });
});



const deleteNotice = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await NoticeService.deleteNoticeFromDb(id);

  sendResponse<INotice>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Notice deleted successfully !',
    data: result,
  });
});

export const NoticeController = {
  getAllNotices,
  getSingleNotice,
  updateNotice,
  deleteNotice,
  createSingleNotice,

};
