const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    // Create users
    const user1 = await prisma.user.create({
        data: {
            username: 'user1',
            email: 'user1@example.com',
        },
    });

    // Create job ads
    const jobAd1 = await prisma.jobAd.create({
        data: {
            title: 'Frontend Developer',
            description: 'Exciting opportunity for a skilled frontend developer!',
            location: 'Remote',
            postedById: user1.id,
        },
    });

    const jobAd2 = await prisma.jobAd.create({
        data: {
            title: 'UI/UX Designer',
            description: 'Join our creative team and shape user experiences!',
            location: 'In-office (City)',
            postedById: user1.id,
        },
    });

    // Add more job ads as needed...

    console.log('Seed data created successfully!');
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
