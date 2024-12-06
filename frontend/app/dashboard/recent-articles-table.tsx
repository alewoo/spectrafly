"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Article {
  id: number;
  time: string;
  publisher: string;
  title: string;
}

export function RecentArticlesTable() {
  const [recentArticles, setRecentArticles] = useState<Article[]>([]);

  useEffect(() => {
    const eventSource = new EventSource("/api/articles/stream");

    eventSource.onmessage = (event) => {
      const newArticle = JSON.parse(event.data);
      setRecentArticles((prevArticles) => [
        newArticle,
        ...prevArticles.slice(0, 9),
      ]);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Time</TableHead>
          <TableHead>Publisher</TableHead>
          <TableHead>Title</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentArticles.map((article) => (
          <TableRow key={article.id}>
            <TableCell>{new Date(article.time).toLocaleTimeString()}</TableCell>
            <TableCell>{article.publisher}</TableCell>
            <TableCell>{article.title}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
