const operatorsModule = {
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
}

export default operatorsModule