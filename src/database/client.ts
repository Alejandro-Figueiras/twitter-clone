import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

const libsql = createClient({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`
})

const adapter = new PrismaLibSQL(libsql)
export const prisma = new PrismaClient({ adapter }).$extends({
  query: {
    $allModels: {
      async $allOperations({
        operation,
        args,
        query
      }: {
        operation: 'create' | 'update' | 'delete' | 'findMany' | 'findUnique'
        args: string
        query: (args: string) => Promise<string>
      }) {
        const result = await query(args)

        // Synchronize the embedded replica after any write operation
        if (['create', 'update', 'delete'].includes(operation)) {
          await libsql.sync()
        }

        return result
      }
    }
  }
})
