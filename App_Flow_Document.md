# App Flow Document

This document describes the end-to-end data and user interaction flows within SpectraFly, illustrating how articles move through the system and how users engage with the platform.

## Data Flow (Article Ingestion to Consumption)

1. **Ingestion:**

   - Feeds are configured (URL, interval) in the Feeds Page.
   - Ingestion service polls these feeds.
   - Raw articles are normalized and sent to a message queue or Kafka topic.

2. **Parsing:**

   - A parser service reads raw articles from the queue.
   - Extracts publisher, author, date, title, body, and classifies sector.
   - Stores the structured article into the database.

3. **Distribution:**
   - Articles are now queryable via `/articles` endpoint.
   - Real-time `/stream` endpoint pushes new articles as they become available.

## User Interaction Flows

1. **Admin Adding a New Feed:**

   - Admin logs in, navigates to Feeds Page.
   - Clicks “Add New Feed,” inputs details, saves.
   - Ingestion picks up the new feed; articles appear on Dashboard shortly.

2. **Analyst Monitoring Live Articles:**

   - Analyst logs in, views Dashboard metrics and recent articles.
   - Uses `/articles` API to query filtered sets (e.g., by sector).
   - Subscribes to `/stream` for live updates as new articles come in.

3. **Admin Adjusting Sector Rules:**
   - Admin visits Settings Page.
   - Updates keyword-to-sector mappings.
   - Future articles reflect updated sector classifications in real-time.

## Additional Considerations

- **Error Handling:** Failed fetches are retried and logged.
- **Latency Monitoring:** Dashboard latency charts highlight ingestion-to-availability speed.
- **Security:** Login required for admin tasks; API requests need authentication tokens.

---

This flow document ensures a clear understanding of how data travels through the system and how users perform critical tasks, providing a roadmap for implementation and troubleshooting.
