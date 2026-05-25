const methodsModule = {
  id: 5,

  title: 'Methods and Modifiers',

  slug: 'methods-modifiers',

  description:
    'Learn how to create reusable methods, understand parameter passing, method overloading, access modifiers, and structured Java program design.',

  level: 'Beginner',

  duration: '4 Hours',

  objectives: [
    'Create reusable Java methods',
    'Understand parameters and return values',
    'Learn pass-by-value behavior in Java',
    'Use method overloading effectively',
    'Understand access modifiers and encapsulation',
    'Work with static and final keywords',
  ],

  lessons: [
    {
      title: 'Introduction to Methods',

      slug: 'methods-introduction',

      folder: 'methods',

      difficulty: 'Beginner',

      readingTime: '10 mins',

      tags: ['methods', 'basics'],
    },

    {
      title: 'Method Parameters and Pass-by-Value',

      slug: 'method-parameters',

      folder: 'methods',

      difficulty: 'Beginner',

      readingTime: '12 mins',

      tags: ['parameters', 'arguments'],
    },

    {
      title: 'Return Types and Values',

      slug: 'return-types',

      folder: 'methods',

      difficulty: 'Beginner',

      readingTime: '10 mins',

      tags: ['return', 'void'],
    },

    {
      title: 'Method Overloading',

      slug: 'method-overloading',

      folder: 'methods',

      difficulty: 'Intermediate',

      readingTime: '12 mins',

      tags: ['overloading', 'polymorphism'],
    },
  ],

  exercises: [
    'Create overloaded methods for area calculations.',

    'Demonstrate pass-by-value behavior in Java.',

    'Create methods using different return types.',

    'Build utility methods for mathematical operations.',
  ],

  miniTasks: [
    'Create a static visitor counter system.',

    'Build a recursive factorial calculator.',

    'Implement reusable validation methods.',
  ],

  project: {
    title: 'Dynamic Encryption and Encoding Toolbox',

    description:
      'Build a modular command-line utility using reusable methods, overloaded operations, static configurations, and encapsulated helper utilities.',

    difficulty: 'Beginner',
  },
}

export default methodsModule