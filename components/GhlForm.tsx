'use client'
import { useEffect, useState } from 'react'

export default function GhlForm({ formId, height = 620 }: { formId: string; height?: number }) {
  const [src, setSrc] = useState(`https://api.leadconnectorhq.com/widget/form/${formId}`)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const gclid = urlParams.get('gclid') || sessionStorage.getItem('gclid')
    if (gclid) {
      sessionStorage.setItem('gclid', gclid)
      setSrc(`https://api.leadconnectorhq.com/widget/form/${formId}?gclid=${encodeURIComponent(gclid)}`)
    }
  }, [formId])

  return (
    <iframe
      src={src}
      style={{ width: '100%', height: `${height}px`, border: 'none', display: 'block' }}
      scrolling="no"
      id={`inline-${formId}`}
    />
  )
}
