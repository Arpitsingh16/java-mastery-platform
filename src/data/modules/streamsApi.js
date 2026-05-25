const streamsApiModule = {
  id: 13,

  title: 'Streams API and Lambdas',

  slug: 'streams-api-lambdas',

  description:
    'Learn functional programming in Java using streams, lambda expressions, filtering, mapping, reductions, and parallel stream processing.',

  level: 'Intermediate',

  duration: '6 Hours',

  objectives: [
    'Understand lambda expressions and functional interfaces',
    'Use stream pipelines for data processing',
    'Master filter, map, flatMap, and reduce operations',
    'Work with collectors and grouping operations',
    'Understand lazy vs eager stream execution',
    'Use parallel streams safely',
  ],

  lessons: [
    {
      title: 'Filtering Data with Stream Filter',

      slug: 'stream-filter',

      folder: 'streams-api',

      difficulty: 'Intermediate',

      readingTime: '12 mins',

      tags: ['streams', 'filter'],
    },

    {
      title: 'Transforming Data with Stream Map',

      slug: 'stream-map',

      folder: 'streams-api',

      difficulty: 'Intermediate',

      readingTime: '12 mins',

      tags: ['streams', 'map'],
    },

    {
      title: 'Aggregating Data with Stream Reduce',

      slug: 'stream-reduce',

      folder: 'streams-api',

      difficulty: 'Advanced',

      readingTime: '15 mins',

      tags: ['streams', 'reduce'],
    },

    {
      title: 'Collecting Results with Stream Collect',

      slug: 'stream-collect',

      folder: 'streams-api',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['streams', 'collectors'],
    },
  ],

  exercises: [
    'Filter even numbers and collect them into a sorted set.',

    'Flatten nested collections using flatMap.',

    'Group employees by department using Collectors.groupingBy.',

    'Calculate totals using reduce operations.',
  ],

  miniTasks: [
    'Convert iterative loops into stream pipelines.',

    'Generate prime numbers using IntStream.',

    'Build a functional analytics utility.',
  ],

  project: {
    title: 'Real-Time E-Commerce Analytics Dashboard',

    description:
      'Build a reporting backend using streams, collectors, parallel processing, and functional transformations for transaction analytics.',

    difficulty: 'Intermediate',
  },
}

export default streamsApiModule