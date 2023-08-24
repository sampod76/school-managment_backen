"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { AuthRouter } from '../modules/auth/auth.route';
const auth_route_1 = require("../modules/auth/auth.route");
const route_fileUploade_1 = require("../modules/fileUploade/route.fileUploade");
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
        // only user login and refresh-token
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/upload',
        route: route_fileUploade_1.FileUploadeRoute,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
