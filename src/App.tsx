import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tips from './pages/Tips'
import Food from './pages/Food'
import Tour from './pages/Tour'
import Shopping from './pages/Shopping'
import Cities from './pages/Cities'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tips" element={<Tips />} />
        <Route path="food" element={<Food />} />
        <Route path="tour" element={<Tour />} />
        <Route path="shopping" element={<Shopping />} />
        <Route path="cities" element={<Cities />} />
      </Route>
    </Routes>
  )
}
