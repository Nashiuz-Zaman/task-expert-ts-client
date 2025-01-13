export const checkAuth = async (cookies: string) => {
  const res = await fetch("http://localhost:5000/api/v1/app-init", {
    headers: {
      Cookie: cookies,
    },
    credentials: "include",
  });

  const data = await res.json();

  console.log(data);
  return data;
};
