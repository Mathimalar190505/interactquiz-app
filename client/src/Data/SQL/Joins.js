// SQL Joins: 10 Questions

export const SQL_JOINS_QUESTIONS = [
  {
    question: "Which type of join returns only the matching rows from both tables?",
    options: ["LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "INNER JOIN"],
    answer: "INNER JOIN",
  },
  {
    question: "Which join returns all rows from the left table, and the matching rows from the right table?",
    options: ["RIGHT JOIN", "LEFT JOIN", "INNER JOIN", "CROSS JOIN"],
    answer: "LEFT JOIN",
  },
  {
    question: "Which join returns all rows when there is a match in one of the tables?",
    options: ["FULL OUTER JOIN", "LEFT JOIN", "INNER JOIN", "SELF JOIN"],
    answer: "FULL OUTER JOIN",
  },
  {
    question: "What is an alternative name for a LEFT JOIN?",
    options: ["LEFT INNER JOIN", "LEFT OUTER JOIN", "PRIMARY JOIN", "EQUI JOIN"],
    answer: "LEFT OUTER JOIN",
  },
  {
    question: "Which join is used to combine every row of the first table with every row of the second table?",
    options: ["EQUI JOIN", "NATURAL JOIN", "CROSS JOIN", "FULL JOIN"],
    answer: "CROSS JOIN",
  },
  {
    question: "A join where a table is joined with itself is known as a:",
    options: ["RECURSIVE JOIN", "SELF JOIN", "INNER JOIN", "OUTER JOIN"],
    answer: "SELF JOIN",
  },
  {
    question: "In a RIGHT JOIN, if there is no match in the left table, what values are returned for the left columns?",
    options: ["0", "NULL", "EMPTY STRING", "Error"],
    answer: "NULL",
  },
  {
    question: "What is the key used to link two tables in a relational database?",
    options: ["PRIMARY KEY", "FOREIGN KEY", "CANDIDATE KEY", "UNIQUE KEY"],
    answer: "FOREIGN KEY",
  },
  {
    question: "Which join type is equivalent to a FULL JOIN minus the INNER JOIN results (non-matching rows only)?",
    options: ["SEMI JOIN", "ANTI JOIN", "EXCLUSIVE JOIN", "FULL OUTER JOIN EXCLUDING INNER"],
    answer: "FULL OUTER JOIN EXCLUDING INNER",
  },
  {
    question: "What is the result set of an INNER JOIN with no matching keys?",
    options: ["All rows from the first table", "All rows from the second table", "An error", "An empty set"],
    answer: "An empty set",
  },
];