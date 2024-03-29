import { FastifyReply, FastifyRequest } from 'fastify'

// função para verificar a autenticação de cookie do user
export async function checkSessionIdExists(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return response.status(401).send({
      error: 'Unauthorized',
    })
  }
}
