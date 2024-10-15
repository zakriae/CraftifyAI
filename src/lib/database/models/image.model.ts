import { model, models, ObjectId, Schema } from "mongoose";

export interface IImage extends Document {
  _id: string;
  title: string;
  transformationType: string;
  publicId: string;
  secureURL: URL;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: URL;
  aspectRatio?: number;
  color?: string;
  prompt?: string;
  author: { _id: string; firstName: string; lastName: string };
  createdAt?: Date;
  updatedAt?: Date;
}

const imageScheme = new Schema({
  title: { type: String, require: true },
  transformationType: { type: String, require: true },
  publicId: { type: String, require: true },
  secureURL: { type: String, require: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: String },
  aspectRatio: { types: Number },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const Image = models?.Image || model("Image", imageScheme);

export default Image;
