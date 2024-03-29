import mongoose, { Schema, model } from 'mongoose';
import { ISection } from './section.interface';

const sectionSchema = new Schema<ISection>(
  {
    sectionName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      required: true,
    },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'book',
    },
  },
  {
    timestamps: true,
  }
);

export const SectionModel = model<ISection>('Section', sectionSchema);

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
