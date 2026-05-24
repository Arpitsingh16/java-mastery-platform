const variablesModule = {
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
}

export default variablesModule