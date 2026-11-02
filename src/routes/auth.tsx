import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute, Link, navigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/lib/i18n";
import { dict } from "@/data/site";

export const Route = createFileRoute("/auth")({
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: typeof search.redirect === "string" ? search.redirect : undefined,
  }),
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
  const { redirect } = Route.useSearch();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) setSignedIn(true);
    });
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(undefined);
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim().slice(0, 255),
          password: password.slice(0, 128),
        });
        if (error) throw error;
        navigate({ to: safeTarget(redirect) });
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim().slice(0, 255),
          password: password.slice(0, 128),
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        if (data.session) {
          navigate({ to: safeTarget(redirect) });
        } else {
          setCheckEmail(true);
        }
      }
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : d.common.errRequired);
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
            <Link to={safeTarget(redirect)} className="btn btn-saffron mt-6 w-full">
              {d.auth.goToDashboard}
            </Link>
          </div>
        ) : checkEmail ? (
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold text-maroon">{d.auth.title}</h1>
            <p className="mt-3 text-sm leading-relaxed text-maroon/80">{d.auth.checkEmail}</p>
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
                  autoComplete={mode === "signin" ? "current-password" : "new-password"}
                  minLength={8}
                  required
                />
              </label>
              {error && <p className="text-xs text-destructive">{error}</p>}
              <button type="submit" className="btn btn-saffron" disabled={busy}>
                {busy ? d.auth.working : mode === "signin" ? d.auth.signIn : d.auth.signUp}
              </button>
            </form>

            <button
              type="button"
              onClick={() => {
                setMode(mode === "signin" ? "signup" : "signin");
                setError(undefined);
              }}
              className="mt-4 w-full text-center text-xs font-semibold text-maroon hover:text-saffron-dark"
            >
              {mode === "signin" ? d.auth.noAccount : d.auth.haveAccount}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
