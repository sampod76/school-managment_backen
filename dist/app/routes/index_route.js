"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teacherSalary_route_1 = require("../modules/Teacher_Salary/teacherSalary.route");
const workSchedule_route_1 = require("../modules/WorkSchedule/workSchedule.route");
const auth_route_1 = require("../modules/auth/auth.route");
const book_route_1 = require("../modules/book/book.route");
const class_route_1 = require("../modules/class/class.route");
const event_route_1 = require("../modules/event/event.route");
const route_fileUploade_1 = require("../modules/fileUploade/route.fileUploade");
const newExpense_route_1 = require("../modules/new_expense/newExpense.route");
const newIncome_route_1 = require("../modules/new_income/newIncome.route");
const section_route_1 = require("../modules/section/section.route");
const route_student_1 = require("../modules/student/route.student");
const user_route_1 = require("../modules/users/user.route");
//https://docs.google.com/document/d/1gTsTpFvhfZB-2y0_BbZQVzmbG3YwsZwPrwAbsYqpOzM/edit
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/students',
        route: route_student_1.StudentRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/section',
        route: section_route_1.SectionRoutes,
    },
    {
        path: '/classes',
        route: class_route_1.ClassRoutes,
    },
    {
        path: '/income',
        route: newIncome_route_1.EarningRoutes,
    },
    {
        path: '/expense',
        route: newExpense_route_1.ExpenseRoutes,
    },
    {
        path: '/books',
        route: book_route_1.BookRoutes,
    },
    {
        path: '/teacher_salary',
        route: teacherSalary_route_1.TeacherSalaryRoute,
    },
    {
        path: '/work_schedule',
        route: workSchedule_route_1.WorkScheduleRoute,
    },
    {
        path: '/events',
        route: event_route_1.EventsRoute,
    },
    {
        path: '/upload',
        route: route_fileUploade_1.FileUploadeRoute,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
