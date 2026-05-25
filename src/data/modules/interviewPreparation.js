const interviewPreparationModule = {
  id: 17,

  title: 'Java Interview Preparation',

  slug: 'interview-preparation',

  description:
    'Prepare for Java technical interviews by mastering core concepts, OOP, collections, multithreading, JDBC, DSA, and problem-solving techniques.',

  level: 'Advanced',

  duration: '10 Hours',

  objectives: [
    'Strengthen core Java fundamentals',
    'Master common interview questions',
    'Understand concurrency and multithreading problems',
    'Practice DSA interview challenges',
    'Improve object-oriented design thinking',
    'Prepare for coding interviews confidently',
  ],

  lessons: [
    {
      title: 'Core Java Interview Questions',

      slug: 'java-interview-questions',

      folder: 'interview-prep',

      difficulty: 'Intermediate',

      readingTime: '20 mins',

      tags: ['interview', 'core-java'],
    },

    {
      title: 'OOPs Interview Questions',

      slug: 'oops-interview-questions',

      folder: 'interview-prep',

      difficulty: 'Intermediate',

      readingTime: '18 mins',

      tags: ['interview', 'oop'],
    },

    {
      title: 'Java Collections Interview Questions',

      slug: 'collections-interview-questions',

      folder: 'interview-prep',

      difficulty: 'Intermediate',

      readingTime: '20 mins',

      tags: ['interview', 'collections'],
    },

    {
      title: 'Multithreading Interview Questions',

      slug: 'multithreading-interview-questions',

      folder: 'interview-prep',

      difficulty: 'Advanced',

      readingTime: '22 mins',

      tags: ['interview', 'multithreading'],
    },

    {
      title: 'JDBC Interview Questions',

      slug: 'jdbc-interview-questions',

      folder: 'interview-prep',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['interview', 'jdbc'],
    },

    {
      title: 'DSA Interview Questions',

      slug: 'dsa-interview-questions',

      folder: 'interview-prep',

      difficulty: 'Advanced',

      readingTime: '25 mins',

      tags: ['interview', 'dsa'],
    },
  ],

  exercises: [
    'Compare String, StringBuilder, and StringBuffer performance.',

    'Fix race conditions using synchronization.',

    'Implement thread-safe singleton patterns.',

    'Solve common Java coding interview problems.',
  ],

  miniTasks: [
    'Analyze memory leaks conceptually.',

    'Debug concurrent modification issues.',

    'Practice JVM and garbage collection interview questions.',
  ],

  project: {
    title: 'Enterprise Technical Evaluation Portal',

    description:
      'Build a technical evaluation system that validates Java code structures, analyzes performance, and tests algorithmic implementations.',

    difficulty: 'Advanced',
  },
}

export default interviewPreparationModule