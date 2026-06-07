import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  return (
    <>


      <section className="min-h-screen bg-slate-900 text-white p-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-2">React Practice Tasks</h2>

          <p className="text-slate-400 mb-8">
            Explore all React tasks completed during your learning journey.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-bold mb-3">Day 1</h3>

              <p className="text-slate-400 mb-4">
               title ????
              </p>

              <button
                onClick={() => nav("/TaskOne")}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
              >
                View Task
              </button>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl opacity-60">
              <h3 className="text-xl font-bold mb-3">Day 2</h3>
                            <p className="text-slate-400 mb-4">
               title ????
              </p>

              <button
                onClick={() => nav("/TaskTwo")}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
              >
                View Task
              </button>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl opacity-60">
              <h3 className="text-xl font-bold mb-3">Day 3</h3>
                            <p className="text-slate-400 mb-4">
               title ????
              </p>

              <button
                onClick={() => nav("/TaskThree")}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
              >
                View Task
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;