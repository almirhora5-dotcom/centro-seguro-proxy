export default async function handler(request, response) {
  const { path } = request.query;
  const endpoint = Array.isArray(path) ? path.join('/') : path;
  const url = `https://api.sofascore.com/api/v1/${endpoint}`;

  try {
    const result = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json'
      }
    });

    const data = await result.json();
    response.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    response.status(500).json({ error: 'Não foi possível buscar os dados.' });
  }
}
