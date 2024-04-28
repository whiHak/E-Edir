import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhooks',
    '/api/uploadthing',
    '/api/webhooks/chapa',

  ],
  ignoredRoutes: [
    '/api/uploadthing'
  ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 