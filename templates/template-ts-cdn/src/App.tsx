import Router from './routes/Router';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        <Router />
      </main>
    </div>
  );
};

export default App;
