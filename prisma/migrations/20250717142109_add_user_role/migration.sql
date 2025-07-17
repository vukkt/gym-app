-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MEMBER', 'COACH', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'MEMBER';
