export interface IContactFormData {
  email: string;
  name: string;
  message: string;
}

export const defaultContactFormData: IContactFormData = {
  email: '',
  name: '',
  message: ''
};
