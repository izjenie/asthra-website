import { useParams } from 'react-router'

export default function ApiDocs() {
  const { '*': splat } = useParams()

  const page = splat && splat !== '' ? splat : 'index.html'
  const htmlPage = page.endsWith('.html') ? page : `${page}.html`

  return (
    <iframe
      src={`/api/${htmlPage}`}
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
        display: 'block',
      }}
      title="API Documentation"
    />
  )
}
