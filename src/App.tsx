import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import ApiDocs from './pages/ApiDocs'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/api" element={<ApiDocs />} />
      <Route path="/api/*" element={<ApiDocs />} />
    </Routes>
  )
}
