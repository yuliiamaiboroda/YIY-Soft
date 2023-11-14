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
    <div className="xl:w-1/2">
      <ContactTitle>Write to us</ContactTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-primary"
      >
        <label className="relative mb-6">
          <input
            {...register('name', {
              required: { value: true, message: 'Required field' },
              minLength: { value: 4, message: 'Too short' },
            })}
            type="text"
            placeholder="Name"
            className={`${
              errors.name?.message && 'border-red-400'
            } placeholder:text-placeholder block w-full 
            border-[3px] border-solid border-transparent
            px-6 py-4 text-20 transition-colors
            duration-200 xl:text-24`}
          />
          <small
            className={`${
              errors.name?.message
                ? 'opacity-1 translate-y-2'
                : 'pointer-events-none -translate-y-2 opacity-0'
            } absolute left-2 top-full max-w-[calc(100%-1rem)] 
              bg-[rgba(0,0,0,0.85)] px-6 py-4
          text-red-400 transition duration-200`}
          >
            {errors.name?.message}
          </small>
        </label>
        <label className="mb-6">
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
            className="placeholder:text-placeholder block w-full px-6 py-4 text-20 xl:text-24"
          />
          <small className="text-secondary">{errors.email?.message}</small>
        </label>
        <label className="mb-8  xl:mb-10">
          <textarea
            {...register('message', {
              required: { value: true, message: 'Required field' },
              minLength: { value: 10, message: 'Too short' },
              maxLength: { value: 2000, message: 'Too long' },
            })}
            rows={5}
            className="placeholder:text-placeholder block w-full resize-none px-6 py-4  text-20 xl:text-24"
            placeholder="Message"
          />
          <small className="text-secondary">{errors.message?.message}</small>
        </label>
        <button
          type="submit"
          className="hover:bg-light-accent rounded border-[3px] border-secondary px-8 py-4
                    font-medium text-secondary
                    transition-colors duration-200
                    active:border-active active:text-active md:text-28"
        >
          Send
        </button>
      </form>
    </div>
  );
}
