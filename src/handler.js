/**
 * Respond with hello worker text
 * @param {Request} request
 */
 export async function handleRequest(request) {
    return new Response('Hello worker!', {
      headers: { 'content-type': 'text/plain' },
    })
  }