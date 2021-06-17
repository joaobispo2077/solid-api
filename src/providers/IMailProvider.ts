export interface IMailAddress {
  email: string;
  name: string;
}

export interface IMessage {
  to: IMailAddress;
  from: IMailAddress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}
