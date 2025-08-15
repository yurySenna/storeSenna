import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import pkg from 'pg';
const { Pool } = pkg;

const api = Fastify({ logger: true });

// Habilita CORS para permitir requisições do seu frontend
await api.register(cors, {
  origin: '*' // Pode restringir depois para segurança
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

api.get('/produtos', async (req, reply) => {
  const result = await pool.query('SELECT * FROM produtos');
  reply.send(result.rows);
});

api.get('/produtos/:categorias', async (req, reply) => {
  const { categorias } = req.params;
  const result = await pool.query(
    'SELECT * FROM produtos WHERE categorias = $1',
    [categorias]
  );
  reply.send(result.rows);
});

api.listen({ port: 3000 }).then(() => {
  console.log('Servidor rodando em http://localhost:3000');
});
