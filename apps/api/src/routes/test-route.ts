import { Hono } from 'hono';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';
import { z } from 'zod';
import 'zod-openapi/extend';

const app = new Hono();

app.post('/', describeRoute({
    description: 'Post a test message',
    responses: {
        200: {
            description: 'A test message',
            content: {
                'application/json': {
                    schema: resolver(z.object({
                        message: z.string().openapi({
                            example: 'Hello, world!',
                        }),
                    })),
                },
            },
        },
    },
}), zValidator('json', z.object({
    message: z.string().openapi({
        example: 'Hello, world!',
    }),
})), (c) => {
    return c.json({
        message: 'Hello, world!',
    });
});

export default app;
