import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.project.createMany({
    data: [
      {
        slug: 'portfolio-platform',
        title: 'FAANG-style Portfolio Platform',
        description: 'Full-stack portfolio platform with Next.js and Prisma',
        techStack: 'Next.js, TypeScript, Prisma, PostgreSQL',
        featured: true,
      },
      {
        slug: 'ai-chatbot',
        title: 'AI Chatbot Platform',
        description: 'Multi-LLM chatbot with streaming responses',
        techStack: 'React, OpenAI, Redis, PostgreSQL',
        featured: false,
      },
    ],
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
