# All Pages Document

This document outlines the proposed page layouts and structures for key interfaces within the SpectraFly system. These are conceptual wireframes intended as a blueprint for UI development.

## 1. Dashboard Page

**Purpose:** Provide real-time metrics, charts, recent articles, and system health indicators.

**Layout:**

- **Global Stats (Top Row):** Total Articles, Ingestion Rate, Active Feeds, System Uptime.
- **Key Metrics & Charts:** Ingestion Rate Over Time, Average Latency, Sector Distribution, Error Counts.
- **Recent Articles Table:** Display time, publisher, title of newest articles.
- **System Health Widgets:** Queue depth, DB health, API latency, resource usage.

## 2. Feeds Page

**Purpose:** Manage and monitor data sources.

**Layout:**

- **Feed Overview Stats:** Total Feeds, Active/Inactive counts, last sync attempt.
- **Feed List Table:** Name, Type (RSS/API/HTML), Status, Actions (Edit/Delete).
- **Add/Edit Feed Form:** Fields for Feed Name, URL, Type, Poll Interval, etc.
- **Feed Health & Metrics:** Display ingestion success/failure rates for selected feed.

## 3. API Docs Page

**Purpose:** Document available endpoints, parameters, auth, and error handling.

**Layout:**

- **Endpoint List:** `/articles`, `/articles/{id}`, `/stream` with descriptions and examples.
- **Authentication Info:** How to use JWT or API keys.
- **Error Handling & Rate Limits:** HTTP status codes, error messages, rate limiting details.

## 4. Settings Page

**Purpose:** Allow configuration of system parameters, user management, sector rules, and performance settings.

**Layout:**

- **Tabs or Sections:** General, Users, Sectors, Performance, Integrations.
- **General Settings:** System name, timezone, logging level.
- **Users Management:** Table of users with roles and actions.
- **Sectors Classification:** Keyword-to-sector mappings, upload JSON rules.
- **Performance & Integrations:** Adjust ingestion rates, external NLP endpoints, webhooks.

## 5. Login Page

**Purpose:** Secure authentication gateway.

**Layout:**

- **Simple Form:** Username, Password fields, Login button.
- **Support Links:** Forgot Password, Contact Admin.

---

These pages provide a user interface foundation, ensuring a consistent experience and easy navigation for system administrators, analysts, and viewers.
