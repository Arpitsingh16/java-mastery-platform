const collectionsFrameworkModule = {
  id: 9,

  title: 'Java Collections Framework',

  slug: 'collections-framework',

  description:
    'Deep dive into Java data structures including List, Set, Queue, and Map interfaces along with their implementations and performance characteristics.',

  level: 'Intermediate',

  duration: '8 Hours',

  objectives: [
    'Understand the Java Collections Framework hierarchy',
    'Choose appropriate collections using Big O complexity',
    'Master ArrayList, LinkedList, HashSet, and HashMap',
    'Understand Comparable vs Comparator',
    'Learn collection traversal and iterators',
    'Work with sorting and searching operations',
  ],

  lessons: [
    {
      title: 'Working with ArrayList',

      slug: 'arraylist',

      folder: 'collections',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['list', 'arraylist'],
    },

    {
      title: 'Deep Dive into LinkedList',

      slug: 'linkedlist',

      folder: 'collections',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['list', 'linkedlist'],
    },

    {
      title: 'Key-Value Mapping with HashMap',

      slug: 'hashmap',

      folder: 'collections',

      difficulty: 'Intermediate',

      readingTime: '18 mins',

      tags: ['map', 'hashmap'],
    },

    {
      title: 'Unique Elements with HashSet',

      slug: 'hashset',

      folder: 'collections',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['set', 'hashset'],
    },

    {
      title: 'Iterating Collections using Iterator',

      slug: 'iterator',

      folder: 'collections',

      difficulty: 'Intermediate',

      readingTime: '12 mins',

      tags: ['iterator', 'traversal'],
    },

    {
      title: 'Sorting Collections',

      slug: 'collections-sort',

      folder: 'collections',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['sorting', 'comparable'],
    },
  ],

  exercises: [
    'Count the frequency of words in a paragraph using HashMap.',

    'Remove duplicate elements from an ArrayList while preserving insertion order.',

    'Sort Employee objects using Comparable and Comparator.',

    'Create a student management system using collections.',
  ],

  miniTasks: [
    'Simulate a bank queue using Queue interface.',

    'Create a contact manager using HashMap.',

    'Build a voting system using HashSet.',
  ],

  project: {
    title: 'Inventory and Stock Management System',

    description:
      'Develop a backend inventory management system using HashMaps, TreeMaps, and PriorityQueues for efficient stock handling and analytics.',

    difficulty: 'Intermediate',
  },
}

export default collectionsFrameworkModule