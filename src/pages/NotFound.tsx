import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B1521]">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-extrabold tracking-tight text-white">404</h1>
        <p className="mb-6 text-xl text-slate-400">{t('notFound.message', 'Oops! Page not found')}</p>
        <Link to="/" className="inline-flex items-center px-6 py-3 rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white text-sm font-bold transition-all">
          {t('notFound.returnHome', 'Return to Home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
