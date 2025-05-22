import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'Client Project API',
        description: 'Auto-generated Swagger docs',
    },
    host: 'localhost:5000',
    schemes: ['http'],
    basePath: '/api',
};

const outputFile = './swagger/swagger-output.json';
const endpointsFiles = ['./api/routes/auth.routes.js'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
