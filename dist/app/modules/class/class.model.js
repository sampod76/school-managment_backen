"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const classSchema = new mongoose_1.Schema({
    className: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        required: true,
    },
    // section: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'section',
    // },
    book: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Book',
        },
    ],
}, {
    timestamps: true,
});
exports.ClassModel = (0, mongoose_1.model)('Class', classSchema);
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
