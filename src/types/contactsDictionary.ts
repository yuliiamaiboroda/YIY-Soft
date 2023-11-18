export interface IContactsDictionary {
  contacts: {
    title: string;
  };
  contactForm: {
    title: string;
    nameField: {
      placeholder: string;
      required: string;
      minLength: string;
    };
    emailField: {
      placeholder: string;
      required: string;
      pattern: string;
    };
    messageField: {
      placeholder: string;
      required: string;
      minLength: string;
      maxLength: string;
    };
    submitButton: string;
  };
}
