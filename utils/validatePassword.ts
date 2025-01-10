export const validatePassword = (password: string): string[] => {
  const passwordErrors = [];
  const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/;

  if (password.length < 6) {
    passwordErrors.push("Passwords must be 6 characters");
  }

  if (!regex.test(password)) {
    passwordErrors.push(
      "Passwords must contain a capital letter and a special character"
    );
  }

  return passwordErrors;
};
