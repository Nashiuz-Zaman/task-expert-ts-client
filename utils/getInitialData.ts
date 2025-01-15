export const getInitialTaskData = async (cookies: string, email: string) => {
  const baseUrl = "http://localhost:5000/api/v1";

  // Define the URLs for the two fetch requests
  const pinnedTasksUrl = `${baseUrl}/pinned-tasks/${email}`;
  const tasksUrl = `${baseUrl}/tasks/${email}`;

  try {
    // Run both fetch requests in parallel
    const [pinnedTasksResponse, tasksResponse] = await Promise.all([
      fetch(pinnedTasksUrl, {
        headers: {
          Cookie: cookies,
        },
        credentials: "include",
      }),
      fetch(tasksUrl, {
        headers: {
          Cookie: cookies,
        },
        credentials: "include",
      }),
    ]);

    // Parse the responses as JSON
    const [pinnedTasksData, tasksData] = await Promise.all([
      pinnedTasksResponse.json(),
      tasksResponse.json(),
    ]);

    console.log({ pinnedTasksData, tasksData });

    return { pinnedTasksData, tasksData };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
