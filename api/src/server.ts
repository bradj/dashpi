import { hulu, netflix, hbomax } from './urls.ts';
import db from './db.ts';

const getHandler = (url: URL) => {
  const body = { hulu, netflix, hbomax };

  return new Response(JSON.stringify(body), { status: 200, headers: { 'Content-Type': 'application/json' } });
}

const postHandler = (url: URL) => {
  const body = { success: true };

  return new Response(JSON.stringify(body), { status: 200, headers: { 'Content-Type': 'application/json' } });
}

const handler = (req: Request) => {
  if (!(req.method in ['GET', 'POST'])) {
    return new Response('Method not allowed', { status: 405 });
  }

  const url = new URL(req.url);

  if (req.method === 'GET') {
    return getHandler(url);
  } else {
    return postHandler(url);
  }
}

const ac = new AbortController();
const server = Deno.serve({ signal: ac.signal, port: 8000 }, handler);

server.finished.then(() => {
  db.close();
  ac.abort();
});
