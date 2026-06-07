import AppRoutes from "./routes/AppRoutes"


const App = () => {
  return (
    <>
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 shadow-lg flex justify-between items-center">
  <div>
    <h1 className="text-2xl font-bold">React Task Hub</h1>
    <p className="text-xs text-blue-100 mt-0.5">Track and View Your React Learning Journey</p>
  </div>
  
  <div className="flex gap-5 items-center">
    <a href="#" className="hover:text-blue-200 transition">Tasks</a>
    <a href="#" className="hover:text-blue-200 transition">Progress</a>
    <button className="bg-white text-purple-600 px-4 py-1.5 rounded-lg font-medium hover:bg-blue-50 transition">
      Profile
    </button>
  </div>
</nav>
    <AppRoutes/>
    </>
  )
}

export default App