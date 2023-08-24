"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    bookName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        required: true,
    },
    bookType: {
        type: String,
        enum: ['A', 'B'],
        required: true,
    },
    bookCode: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});
exports.BookModel = (0, mongoose_1.model)('Book', bookSchema);
// export const UserSchema = new Schema<IUser, UserModel>(
//   {
//     userId: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     name: {
//       firstName: {
//         type: String,
//         required: true,
//       },
//       lastName: {
//         type: String,
//         required: true,
//       },
//     },
//     role: {
//       type: String,
//       required: true,
//     },
//     phoneNumber: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
// UserSchema.statics.isUserExist = async function (
//   userId: string
// ): Promise<Pick<
//   IUser,
//   'email' | 'name' | 'phoneNumber' | 'password' | 'role' | 'userId'
// > | null> {
//   return await User.findOne(
//     { userId },
//     { phoneNumber: 1, password: 1, role: 1, userId: 1 }
//   );
// };
// UserSchema.statics.isPasswordMatched = async function (
//   givenPassword: string,
//   savedPassword: string
// ): Promise<boolean> {
//   return await bcrypt.compare(givenPassword, savedPassword);
// };
// // User.create() / user.save()
// UserSchema.pre('save', async function (next) {
//   // hashing user password
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this;
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bycrypt_salt_rounds)
//   );
//   next();
// });
// export const User = model<IUser, UserModel>('User', UserSchema);
