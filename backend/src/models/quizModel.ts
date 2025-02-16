import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createQuiz(data: any) {
    return await prisma.quiz.create({ data });
}

export async function getAllQuizzes() {
    return await prisma.quiz.findMany();
}

export async function getQuizById(id: number) {
    return await prisma.quiz.findUnique({ where: { id } });
}

export async function updateQuiz(id: number, data: any) {
    return await prisma.quiz.update({ where: { id }, data });
}

export async function deleteQuiz(id: number) {
    return await prisma.quiz.delete({ where: { id } });
}
