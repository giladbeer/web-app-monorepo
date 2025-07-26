import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { UserSchema } from '@repo/shared';

const app = new Hono();

const route = app.get('/', (c) => {
  const user = UserSchema.parse({
    id: '123',
    name: 'John Doe',
    email: 'john.doe@example.com',
  });
  return c.json({
    message: `Hello, ${user.name}! Your email is ${user.email}.`,
  });
});

serve(app);

console.log('Server is running on http://localhost:3000');

export type AppType = typeof app;
