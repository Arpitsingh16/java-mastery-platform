
const controlFlow = {
  id: 4,

  title: 'Control Flow',

  slug: 'control-flow',

  level: 'Beginner',

  duration: '5-6 Hours',

  description:
    'Master conditions, branching, and loops in Java.',

  objectives: [
    'Understand decision making',
    'Use conditional statements',
    'Master loops',
    'Control execution flow',
  ],

  lessons: [
    {
      id: 1,

      title: 'If Statements',

      slug: 'if-statements',

      difficulty: 'Beginner',

      readingTime: '7 min',

      tags: [
        'if',
        'conditions',
      ],

      prerequisites: [
        'logical-operators',
      ],

      objectives: [
        'Write conditional logic',
        'Evaluate expressions',
      ],
    },

    {
      id: 2,

      title: 'If Else Statements',

      slug: 'if-else-statements',

      difficulty: 'Beginner',

      readingTime: '8 min',

      tags: [
        'if-else',
        'branching',
      ],

      prerequisites: [
        'if-statements',
      ],

      objectives: [
        'Handle alternative conditions',
      ],
    },

    {
      id: 3,

      title: 'Nested If Statements',

      slug: 'nested-if-statements',

      difficulty: 'Beginner',

      readingTime: '8 min',

      tags: [
        'nested-if',
        'conditions',
      ],

      prerequisites: [
        'if-else-statements',
      ],

      objectives: [
        'Build complex conditions',
      ],
    },

    {
      id: 4,

      title: 'Switch Statements',

      slug: 'switch-statements',

      difficulty: 'Beginner',

      readingTime: '6 min',

      tags: [
        'switch',
        'branching',
      ],

      prerequisites: [
        'nested-if-statements',
      ],

      objectives: [
        'Use switch efficiently',
      ],
    },

    {
      id: 5,

      title: 'For Loops',

      slug: 'for-loops',

      difficulty: 'Beginner',

      readingTime: '10 min',

      tags: [
        'loops',
        'for-loop',
      ],

      prerequisites: [
        'switch-statements',
      ],

      objectives: [
        'Iterate efficiently',
      ],
    },

    {
      id: 6,

      title: 'While Loops',

      slug: 'while-loops',

      difficulty: 'Beginner',

      readingTime: '8 min',

      tags: [
        'while-loop',
        'loops',
      ],

      prerequisites: [
        'for-loops',
      ],

      objectives: [
        'Run condition-based loops',
      ],
    },

    {
      id: 7,

      title: 'Do While Loop',

      slug: 'do-while-loop',

      difficulty: 'Beginner',

      readingTime: '6 min',

      tags: [
        'do-while',
        'loops',
      ],

      prerequisites: [
        'while-loops',
      ],

      objectives: [
        'Understand guaranteed execution',
      ],
    },

    {
      id: 8,

      title: 'Break and Continue',

      slug: 'break-continue',

      difficulty: 'Beginner',

      readingTime: '7 min',

      tags: [
        'break',
        'continue',
      ],

      prerequisites: [
        'do-while-loop',
      ],

      objectives: [
        'Control loop execution',
      ],
    },
  ],

  exercises: [
    'Check positive/negative number',
    'Grade evaluation system',
    'Print multiplication table',
    'Prime number checker',
    'Factorial calculator',
  ],

  miniTasks: [
    'ATM PIN checker',
    'Number guessing game',
    'Pattern printing',
    'Simple menu system',
  ],

  project: {
    title: 'ATM Simulation System',

    description:
      'Build a complete ATM console application using conditions and loops.',

    difficulty: 'Beginner',
  },
}
export default controlFlow