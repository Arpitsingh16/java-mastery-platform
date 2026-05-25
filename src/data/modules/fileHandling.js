const fileHandlingModule = {
  id: 10,

  title: 'File I/O and NIO2',

  slug: 'file-handling',

  description:
    'Learn file handling in Java using streams, buffered I/O, and modern NIO2 APIs for efficient data processing.',

  level: 'Intermediate',

  duration: '5 Hours',

  objectives: [
    'Work with FileReader and FileWriter',
    'Understand byte streams and character streams',
    'Use BufferedReader and BufferedWriter',
    'Learn modern NIO2 APIs including Path and Files',
    'Read and write files efficiently',
    'Handle large file processing safely',
  ],

  lessons: [
    {
      title: 'Reading Files with FileReader',

      slug: 'file-reader',

      folder: 'file-handling',

      difficulty: 'Intermediate',

      readingTime: '12 mins',

      tags: ['io', 'reading'],
    },

    {
      title: 'Writing Files with FileWriter',

      slug: 'file-writer',

      folder: 'file-handling',

      difficulty: 'Intermediate',

      readingTime: '12 mins',

      tags: ['io', 'writing'],
    },

    {
      title: 'High-Performance I/O with BufferedReader',

      slug: 'buffered-reader',

      folder: 'file-handling',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['buffered', 'optimization'],
    },
  ],

  exercises: [
    'Read a text file and count occurrences of a word.',

    'Copy an image file using buffered streams.',

    'Serialize and deserialize Java objects.',

    'Append logs to an existing file safely.',
  ],

  miniTasks: [
    'Build a folder watcher using NIO2.',

    'Create a notes-saving utility.',

    'Implement a simple log management system.',
  ],

  project: {
    title: 'Automated CSV Transaction Database Engine',

    description:
      'Build a transaction processing engine that reads CSV files, validates records, logs errors, and generates analytical reports.',

    difficulty: 'Intermediate',
  },
}

export default fileHandlingModule