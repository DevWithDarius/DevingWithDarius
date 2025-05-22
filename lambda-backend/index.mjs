export async function handler(event) {
  console.log("Event received:", event);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "✅ Hello from SecureWebApp Lambda Backend!",
      method: event?.requestContext?.http?.method,
      path: event?.rawPath,
      timestamp: new Date().toISOString(),
    }),
  };
}
