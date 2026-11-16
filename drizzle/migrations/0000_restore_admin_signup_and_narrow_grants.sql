REVOKE ALL ON public.consultation_submissions, public.contact_submissions FROM anon, authenticated;
GRANT INSERT ON public.consultation_submissions, public.contact_submissions TO anon;
GRANT SELECT, INSERT ON public.consultation_submissions, public.contact_submissions TO authenticated;
GRANT ALL ON public.consultation_submissions, public.contact_submissions TO service_role;
REVOKE ALL ON public.user_roles FROM anon, authenticated;
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
CREATE TRIGGER on_auth_user_created_assign_first_admin AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_first_user_admin();