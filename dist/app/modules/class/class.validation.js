"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassValidation = void 0;
const zod_1 = require("zod");
const createClassZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        className: zod_1.z.string({
            required_error: 'className is required',
        }),
        status: zod_1.z.enum(['active', 'inactive'], {
            required_error: 'status is required',
        }),
        // section: z.array(
        //   z.string({
        //     required_error: 'Section ID is required',
        //   })
        // ),
    }),
});
// const updateCowZodSchema = z.object({
//   body: z.object({
//     name: z.string({}).optional(),
//     age: z.number({}).optional(),
//     price: z.number({}).optional(),
//     location: z.enum([...ICities] as [string, ...string[]], {}).optional(),
//     breed: z.enum([...ICattleBreeds] as [string, ...string[]], {}).optional(),
//     weight: z.number({}).optional(),
//     label: z.enum([...ICowLebel] as [string, ...string[]], {}).optional(),
//     category: z.enum([...ICowCategory] as [string, ...string[]], {}).optional(),
//     seller: z.string({}).optional(),
//   }),
// });
exports.ClassValidation = {
    createClassZodSchema,
    //   updateCowZodSchema,
};
