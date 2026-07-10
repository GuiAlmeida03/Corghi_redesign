import { useEffect } from 'react'

const SITE_NAME = 'Corghi do Brasil'

export function useDocumentHead(title, description) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    const previousContent = meta.getAttribute('content')
    meta.setAttribute('content', description)

    return () => {
      if (previousContent) meta.setAttribute('content', previousContent)
    }
  }, [title, description])
}
