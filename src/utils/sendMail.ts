import type { IContactFormData } from '@/types';
import { Notify } from 'notiflix';

export const sendMail = async (data: IContactFormData) => {
  // const apiEndpoint = 'api/email';

  // fetch(apiEndpoint, {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  // })
  //   .then(res => res.json())
  //   .then(response => {
  //     Notify.success(response.message);
  //   })
  //   .catch(err => {
  //     Notify.failure(err);
  //   });

  console.log(data);
  Notify.info('Turn on nodemailer!');
};
