import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

export default function Layout() {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>Rachel&rsquo;s Korea Guide &middot; Made with love for travelers ♥</p>
      </footer>
    </div>
  )
}
