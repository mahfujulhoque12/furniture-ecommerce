import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define public routes (e.g., sign-in, sign-up, and homepage)
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)', 
  '/sign-up(.*)', 
  '/', 
  '/speacial',
  '/speacialOffer',
  '/about-us',
  '/bathroom',
  '/blog',
  '/combo',
  'contact-us',
  '/cookie',
  'deals',
  '/house-furniture',
  '/office-furniture',
  '/shop',
  '/terms-and-condition',
  '/tranding',
  '/category',
])

export default clerkMiddleware(async (auth, request) => {
  // Protect all routes except the public routes
  if (!isPublicRoute(request)) {
    await auth.protect() // Require authentication for other routes
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
