'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '../ui/textarea'

const FormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Tu username debe tener al menos dos caracteres'
    })
    .refine((value) => value === value.toLowerCase(), {
      message: 'Tu username debe estar en minúsculas'
    }),
  name: z.string().min(2, {
    message: 'Tu nombre debe tener al menos dos caracteres'
  }),
  description: z.string().max(160, {
    message: 'Tu descripción no puede tener más de 160 caracteres'
  })
})

const NewAccountForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      name: '',
      description: ''
    }
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data)
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder='Walter Hartwell White' {...field} />
              </FormControl>
              <FormDescription>
                Este será tu nombre principal a mostrar
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='heisenberg' {...field} />
              </FormControl>
              <FormDescription>
                Este será tu nombre de usuario único en twitter
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Químico con un talento especial para la creación de soluciones innovadoras. Amante de la ciencia y la enseñanza. Siempre en busca de la perfección en cada proyecto.'
                  className='max-h-44 min-h-32 sm:max-h-28 sm:min-h-24'
                  maxLength={160}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Cuéntanos un poco sobre tu vida, se breve
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Listo</Button>
      </form>
    </Form>
  )
}

export default NewAccountForm
