export async function handler(event) {
  const q = event.queryStringParameters?.q || ""

  if (!q) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "query missing" }),
    }
  }

  try {
    const url = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(q)}`
    const response = await fetch(url)
    const data = await response.text()

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: data,
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch suggestions" }),
    }
  }
}