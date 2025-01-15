interface IProps {
  errors: string[] | null;
}

const ErrorsBlock = ({ errors }: IProps) => {
  if (errors && Array.isArray(errors)) {
    return (
      <div className="space-y-1 mt-4">
        {errors.map((error, i) => {
          return (
            <p
              key={i}
              className="text-sm text-center font-semibold text-red-600"
            >
              * {error}
            </p>
          );
        })}
      </div>
    );
  }

  return null;
};

export default ErrorsBlock;
