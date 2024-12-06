import { Request, Response } from 'express';
import { pool } from '../db';

export const getFeeds = async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query('SELECT * FROM feeds');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching feeds' });
  }
};

export const addFeed = async (req: Request, res: Response) => {
  try {
    const { name, url, type, pollInterval } = req.body;
    const { rows } = await pool.query(
      'INSERT INTO feeds (name, url, type, poll_interval) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, url, type, pollInterval]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the feed' });
  }
};

export const updateFeed = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, url, type, pollInterval } = req.body;
    const { rows } = await pool.query(
      'UPDATE feeds SET name = $1, url = $2, type = $3, poll_interval = $4 WHERE id = $5 RETURNING *',
      [name, url, type, pollInterval, id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Feed not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the feed' });
  }
};

export const deleteFeed = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query('DELETE FROM feeds WHERE id = $1', [id]);
    if (rowCount === 0) {
      return res.status(404).json({ error: 'Feed not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the feed' });
  }
};

