export default async (req) => {
  const url = new URL(req.url);
  const q = url.searchParams.get('q');

  if (!q) {
    return new Response(JSON.stringify({ error: 'Missing query param q' }), { status: 400 });
  }

  const response = await fetch(
    `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(q)}`
  );
  const text = await response.text();

  return new Response(text, { status: 200, headers: { 'Content-Type': 'application/json' } });
};