interface Error {
  message: string;
}

const ErrorMessage: React.FC<Error> = ({ message }) => {
  return <div>{message}</div>;
};

export default ErrorMessage;
