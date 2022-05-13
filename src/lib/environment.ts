export function isProduction() {
  return process.env.NODE_ENV === 'production'
}

export const isBrowser = () => {
  return typeof window !== 'undefined'
}

export const isMobile = (): boolean => {
  if (isBrowser()) {
    try {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    } catch (error) {
      console.log(error)

      return false
    }
  } else {
    return false
  }
}
