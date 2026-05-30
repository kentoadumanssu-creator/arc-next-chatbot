export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ answer: 'Method not allowed' });
  }

  const { question } = req.body || {};

  const reply =
    '（ダミー応答）こんにちは！ARCのチャットボットです。あとでClaude APIにつなぐ予定です。あなたの質問: ' +
    (question || '（質問がありません）');

  return res.status(200).json({ answer: reply });
}
