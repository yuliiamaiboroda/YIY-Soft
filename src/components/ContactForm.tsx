'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

interface IInputs {
  name: string;
  email: string;
  message: string;
}

interface IProps {}

export default function ContactForm({}: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>();
  const onSubmit: SubmitHandler<IInputs> = data => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 text-primary"
    >
      <input
        {...register('name', {
          required: { value: true, message: 'Required field' },
          minLength: { value: 4, message: 'Too short' },
        })}
        type="text"
        placeholder="Name"
      />
      <p className="text-secondary">{errors.name?.message}</p>
      <input
        {...register('email', {
          required: { value: true, message: 'Required field' },
          pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' },
        })}
        type="email"
        placeholder="Email"
      />
      <p className="text-secondary">{errors.email?.message}</p>
      <textarea
        {...register('message', {
          required: { value: true, message: 'Required field' },
          minLength: { value: 10, message: 'Too short' },
          maxLength: { value: 200, message: 'Too long' },
        })}
        rows={5}
        className="resize-none"
        placeholder="Message"
      />
      <p className="text-secondary">{errors.message?.message}</p>
      <button
        type="submit"
        className="rounded border-2 px-8 py-4 text-secondary"
      >
        Send
      </button>
    </form>
  );
}
