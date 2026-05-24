export const modules = [
  {
    id: 1,

    title: 'Java Introduction',

    slug: 'java-introduction',

    level: 'Beginner',

    duration: '2-3 Hours',

    description:
      'Learn Java fundamentals, platform architecture, and setup.',

    objectives: [
      'Understand Java ecosystem',
      'Learn JVM, JDK, and JRE',
      'Set up Java environment',
      'Write first Java program',
    ],

    lessons: [
      {
        id: 1,

        title: 'What is Java?',

        slug: 'what-is-java',

        difficulty: 'Beginner',

        readingTime: '5 min',

        tags: [
          'java',
          'introduction',
          'basics',
        ],

        prerequisites: [],

        objectives: [
          'Understand Java purpose',
          'Learn Java advantages',
          'Write first program',
        ],
      },

      {
        id: 2,

        title: 'JDK vs JRE vs JVM',

        slug: 'jdk-jre-jvm',

        difficulty: 'Beginner',

        readingTime: '8 min',

        tags: [
          'jdk',
          'jre',
          'jvm',
        ],

        prerequisites: [
          'what-is-java',
        ],

        objectives: [
          'Understand JVM role',
          'Differentiate JDK/JRE',
        ],
      },

      {
        id: 3,

        title: 'Installing Java',

        slug: 'installing-java',

        difficulty: 'Beginner',

        readingTime: '6 min',

        tags: [
          'installation',
          'setup',
        ],

        prerequisites: [
          'jdk-jre-jvm',
        ],

        objectives: [
          'Install Java correctly',
          'Configure environment',
        ],
      },
    ],

    exercises: [
      'Explain JVM in your own words',
      'Install latest Java version',
      'Run Hello World program',
    ],

    miniTasks: [
      'Print your name',
      'Print your college',
      'Print current year',
    ],

    project: {
      title:
        'Java Environment Setup Project',

      description:
        'Set up a complete Java development environment and execute multiple console applications.',

      difficulty: 'Beginner',
    },
  },

  {
    id: 2,

    title: 'Variables & Data Types',

    slug: 'variables-data-types',

    level: 'Beginner',

    duration: '3-4 Hours',

    description:
      'Master variables, memory, primitive data types, and casting.',

    objectives: [
      'Understand variables',
      'Use primitive types',
      'Perform type casting',
    ],

    lessons: [
      {
        id: 1,

        title: 'Variables in Java',

        slug: 'variables-java',

        difficulty: 'Beginner',

        readingTime: '7 min',

        tags: [
          'variables',
          'memory',
        ],

        prerequisites: [
          'what-is-java',
        ],

        objectives: [
          'Declare variables',
          'Initialize values',
        ],
      },

      {
        id: 2,

        title: 'Primitive Data Types',

        slug: 'primitive-data-types',

        difficulty: 'Beginner',

        readingTime: '10 min',

        tags: [
          'data-types',
          'primitive',
        ],

        prerequisites: [
          'variables-java',
        ],

        objectives: [
          'Understand primitive types',
          'Use memory efficiently',
        ],
      },

      {
        id: 3,

        title: 'Type Casting',

        slug: 'type-casting',

        difficulty: 'Beginner',

        readingTime: '8 min',

        tags: [
          'casting',
          'conversion',
        ],

        prerequisites: [
          'primitive-data-types',
        ],

        objectives: [
          'Perform implicit casting',
          'Perform explicit casting',
        ],
      },
    ],

    exercises: [
      'Create variables of all primitive types',
      'Convert int to double',
      'Swap two variables',
    ],

    miniTasks: [
      'Student marks program',
      'Temperature converter',
      'Age calculator',
    ],

    project: {
      title:
        'Student Information System',

      description:
        'Create a student profile management console application.',

      difficulty: 'Beginner',
    },
  },

  {
    id: 3,

    title: 'Operators',

    slug: 'operators',

    level: 'Beginner',

    duration: '3 Hours',

    description:
      'Learn arithmetic, logical, relational, and assignment operators.',

    objectives: [
      'Use arithmetic operators',
      'Build conditions',
      'Evaluate logic',
    ],

    lessons: [
      {
        id: 1,

        title: 'Arithmetic Operators',

        slug: 'arithmetic-operators',

        difficulty: 'Beginner',

        readingTime: '6 min',

        tags: [
          'operators',
          'math',
        ],

        prerequisites: [
          'variables-java',
        ],

        objectives: [
          'Perform calculations',
          'Use mathematical operators',
        ],
      },

      {
        id: 2,

        title: 'Relational Operators',

        slug: 'relational-operators',

        difficulty: 'Beginner',

        readingTime: '5 min',

        tags: [
          'comparison',
          'logic',
        ],

        prerequisites: [
          'arithmetic-operators',
        ],

        objectives: [
          'Compare values',
          'Create conditions',
        ],
      },

      {
        id: 3,

        title: 'Logical Operators',

        slug: 'logical-operators',

        difficulty: 'Beginner',

        readingTime: '7 min',

        tags: [
          'boolean',
          'logic',
        ],

        prerequisites: [
          'relational-operators',
        ],

        objectives: [
          'Use AND/OR/NOT',
          'Build complex conditions',
        ],
      },
    ],

    exercises: [
      'Build simple calculator',
      'Compare two numbers',
      'Evaluate boolean expressions',
    ],

    miniTasks: [
      'Even odd checker',
      'Percentage calculator',
      'Grade evaluator',
    ],

    project: {
      title: 'Scientific Calculator',

      description:
        'Build a multi-operation Java calculator with advanced operations.',

      difficulty: 'Beginner',
    },
  },
]