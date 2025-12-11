import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'



const connectionString = `${process.env.DATABASE_URL}`
declare global {
  var prisma: PrismaClient | undefined;
}
const adapter = new PrismaPg({ connectionString })
export const db = globalThis.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
