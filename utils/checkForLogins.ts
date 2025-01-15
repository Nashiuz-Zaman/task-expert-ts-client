export const checkForLogins = async (cookies: string) => {
  const res = await fetch("http://localhost:5000/api/v1//check-for-login", {
    headers: {
      Cookie: cookies,
    },
    credentials: "include",
  });

  return await res.json();
};
