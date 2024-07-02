"use server"

import prisma from "@/lib/client"

export const getAllUsers = async () => {
    try{
        const users = await prisma.user.findMany()
        return users
    }catch(error: any) {
        throw new Error(error)
    }
}