import { model, models, Schema } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: URL;
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
  secureUrl: { type: URL, require: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { types: Number },
  color: { types: String },
  prompt: { types: String },
  author: { types: Schema.Types.ObjectId, ref: "User" },
  createdAt: { types: Date, default: Date.now() },
  updatedAt: { types: Date, default: Date.now() },
});

const Image = models?.Image || model("Image", imageScheme);

export default Image;
