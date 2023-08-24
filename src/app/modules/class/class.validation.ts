import { z } from 'zod';

const createClassZodSchema = z.object({
  body: z.object({
    className: z.string({
      required_error: 'className is required',
    }),
    status: z.enum(['active', 'inactive'], {
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

export const ClassValidation = {
  createClassZodSchema,
  //   updateCowZodSchema,
};
