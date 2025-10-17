type Props = { locale: "en" | "fa" };

export default function LegalNav({ locale }: Props) {
  const isFA = locale === "fa";
  return (
    <nav className={`text-sm text-gray-400 flex flex-wrap gap-3 ${isFA ? "justify-end" : "justify-start"}`}>
      <a href={`/${locale}/legal/privacy`} className="hover:underline">{isFA ? "حریم خصوصی" : "Privacy"}</a>
      <span>│</span>
      <a href={`/${locale}/legal/terms`} className="hover:underline">{isFA ? "شرایط" : "Terms"}</a>
      <span>│</span>
      <a href={`/${locale}/legal/cookies`} className="hover:underline">{isFA ? "کوکی‌ها" : "Cookies"}</a>
      <span>│</span>
      <a href={`/${locale}/legal/data-request`} className="hover:underline">{isFA ? "درخواست داده (DSAR)" : "DSAR"}</a>
      <span>│</span>
      <a href={`/${locale}/legal/delete-account`} className="hover:underline">{isFA ? "حذف حساب" : "Delete Account"}</a>
      <span>│</span>
      {/* language switch */}
      {isFA ? (
        <a href="/" className="hover:underline">EN</a>
      ) : (
        <a href="/fa" className="hover:underline">FA</a>
      )}
    </nav>
  );
}
