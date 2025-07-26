import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import testRoute from './routes/test-route';

const app = new Hono();

app.route('/test', testRoute);

serve({
  fetch: app.fetch,
  port: 3000,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`);
});

export type AppType = typeof app;
