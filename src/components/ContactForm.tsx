'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { IContactFormData } from '@/types';
import ContactTitle from './ContactTitle';
import { sendMail } from '@/utils';

interface IProps {}

export default function ContactForm({}: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactFormData>();

  const onSubmit: SubmitHandler<IContactFormData> = data => {
    sendMail(data);
    reset();
  };

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
              errors.name?.message ? 'border-red-400' : 'border-secondary'
            } block w-full border-[3px] 
            border-solid px-6
            py-4 text-20 transition-colors duration-200
            placeholder:text-placeholder xl:text-24  `}
          />
          <small
            className={`${
              errors.name?.message
                ? 'opacity-1 translate-y-2'
                : 'pointer-events-none -translate-y-2 opacity-0'
            } absolute left-2 top-full z-10 
              max-w-[calc(100%-1rem)] bg-[rgba(0,5,50,0.85)] px-4
          py-2 text-red-400 transition duration-200`}
          >
            {errors.name?.message}
          </small>
        </label>
        <label className="relative mb-6">
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
            className={`${
              errors.email?.message ? 'border-red-400' : 'border-secondary'
            } block w-full border-[3px] 
            border-solid px-6
            py-4 text-20 transition-colors duration-200
            placeholder:text-placeholder xl:text-24  `}
          />
          <small
            className={`${
              errors.email?.message
                ? 'opacity-1 translate-y-2'
                : 'pointer-events-none -translate-y-2 opacity-0'
            } absolute left-2 top-full z-10 
              max-w-[calc(100%-1rem)] bg-[rgba(0,5,50,0.85)] px-4
          py-2 text-red-400 transition duration-200`}
          >
            {errors.email?.message}
          </small>
        </label>
        <label className="relative mb-8  xl:mb-10">
          <textarea
            {...register('message', {
              required: { value: true, message: 'Required field' },
              minLength: { value: 10, message: 'Too short' },
              maxLength: { value: 2000, message: 'Too long' },
            })}
            rows={5}
            placeholder="Message"
            className={`${
              errors.message?.message ? 'border-red-400' : 'border-secondary'
            } block w-full resize-none 
            border-[3px] border-solid
            px-6 py-4 text-20 transition-colors
            duration-200 placeholder:text-placeholder xl:text-24 `}
          />
          <small
            className={`${
              errors.message?.message
                ? 'opacity-1 translate-y-2'
                : 'pointer-events-none -translate-y-2 opacity-0'
            } absolute left-2 top-full z-10 
              max-w-[calc(100%-1rem)] bg-[rgba(0,5,50,0.85)] px-4
          py-2 text-red-400 transition duration-200`}
          >
            {errors.message?.message}
          </small>
        </label>
        <button
          type="submit"
          className="rounded border-[3px] border-secondary px-8 py-4 font-medium
                text-secondary transition-colors
                duration-200 hover:bg-light-accent
                active:border-active active:text-active md:text-28"
        >
          Send
        </button>
      </form>
    </div>
  );
}
