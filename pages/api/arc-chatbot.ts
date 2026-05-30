import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ answer: 'Method not allowed' });
  }

  const { question } = req.body as { question?: string };

  const reply =
    '（ダミー応答）こんにちは！ARCのチャットボットです。あとでClaude APIにつなぐ予定です。あなたの質問: ' +
    (question ?? '（質問がありません）');

  return res.status(200).json({ answer: reply });
}
