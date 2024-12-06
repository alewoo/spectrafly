import { Request, Response } from 'express';
import { pool } from '../db';

export const getSettings = async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query('SELECT * FROM settings');
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching settings' });
  }
};

export const updateSettings = async (req: Request, res: Response) => {
  try {
    const { systemName, timezone, loggingLevel, sectorRules, maxIngestionRate, maxConcurrentFeeds } = req.body;
    const { rows } = await pool.query(
      'UPDATE settings SET system_name = $1, timezone = $2, logging_level = $3, sector_rules = $4, max_ingestion_rate = $5, max_concurrent_feeds = $6 RETURNING *',
      [systemName, timezone, loggingLevel, JSON.stringify(sectorRules), maxIngestionRate, maxConcurrentFeeds]
    );
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating settings' });
  }
};

