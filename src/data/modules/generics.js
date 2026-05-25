const genericsModule = {
  id: 12,

  title: 'Java Generics',

  slug: 'java-generics',

  description:
    'Build reusable and type-safe Java applications using generics, bounded types, wildcards, and flexible reusable abstractions.',

  level: 'Advanced',

  duration: '5 Hours',

  objectives: [
    'Understand type safety using generics',
    'Create generic classes and methods',
    'Apply bounded wildcards effectively',
    'Understand PECS principles',
    'Learn type erasure concepts',
    'Build reusable generic utilities',
  ],

  lessons: [
    {
      title: 'Creating Generic Classes',

      slug: 'generic-classes',

      folder: 'generics',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['generics', 'classes'],
    },

    {
      title: 'Implementing Generic Methods',

      slug: 'generic-methods',

      folder: 'generics',

      difficulty: 'Advanced',

      readingTime: '15 mins',

      tags: ['generics', 'methods'],
    },

    {
      title: 'Understanding Wildcards',

      slug: 'wildcards',

      folder: 'generics',

      difficulty: 'Advanced',

      readingTime: '20 mins',

      tags: ['wildcards', 'pecs'],
    },
  ],

  exercises: [
    'Create a generic method that swaps two array elements.',

    'Implement a bounded generic function for numerical calculations.',

    'Write a generic utility following PECS principles.',

    'Create a reusable generic container class.',
  ],

  miniTasks: [
    'Build a generic KeyValuePair model.',

    'Create a generic validation utility.',

    'Implement a reusable generic repository structure.',
  ],

  project: {
    title: 'Universal Cache Repository Infrastructure',

    description:
      'Build a reusable in-memory caching infrastructure using advanced generics, type-safe mappings, and flexible generic constraints.',

    difficulty: 'Advanced',
  },
}

export default genericsModule