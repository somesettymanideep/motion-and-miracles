import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/lib/i18n";
import { dict } from "@/data/site";

export const Route = createFileRoute("/auth")({
  validateSearch: (search: Record<string, unknown>): { redirect?: string } => {
    const redirect = search["redirect"];
    return typeof redirect === "string" ? { redirect } : {};
  },
  head: () => ({
    meta: [
      { title: "Admin Sign In | Sri Vasishta Jyotishya Parishodhanalayam" },
      { name: "description", content: "Sign in to view website enquiries." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Admin Sign In" },
      { property: "og:description", content: "Sign in to view website enquiries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

/** Only same-origin relative paths may be used as a post-signin target. */
function safeTarget(raw?: string): string {
  return raw && raw.startsWith("/") && !raw.startsWith("//") ? raw : "/admin";
}

function AuthPage() {
  const { lang } = useLanguage();
  const d = dict[lang];
  const navigate = useNavigate();
  const { redirect } = Route.useSearch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [resendStatus, setResendStatus] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) setSignedIn(true);
    });
  }, []);

  const go = (path: string) => navigate({ to: path as never });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(undefined);
    setResendStatus(undefined);
    setBusy(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim().slice(0, 255),
        password: password.slice(0, 128),
      });
      if (error) throw error;
      go(safeTarget(redirect));
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : d.common.errRequired);
    } finally {
      setBusy(false);
    }
  };

  const handleResendConfirmation = async () => {
    if (!email.trim()) return;
    setBusy(true);
    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email: email.trim(),
        options: {
          emailRedirectTo: `${window.location.origin}/admin`,
        },
      });
      if (error) throw error;
      setResendStatus(
        lang === "te"
          ? "ధృవీకరణ ఇమెయిల్ పంపబడింది. దయచేసి మీ ఇన్‌బాక్స్ తనిఖీ చేయండి."
          : "Confirmation email sent. Please check your inbox.",
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to resend confirmation.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-cream px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border-2 border-gold bg-card p-8 shadow-sm">
        {signedIn ? (
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold text-maroon">{d.auth.title}</h1>
            <p className="mt-2 text-sm text-maroon/80">{d.auth.welcomeBack}</p>
            <Link to={safeTarget(redirect) as never} className="btn btn-saffron mt-6 w-full">
              {d.auth.goToDashboard}
            </Link>
          </div>
        ) : (
          <>
            <h1 className="font-display text-2xl font-bold text-maroon">{d.auth.title}</h1>
            <p className="mt-1 text-sm text-maroon/80">{d.auth.subtitle}</p>

            <form noValidate onSubmit={onSubmit} className="mt-6 grid gap-4">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-maroon">{d.auth.email}</span>
                <input
                  type="email"
                  className="field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-maroon">{d.auth.password}</span>
                <input
                  type="password"
                  className="field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  minLength={8}
                  required
                />
              </label>
              {error && (
                <div className="text-xs text-destructive space-y-1">
                  <p>{error}</p>
                  {error.toLowerCase().includes("not confirmed") && (
                    <button
                      type="button"
                      onClick={handleResendConfirmation}
                      className="text-saffron-dark underline hover:text-maroon font-semibold"
                    >
                      {lang === "te" ? "ధృవీకరణ ఇమెయిల్ మళ్లీ పంపండి" : "Resend confirmation email"}
                    </button>
                  )}
                </div>
              )}
              {resendStatus && <p className="text-xs text-emerald-700 font-medium">{resendStatus}</p>}
              <button type="submit" className="btn btn-saffron" disabled={busy}>
                {busy ? d.auth.working : d.auth.signIn}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
