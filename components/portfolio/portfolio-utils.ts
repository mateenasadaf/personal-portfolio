
export function getSafeExternalUrl(value?: string) {
  const candidate = value?.trim()
  if (!candidate) return undefined

  try {
    const url = new URL(candidate)
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.href
      : undefined
  } catch {
    return undefined
  }
}

export function getSafeImageSrc(value?: string) {
  const candidate = value?.trim()
  if (!candidate) return undefined

  if (candidate.startsWith("/") && !candidate.startsWith("//")) {
    return candidate
  }

  return getSafeExternalUrl(candidate)
}

export function getMailto(email: string) {
  const candidate = email.trim()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidate)) {
    return undefined
  }

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(candidate)}`
}