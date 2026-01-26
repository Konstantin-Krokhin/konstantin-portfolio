"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().email('Invalid email'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm({ cardClassName }: { cardClassName: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
	resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('name')} placeholder="Name" className={`${cardClassName} w-full`} />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      <input {...register('email')} type="email" placeholder="Email" className={`${cardClassName} w-full`} />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      <textarea {...register('message')} placeholder="Message" rows={4} className={`${cardClassName} w-full`} />
      {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      <button type="submit" disabled={status === 'loading'} className={`${cardClassName} w-full hover:bg-zinc-800`}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p className="text-green-500">Message sent!</p>}
      {status === 'error' && <p className="text-red-500">Error sending message.</p>}
    </form>
    );
}