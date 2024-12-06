import { Request, Response } from 'express';
import { pool } from '../db';

export const getArticles = async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query('SELECT * FROM articles ORDER BY published_at DESC LIMIT 100');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching articles' });
  }
};

export const getArticleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM articles WHERE id = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the article' });
  }
};

export const streamArticles = (req: Request, res: Response) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const sendArticle = (article: any) => {
    res.write(`data: ${JSON.stringify(article)}\n\n`);
  };

  // TODO: Implement real-time article streaming using Redis pub/sub
  // This is a placeholder implementation
  const interval = setInterval(() => {
    sendArticle({ id: Date.now(), title: 'New Article', content: 'Content...' });
  }, 5000);

  req.on('close', () => {
    clearInterval(interval);
  });
};

