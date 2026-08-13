export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { grantTitle, agency, orgName, orgType, need, amount } = req.body;

  if (!grantTitle || !orgName || !need) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const prompt = `You are helping someone draft a first-pass narrative for a government grant application. Write in a clear, professional, funder-friendly tone. Do not invent facts that weren't provided — where specifics are missing (exact budget figures, timelines, metrics), leave a clearly marked placeholder instead.

Grant: ${grantTitle}
Agency: ${agency || 'N/A'}

Applicant organization: ${orgName}
Organization type: ${orgType || 'N/A'}
Funding need / project description: ${need}
Requested amount: ${amount || 'Not specified'}

Write a draft "Statement of Need" and "Project Summary" (2-3 paragraphs total) the applicant can edit before submitting.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Anthropic API error:', errText);
      return res.status(response.status).json({ error: 'Failed to generate draft' });
    }

    const data = await response.json();
    const draftText = data.content?.[0]?.text || 'No draft generated.';
    return res.status(200).json({ draft: draftText });
  } catch (err) {
    console.error('Draft generation error:', err);
    return res.status(500).json({ error: 'Failed to generate draft' });
  }
}
