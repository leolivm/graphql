import { prisma } from './database'

const Student = {
  id: (parent, args, context, info) => parent.id,
  email: parent => parent.email,
  fullName: parent => parent.fullName,
  dept: parent => parent.dept,
  enrolled: parent => parent.enrolled,
}

const Query = {
  enrollment: (parent, args) => {
    return prisma.student.findMany({
      where: { enrolled: true },
    })
  },
  student: (parent, args) => {
    return prisma.student.findFirst({
      where: { id: Number(args.id) },
    })
  },
  students: (parent, args) => {
    return prisma.student.findMany({})
  },
}

const Mutation = {
  registerStudent: (parent, args) => {
    return prisma.student.create({
      data: {
        email: args.email,
        fullName: args.fullName,
      },
    })
  },
  enroll: (parent, args) => {
    return prisma.student.update({
      where: {
        id: Number(args.id),
      },
      data: {
        dept: args.dept,
        enrolled: true,
      },
    })
  },
}

const resolvers = { Query, Mutation, Student }

export { resolvers }
