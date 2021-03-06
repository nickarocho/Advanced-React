// This file connects to the remote prisma DB and gives us
// the ability to query it with JS

const { Prisma } = require('prisma-binding'); //uses "require" because at time of
//recording, Node.js doesn't have "import" functionality

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: false
});

module.exports = db;
