import mongoose from "mongoose"

export async function connectMongo(url: string) {
  return  await mongoose.connect(url)
}
  