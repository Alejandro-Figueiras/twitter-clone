'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useToast } from '@/hooks/use-toast'
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
import { createNewAccount } from '@/actions/accounts/new-account'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import WelcomeView from './welcome-view'

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
  const [welcomeView, setWelcomeView] = useState(false)
  const [nombre, setNombre] = useState('Panfilo')
  const [submitLoading, setSubmitLoading] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      name: '',
      description: ''
    }
  })
  const { toast } = useToast()

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    setSubmitLoading(true)
    createNewAccount({
      username: data.username,
      name: data.name,
      description: data.description
    })
      .then((result) => {
        setNombre(result.account?.name ?? 'usuario')
        setWelcomeView(true)
        console.log(result)
      })
      .catch((error) => {
        toast({
          title: JSON.stringify(error),
          variant: 'destructive'
        })
      })
      .finally(() => {
        setSubmitLoading(false)
      })
  }

  return welcomeView ? (
    <WelcomeView nombre={nombre} />
  ) : (
    <div className='p-8'>
      <h1 className='mb-8 text-2xl font-bold'>Nueva Cuenta</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full space-y-6'
        >
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
          <Button disabled={submitLoading} type='submit'>
            {submitLoading && <Loader2 className='animate-spin' />}
            Listo
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default NewAccountForm
