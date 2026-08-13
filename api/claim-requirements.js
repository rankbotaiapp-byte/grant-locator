export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { state } = req.query;

  if (!state) {
    return res.status(400).json({ error: 'State is required' });
  }

  try {
    const url = `${process.env.SUPABASE_URL}/rest/v1/state_claim_requirements?state=eq.${encodeURIComponent(state)}`;
    const response = await fetch(url, {
      headers: {
        'apikey': process.env.SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch requirements' });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error('Claim requirements error:', err);
    return res.status(500).json({ error: 'Failed to fetch requirements' });
  }
}
