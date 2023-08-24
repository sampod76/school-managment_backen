import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../../config';
import { IUser, UserModel } from './user.interface';

export const UserSchema = new Schema<IUser, UserModel>(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      name_bangla: {
        type: String,
        required: true,
      },
      name_english: {
        type: String,
        required: true,
      },
    },
    role: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.statics.isUserExist = async function (
  userId: string
): Promise<Pick<
  IUser,
  'email' | 'name' | 'phone_number' | 'password' | 'role' | 'userId'
> | null> {
  return await User.findOne(
    { userId },
    { phone_number: 1, password: 1, role: 1, userId: 1 }
  );
};

UserSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

// User.create() / user.save()
UserSchema.pre('save', async function (next) {
  // hashing user password
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycrypt_salt_rounds)
  );
  next();
});

export const User = model<IUser, UserModel>('User', UserSchema);
