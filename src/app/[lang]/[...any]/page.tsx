'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

interface IProps {}

export default function Page({}: IProps) {
  useEffect(() => {
    redirect('/');
  }, []);
  return <div>page</div>;
}
