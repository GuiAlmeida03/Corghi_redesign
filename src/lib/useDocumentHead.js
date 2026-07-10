import { useEffect } from 'react'

const SITE_NAME = 'Corghi do Brasil'

function setMeta(selector, attribute, value) {
  let meta = document.querySelector(selector)
  if (!meta) {
    meta = document.createElement('meta')
    const [, attrName, attrValue] = selector.match(/meta\[(\w+)="([^"]+)"\]/)
    meta.setAttribute(attrName, attrValue)
    document.head.appendChild(meta)
  }
  const previousContent = meta.getAttribute(attribute)
  meta.setAttribute(attribute, value)
  return () => {
    if (previousContent) meta.setAttribute(attribute, previousContent)
  }
}

export function useDocumentHead(title, description, image) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    document.title = fullTitle

    const restoreFns = [
      setMeta('meta[name="description"]', 'content', description),
      setMeta('meta[property="og:title"]', 'content', fullTitle),
      setMeta('meta[property="og:description"]', 'content', description),
    ]
    if (image) {
      restoreFns.push(setMeta('meta[property="og:image"]', 'content', image))
    }

    return () => restoreFns.forEach((restore) => restore())
  }, [title, description, image])
}
