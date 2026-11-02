import { useCallback, useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { LogOut, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/lib/i18n";
import { dict } from "@/data/site";

type ConsultationRow = {
  id: string;
  name: string;
  phone: string;
  service: string;
  dob: string | null;
  tob: string | null;
  pob: string | null;
  message: string | null;
  language: string;
  created_at: string;
};

type ContactRow = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  message: string | null;
  language: string;
  created_at: string;
};

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Enquiries Dashboard | Sri Vasishta Jyotishya Parishodhanalayam" },
      { name: "description", content: "Consultation bookings and contact messages from the website." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Enquiries Dashboard" },
      { property: "og:description", content: "Consultation bookings and contact messages from the website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const { lang } = useLanguage();
  const d = dict[lang];
  const navigate = useNavigate();
  const { queryClient } = Route.useRouteContext();
  const [stage, setStage] = useState<"loading" | "admin" | "notAdmin">("loading");
  const [tab, setTab] = useState<"consultations" | "contacts">("consultations");
  const [consultations, setConsultations] = useState<ConsultationRow[]>([]);
  const [contacts, setContacts] = useState<ContactRow[]>([]);
  const [loadError, setLoadError] = useState(false);

  const load = useCallback(async () => {
    setLoadError(false);
    const [c, m] = await Promise.all([
      supabase
        .from("consultation_submissions")
        .select("id, name, phone, service, dob, tob, pob, message, language, created_at")
        .order("created_at", { ascending: false })
        .limit(200),
      supabase
        .from("contact_submissions")
        .select("id, name, phone, email, service, message, language, created_at")
        .order("created_at", { ascending: false })
        .limit(200),
    ]);
    if (c.error || m.error) {
      setLoadError(true);
      return;
    }
    setConsultations((c.data ?? []) as ConsultationRow[]);
    setContacts((m.data ?? []) as ContactRow[]);
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!user) {
        setStage("notAdmin");
        return;
      }
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id);
      const isAdmin = (roles ?? []).some((r) => r.role === "admin");
      if (!isAdmin) {
        setStage("notAdmin");
        return;
      }
      setStage("admin");
      await load();
    })();
  }, [load]);

  const signOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  const fmtDateTime = (iso: string) =>
    new Date(iso).toLocaleString(lang === "te" ? "te-IN" : "en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

  if (stage === "loading") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-cream text-sm text-maroon/80">
        {d.auth.working}
      </div>
    );
  }

  if (stage === "notAdmin") {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-cream px-4 text-center">
        <p className="text-sm font-semibold text-maroon">{d.admin.notAdmin}</p>
        <Link to="/" className="btn btn-maroon-outline">
          {d.admin.backToSite}
        </Link>
      </div>
    );
  }

  const rows =
    tab === "consultations" ? consultations : contacts;
  const tableLabel = tab === "consultations" ? d.admin.tabConsultations : d.admin.tabMessages;

  return (
    <div className="bg-cream px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl xl:max-w-7xl">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-maroon sm:text-3xl">{d.admin.title}</h1>
            <p className="mt-1 text-sm text-maroon/80">{d.admin.subtitle}</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => load()}
              className="btn btn-maroon-outline"
              aria-label={d.admin.refresh}
            >
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              {d.admin.refresh}
            </button>
            <button type="button" onClick={signOut} className="btn btn-maroon-outline">
              <LogOut className="h-4 w-4" aria-hidden="true" />
              {d.admin.signOut}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label={d.admin.title}
          className="mt-6 flex flex-wrap items-center gap-2"
        >
          {(
            [
              { key: "consultations" as const, label: d.admin.tabConsultations, count: consultations.length },
              { key: "contacts" as const, label: d.admin.tabMessages, count: contacts.length },
            ]
          ).map((t) => (
            <button
              key={t.key}
              role="tab"
              type="button"
              aria-selected={tab === t.key}
              onClick={() => setTab(t.key)}
              className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
                tab === t.key
                  ? "border-saffron bg-saffron text-cream"
                  : "border-gold bg-card text-maroon hover:bg-gold/10"
              }`}
            >
              {t.label} ({t.count})
            </button>
          ))}
        </div>

        {/* Data */}
        <div className="mt-6 overflow-x-auto rounded-2xl border-2 border-gold bg-card shadow-sm">
          {loadError ? (
            <p className="p-8 text-center text-sm font-semibold text-destructive">{d.admin.errorLoading}</p>
          ) : rows.length === 0 ? (
            <p className="p-8 text-center text-sm text-maroon/80">{d.admin.empty}</p>
          ) : (
            <table className="w-full min-w-[760px] text-left text-sm">
              <caption className="sr-only">{tableLabel}</caption>
              <thead>
                <tr className="border-b border-gold/60 bg-gold/10 text-xs uppercase tracking-wider text-maroon">
                  <th scope="col" className="px-4 py-3">{d.admin.submitted}</th>
                  <th scope="col" className="px-4 py-3">{d.form.fullName}</th>
                  <th scope="col" className="px-4 py-3">{d.form.phone}</th>
                  {tab === "contacts" && <th scope="col" className="px-4 py-3">{d.contact.email}</th>}
                  <th scope="col" className="px-4 py-3">{d.form.service}</th>
                  {tab === "consultations" && <th scope="col" className="px-4 py-3">{d.form.dob}</th>}
                  {tab === "consultations" && <th scope="col" className="px-4 py-3">{d.form.tob}</th>}
                  {tab === "consultations" && <th scope="col" className="px-4 py-3">{d.form.pob}</th>}
                  <th scope="col" className="px-4 py-3">{d.form.message}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  const c = row as ConsultationRow & ContactRow;
                  return (
                    <tr key={row.id} className="border-b border-gold/30 align-top text-maroon last:border-0">
                      <td className="whitespace-nowrap px-4 py-3 text-maroon/80">{fmtDateTime(row.created_at)}</td>
                      <td className="px-4 py-3 font-semibold">{row.name}</td>
                      <td className="whitespace-nowrap px-4 py-3">
                        <a href={`tel:${row.phone}`} className="hover:text-saffron-dark">{row.phone}</a>
                      </td>
                      {tab === "contacts" && (
                        <td className="px-4 py-3">{c.email ?? d.admin.notProvided}</td>
                      )}
                      <td className="px-4 py-3">{row.service}</td>
                      {tab === "consultations" && (
                        <>
                          <td className="whitespace-nowrap px-4 py-3">{c.dob ?? d.admin.notProvided}</td>
                          <td className="whitespace-nowrap px-4 py-3">{c.tob ? c.tob.slice(0, 5) : d.admin.notProvided}</td>
                          <td className="px-4 py-3">{c.pob ?? d.admin.notProvided}</td>
                        </>
                      )}
                      <td className="max-w-[280px] px-4 py-3">
                        {row.message ? (
                          <span className="block whitespace-pre-line">{row.message}</span>
                        ) : (
                          d.admin.notProvided
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
