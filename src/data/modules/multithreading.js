const multithreadingModule = {
  id: 11,

  title: 'Multithreading and Concurrency',

  slug: 'multithreading-concurrency',

  description:
    'Learn concurrent programming in Java using threads, synchronization, executors, thread-safe collections, and asynchronous task management.',

  level: 'Advanced',

  duration: '8 Hours',

  objectives: [
    'Understand thread creation and execution',
    'Implement Runnable and Callable interfaces',
    'Handle synchronization and race conditions',
    'Work with ExecutorService and thread pools',
    'Use thread-safe collections effectively',
    'Understand deadlocks and concurrency issues',
  ],

  lessons: [
    {
      title: 'Introduction to Threads',

      slug: 'threads',

      folder: 'multithreading',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['threads', 'basics'],
    },

    {
      title: 'The Thread Lifecycle',

      slug: 'thread-lifecycle',

      folder: 'multithreading',

      difficulty: 'Advanced',

      readingTime: '18 mins',

      tags: ['lifecycle', 'states'],
    },

    {
      title: 'Implementing the Runnable Interface',

      slug: 'runnable-interface',

      folder: 'multithreading',

      difficulty: 'Intermediate',

      readingTime: '12 mins',

      tags: ['runnable', 'concurrency'],
    },

    {
      title: 'Thread Synchronization',

      slug: 'synchronization',

      folder: 'multithreading',

      difficulty: 'Advanced',

      readingTime: '20 mins',

      tags: ['lock', 'synchronization'],
    },

    {
      title: 'Thread Priority and Scheduling',

      slug: 'thread-priority',

      folder: 'multithreading',

      difficulty: 'Intermediate',

      readingTime: '12 mins',

      tags: ['priority', 'threads'],
    },
  ],

  exercises: [
    'Create two synchronized counting threads.',

    'Implement a Producer-Consumer system.',

    'Use ExecutorService for asynchronous tasks.',

    'Create thread-safe shared resources.',
  ],

  miniTasks: [
    'Simulate a deadlock condition.',

    'Compare synchronized collections with ConcurrentHashMap.',

    'Build a parallel task executor.',
  ],

  project: {
    title: 'High-Throughput Web Scraper and Log Analyzer',

    description:
      'Build a concurrent data processing engine using thread pools, thread-safe collections, asynchronous tasks, and logging systems.',

    difficulty: 'Advanced',
  },
}

export default multithreadingModule