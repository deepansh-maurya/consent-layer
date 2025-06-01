import mongoose from "mongoose"

export function connectMongo(url: string) {
  return mongoose.connect(url)
}
