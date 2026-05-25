const jdbcModule = {
  id: 14,

  title: 'Database Connectivity with JDBC',

  slug: 'jdbc-database-connectivity',

  description:
    'Learn how Java applications connect with relational databases using JDBC, prepared statements, transactions, and database operations.',

  level: 'Intermediate',

  duration: '6 Hours',

  objectives: [
    'Understand JDBC architecture and drivers',
    'Establish database connections safely',
    'Prevent SQL injection using PreparedStatement',
    'Perform CRUD database operations',
    'Work with ResultSet and transactions',
    'Understand connection pooling concepts',
  ],

  lessons: [
    {
      title: 'Introduction to JDBC',

      slug: 'jdbc-introduction',

      folder: 'jdbc',

      difficulty: 'Intermediate',

      readingTime: '12 mins',

      tags: ['jdbc', 'sql'],
    },

    {
      title: 'Establishing a Database Connection',

      slug: 'database-connection',

      folder: 'jdbc',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['connection', 'driver'],
    },

    {
      title: 'Securing Queries with PreparedStatements',

      slug: 'prepared-statements',

      folder: 'jdbc',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['security', 'preparedstatement'],
    },

    {
      title: 'Executing CRUD Operations',

      slug: 'crud-operations',

      folder: 'jdbc',

      difficulty: 'Intermediate',

      readingTime: '18 mins',

      tags: ['crud', 'sql'],
    },

    {
      title: 'Processing Data with ResultSet',

      slug: 'resultset',

      folder: 'jdbc',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['resultset', 'data-fetching'],
    },
  ],

  exercises: [
    'Create a JDBC connection and retrieve database metadata.',

    'Convert insecure SQL queries into PreparedStatements.',

    'Execute CRUD operations using JDBC.',

    'Implement transaction rollback handling safely.',
  ],

  miniTasks: [
    'Create a reusable database utility class.',

    'Build a simple student database manager.',

    'Implement batch update operations.',
  ],

  project: {
    title: 'Relational Core Banking Transaction Engine',

    description:
      'Build a secure banking persistence layer using JDBC, transactions, prepared statements, and database-driven financial operations.',

    difficulty: 'Intermediate',
  },
}

export default jdbcModule