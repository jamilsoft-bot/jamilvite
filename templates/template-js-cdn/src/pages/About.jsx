const About = () => {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">About this stack</h1>
      <p className="text-slate-600">
        Jamilvite pairs Vite with React Router, Tailwind CSS, and W3.CSS so you
        can prototype fast and scale into production-friendly structure.
      </p>
      <div className="rounded-2xl bg-slate-900 p-6 text-slate-100">
        <p className="text-sm uppercase tracking-wide text-slate-300">
          Quick tips
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-sm">
          <li>Start building pages inside <code>src/pages</code>.</li>
          <li>Update navigation in <code>src/components/Nav</code>.</li>
          <li>Tailwind utilities live in <code>src/styles/index.css</code>.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
