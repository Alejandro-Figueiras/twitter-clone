// eslint-disable-file no-use-before-define
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
      /* eslint-disable @typescript-eslint/no-explicit-any */
      /* eslint-disable @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      async $allOperations({
        operation,
        args,
        query
      }: {
        operation:
          | 'create'
          | 'update'
          | 'delete'
          | 'findMany'
          | 'findUnique'
          | 'findUniqueOrThrow'
          | 'findFirst'
          | 'findFirstOrThrow'
          | 'upsert'
          | 'deleteMany'
          | 'updateMany'
          | 'count'
          | 'aggregate'
          | 'groupBy'
        args: any
        query: (args: any) => Promise<any>
      }) {
        const result = await query(args)

        // Synchronize the embedded replica after any write operation
        if (['create', 'update', 'delete'].includes(operation)) {
          await libsql.sync()
        }

        return result
      }
      /* eslint-enable @typescript-eslint/ban-ts-comment */
      /* eslint-enable @typescript-eslint/no-explicit-any */
    }
  }
})
