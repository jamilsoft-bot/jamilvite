const Home = () => {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-wide text-slate-500">Welcome</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          Jamilvite React Starter
        </h1>
        <p className="mt-4 text-slate-600">
          This project ships with React Router, Tailwind CSS, and W3.CSS
          preconfigured so you can start building immediately.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="w3-button w3-white w3-border w3-border-blue w3-round-large">
            W3 Button
          </button>
          <span className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white">
            Tailwind Badge
          </span>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Router Ready</h2>
          <p className="mt-2 text-slate-600">
            Add new routes inside <code>src/routes/Router</code> and keep your
            pages organized.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Design System</h2>
          <p className="mt-2 text-slate-600">
            Combine Tailwind utility classes with W3 components to speed up
            layout and styling.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Home;
