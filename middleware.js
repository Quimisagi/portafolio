export function middleware(request) {
  const { pathname, locale } = request.nextUrl

  // If there's no locale in the URL and the path isn't already in the default locale
  if (!locale && pathname !== '/') {
    return Response.redirect(new URL('/en', request.url))
  }

  return Response.next()
}
