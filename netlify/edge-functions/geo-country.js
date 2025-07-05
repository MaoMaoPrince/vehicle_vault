export default async (request, context) => {
  const country = context.geo?.country?.code || 'GB'
  const response = await context.next()
  response.headers.set('Set-Cookie', `country=${country}; Path=/; HttpOnly`)
  return response
}

export const config = { path: '/*' } 