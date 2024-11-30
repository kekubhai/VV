import { NextApiRequest, NextApiResponse } from 'next';

type GenerateResponse = {
  caption: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenerateResponse | { error: string }>
) {
  const { date, vibe, wordLimit } = req.query;

  if (!date || !vibe || !wordLimit) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const caption = `Generated caption for ${date}, vibe: ${vibe}, word limit: ${wordLimit}.`;

  res.status(200).json({ caption });
}
