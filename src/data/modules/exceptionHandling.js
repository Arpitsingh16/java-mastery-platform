const exceptionHandlingModule = {
  id: 8,

  title: 'Exception Handling',

  slug: 'exception-handling',

  description:
    'Build robust and fault-tolerant Java applications using exception handling, custom exceptions, and resource safety mechanisms.',

  level: 'Intermediate',

  duration: '4 Hours',

  objectives: [
    'Differentiate between checked and unchecked exceptions',
    'Implement try-catch-finally structures',
    'Use try-with-resources for automatic resource management',
    'Create custom exception classes',
    'Understand exception propagation and chaining',
    'Handle runtime failures safely',
  ],

  lessons: [
    {
      title: 'Exception Handling with Try-Catch',

      slug: 'try-catch',

      folder: 'exception-handling',

      difficulty: 'Beginner',

      readingTime: '15 mins',

      tags: ['exceptions', 'try-catch'],
    },

    {
      title: 'The Finally Block',

      slug: 'finally-block',

      folder: 'exception-handling',

      difficulty: 'Beginner',

      readingTime: '10 mins',

      tags: ['finally', 'cleanup'],
    },

    {
      title: 'Working with Throw and Throws',

      slug: 'throw-throws',

      folder: 'exception-handling',

      difficulty: 'Intermediate',

      readingTime: '12 mins',

      tags: ['throw', 'throws'],
    },

    {
      title: 'Creating Custom Exceptions',

      slug: 'custom-exceptions',

      folder: 'exception-handling',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['custom', 'robustness'],
    },
  ],

  exercises: [
    'Handle ArithmeticException and NumberFormatException using multi-catch.',

    'Create a custom exception for invalid login attempts.',

    'Implement try-with-resources using file handling.',

    'Demonstrate exception chaining in Java.',
  ],

  miniTasks: [
    'Build a validation engine with InvalidAgeException.',

    'Log stack traces and exception messages properly.',

    'Create a safe calculator with exception handling.',
  ],

  project: {
    title: 'Secure User Registration Gateway',

    description:
      'Build a secure user registration system with custom exceptions, validation logic, and safe runtime error handling.',

    difficulty: 'Intermediate',
  },
}

export default exceptionHandlingModule