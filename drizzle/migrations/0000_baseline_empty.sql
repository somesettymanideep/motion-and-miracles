-- Fresh baseline migration for the remixed project's new database.
-- Intentionally contains no schema changes; the original project's schema will be re-created in a follow-up migration.
CREATE EXTENSION IF NOT EXISTS pgcrypto;