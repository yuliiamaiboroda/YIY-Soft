'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import ContactTitle from './ContactTitle';

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
    <div>
      <ContactTitle>Write to us</ContactTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-primary"
      >
        <input
          {...register('name', {
            required: { value: true, message: 'Required field' },
            minLength: { value: 4, message: 'Too short' },
          })}
          type="text"
          placeholder="Name"
          className="mb-6 px-6 py-4 text-20"
        />
        <p className="text-secondary">{errors.name?.message}</p>
        <input
          {...register('email', {
            required: { value: true, message: 'Required field' },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email address',
            },
          })}
          type="email"
          placeholder="Email"
          className="mb-6 px-6 py-4 text-20"
        />
        <p className="text-secondary">{errors.email?.message}</p>
        <textarea
          {...register('message', {
            required: { value: true, message: 'Required field' },
            minLength: { value: 10, message: 'Too short' },
            maxLength: { value: 200, message: 'Too long' },
          })}
          rows={5}
          className="mb-8 resize-none px-6 py-4 text-20"
          placeholder="Message"
        />
        <p className="text-secondary">{errors.message?.message}</p>
        <button
          type="submit"
          className="rounded border-2 px-8 py-4 text-secondary "
        >
          Send
        </button>
      </form>
    </div>
  );
}
