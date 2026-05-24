export const projectDetails = {
  'atm-simulation-system': {
    title: 'ATM Simulation System',

    category: 'Control Flow Project',

    difficulty: 'Beginner',

    duration: '3-5 Hours',

    objective:
      'Build a console-based ATM application using conditions, loops, and switch statements.',

    description:
      'This project helps learners combine Java control flow concepts into a realistic banking simulation.',

    features: [
      'PIN authentication',
      'Balance checking',
      'Cash withdrawal',
      'Cash deposit',
      'Exit system',
      'Menu-driven navigation',
    ],

    conceptsUsed: [
      'if-else',
      'switch statements',
      'loops',
      'variables',
      'methods',
      'user input',
    ],

    folderStructure: `
ATM-Simulation/
│
├── Main.java
├── ATM.java
├── UserAccount.java
`,

    implementationSteps: [
      {
        step: 1,

        title: 'Create Main Class',

        description:
          'Create the entry point of the application.',
      },

      {
        step: 2,

        title: 'Build Login System',

        description:
          'Ask user for ATM PIN and validate credentials.',
      },

      {
        step: 3,

        title: 'Create Menu System',

        description:
          'Use switch statements for ATM menu options.',
      },

      {
        step: 4,

        title: 'Implement Withdrawal',

        description:
          'Deduct balance after validating funds.',
      },

      {
        step: 5,

        title: 'Implement Deposit',

        description:
          'Allow user to deposit money into account.',
      },

      {
        step: 6,

        title: 'Loop Until Exit',

        description:
          'Keep ATM running until user exits.',
      },
    ],

    bonusChallenges: [
      'Add multiple user accounts',
      'Limit withdrawal attempts',
      'Generate transaction receipts',
      'Add transfer money feature',
    ],

    expectedOutput: `
===== ATM MENU =====

1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit

Enter Choice:
`,
  },
}