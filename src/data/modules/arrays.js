const arraysModule = {
  id: 6,

  title: 'Java Arrays',

  slug: 'java-arrays',

  description:
    'Master single and multidimensional arrays in Java, including memory allocation, traversal, searching, sorting, and common array operations.',

  level: 'Beginner',

  duration: '4 Hours',

  objectives: [
    'Understand array memory allocation in Java',
    'Declare and initialize arrays',
    'Iterate through arrays using loops',
    'Work with multidimensional arrays',
    'Perform searching and sorting operations',
    'Use the Arrays utility class effectively',
  ],

  lessons: [
    {
      title: 'Introduction to Arrays',

      slug: 'arrays-introduction',

      folder: 'arrays',

      difficulty: 'Beginner',

      readingTime: '12 mins',

      tags: ['arrays', 'basics'],
    },

    {
      title: 'Looping and Iterating Arrays',

      slug: 'array-looping',

      folder: 'arrays',

      difficulty: 'Beginner',

      readingTime: '10 mins',

      tags: ['loops', 'iteration'],
    },

    {
      title: 'Multi-Dimensional Arrays',

      slug: 'multi-dimensional-arrays',

      folder: 'arrays',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['matrix', '2d-arrays'],
    },

    {
      title: 'Common Array Operations',

      slug: 'array-operations',

      folder: 'arrays',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['utility', 'manipulation'],
    },
  ],

  exercises: [
    'Find the maximum and minimum elements in an integer array.',

    'Reverse an array of strings without using external libraries.',

    'Calculate the transpose of a 2D matrix.',

    'Search for a specific element using linear search.',
  ],

  miniTasks: [
    'Implement a manual array resize simulation.',

    'Remove duplicate values from an integer array.',

    'Create a simple marks calculator using arrays.',
  ],

  project: {
    title: 'Grade Book Analysis System',

    description:
      'Build an application that stores student grades using multidimensional arrays and calculates averages, rankings, and analytics.',

    difficulty: 'Beginner',
  },
}

export default arraysModule