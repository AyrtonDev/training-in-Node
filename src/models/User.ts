import { Schema, model, connection } from "mongoose";

type UserType = {
  name: { firstName: string; lastName: string };
  birthYear: number;
  email: string;
  interests: string[];
};

const schema = new Schema<UserType>({
  email: { type: String, required: true },
  birthYear: { type: Number, required: true },
  interests: [String],
  name: {
    firstName: { type: String, required: true },
    lastName: String,
  },
});

const modelName: string = "User";

export default connection && connection.models[modelName]
  ? connection.models[modelName]
  : model<UserType>(modelName, schema);
