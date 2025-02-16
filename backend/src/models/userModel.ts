import prisma from "../config/prismaClient";

export const findUserByUsername = async (username: string) => {
  return await prisma.user.findUnique({ where: { username } });
};
