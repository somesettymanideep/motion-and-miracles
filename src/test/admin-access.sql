-- Live database regression checks: every value must be true.
SELECT
  has_table_privilege('anon', 'public.consultation_submissions', 'INSERT') AS visitors_can_book,
  has_table_privilege('anon', 'public.contact_submissions', 'INSERT') AS visitors_can_contact,
  NOT has_table_privilege('anon', 'public.consultation_submissions', 'SELECT') AS bookings_not_public,
  NOT has_table_privilege('anon', 'public.contact_submissions', 'SELECT') AS messages_not_public,
  has_table_privilege('authenticated', 'public.user_roles', 'SELECT') AS signed_in_can_read_roles,
  NOT has_table_privilege('authenticated', 'public.user_roles', 'INSERT') AS users_cannot_promote_themselves,
  NOT has_table_privilege('authenticated', 'public.user_roles', 'UPDATE') AS users_cannot_change_roles,
  EXISTS (SELECT 1 FROM pg_trigger WHERE tgfoid = 'public.handle_first_user_admin()'::regprocedure AND NOT tgisinternal AND tgenabled = 'O') AS first_admin_trigger_enabled;