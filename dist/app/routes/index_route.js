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
const exam_route_1 = require("../modules/exam/exam.route");
const route_fileUploade_1 = require("../modules/fileUploade/route.fileUploade");
const meeting_route_1 = require("../modules/meeting/meeting.route");
const newExpense_route_1 = require("../modules/new_expense/newExpense.route");
const newIncome_route_1 = require("../modules/new_income/newIncome.route");
const route_notices_1 = require("../modules/notices/route.notices");
const onlineAssignment_route_1 = require("../modules/online_assingment/onlineAssignment.route");
const section_route_1 = require("../modules/section/section.route");
const classRoutine_route_1 = require("../modules/class-routine/classRoutine.route");
const route_student_1 = require("../modules/student/pendingStudent/route.student");
const route_student_2 = require("../modules/student/route.student");
const route_students_attendance_1 = require("../modules/students_attendance/route.students_attendance");
const route_teacher_1 = require("../modules/teacher/route.teacher");
const route_teachers_attendance_1 = require("../modules/teachers_attendance/route.teachers_attendance");
const user_route_1 = require("../modules/users/user.route");
const workPlan_route_1 = require("../modules/work-plan/workPlan.route");
//https://docs.google.com/document/d/1gTsTpFvhfZB-2y0_BbZQVzmbG3YwsZwPrwAbsYqpOzM/edit
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        //sampod
        path: '/students',
        route: route_student_2.StudentRoutes,
    },
    {
        //sampod
        path: '/pending-students',
        route: route_student_1.PendingStudentRoutes,
    },
    {
        //sampod
        path: '/teachers',
        route: route_teacher_1.TeacherRoutes,
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
        path: '/online_assignments',
        route: onlineAssignment_route_1.OnlineAssignmentRoutes,
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
        path: '/work_plan',
        route: workPlan_route_1.WorkPlanRoute,
    },
    {
        path: '/events',
        route: event_route_1.EventsRoute,
    },
    {
        path: '/exam',
        route: exam_route_1.ExamRoutes,
    },
    {
        path: '/class_routine',
        route: classRoutine_route_1.ClassRoutineRoutes,
    },
    {
        //sampod nath
        path: '/notices',
        route: route_notices_1.NoticeRoutes,
    },
    {
        //sampod nath
        path: '/student-attendance',
        route: route_students_attendance_1.StudentsAttendanceRoutes,
    },
    {
        //sampod nath
        path: '/teacher-attendance',
        route: route_teachers_attendance_1.TeachersAttendanceRoutes,
    },
    {
        path: '/meeting',
        route: meeting_route_1.MeetingRoutes,
    },
    {
        //sampod
        path: '/upload',
        route: route_fileUploade_1.FileUploadeRoute,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
