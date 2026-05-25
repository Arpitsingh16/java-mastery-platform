const dsaJavaModule = {
  id: 15,

  title: 'Data Structures and Algorithms in Java',

  slug: 'dsa-java',

  description:
    'Implement core data structures and classic algorithms using Java while mastering problem solving, recursion, and complexity analysis.',

  level: 'Advanced',

  duration: '12 Hours',

  objectives: [
    'Understand Big O notation and complexity analysis',
    'Implement stacks, queues, and linked lists',
    'Build and traverse binary search trees',
    'Master sorting and searching algorithms',
    'Apply recursion effectively',
    'Improve algorithmic problem-solving skills',
  ],

  lessons: [
    {
      title: 'Introduction to Sorting Algorithms',

      slug: 'sorting-algorithms',

      folder: 'dsa',

      difficulty: 'Intermediate',

      readingTime: '20 mins',

      tags: ['sorting', 'algorithms'],
    },

    {
      title: 'Understanding Searching Algorithms',

      slug: 'searching-algorithms',

      folder: 'dsa',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['searching', 'algorithms'],
    },

    {
      title: 'Mastering Recursion',

      slug: 'recursion',

      folder: 'dsa',

      difficulty: 'Intermediate',

      readingTime: '18 mins',

      tags: ['recursion', 'logic'],
    },

    {
      title: 'Implementing Stacks from Scratch',

      slug: 'stacks',

      folder: 'dsa',

      difficulty: 'Advanced',

      readingTime: '15 mins',

      tags: ['stack', 'data-structures'],
    },

    {
      title: 'Implementing Queues from Scratch',

      slug: 'queues',

      folder: 'dsa',

      difficulty: 'Advanced',

      readingTime: '15 mins',

      tags: ['queue', 'data-structures'],
    },

    {
      title: 'Singly and Doubly Linked Lists',

      slug: 'linked-lists',

      folder: 'dsa',

      difficulty: 'Advanced',

      readingTime: '25 mins',

      tags: ['linked-list', 'data-structures'],
    },

    {
      title: 'Binary Search Trees and Operations',

      slug: 'binary-search',

      folder: 'dsa',

      difficulty: 'Advanced',

      readingTime: '22 mins',

      tags: ['binary-tree', 'search'],
    },

    {
      title: 'Analysis of Time and Space Complexity',

      slug: 'time-complexity',

      folder: 'dsa',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['big-o', 'analysis'],
    },
  ],

  exercises: [
    'Write a recursive function to reverse a linked list.',

    'Implement a Min Stack supporting O(1) minimum retrieval.',

    'Perform tree traversals iteratively.',

    'Implement binary search recursively.',

    'Solve array rotation problems efficiently.',
  ],

  miniTasks: [
    'Detect cycles in linked lists.',

    'Build a stack using arrays.',

    'Implement queue operations using linked lists.',
  ],

  project: {
    title: 'Text Editor Undo-Redo Engine',

    description:
      'Design a text editor engine using stacks, queues, and trie-based autocomplete systems for advanced DSA practice.',

    difficulty: 'Advanced',
  },
}

export default dsaJavaModule