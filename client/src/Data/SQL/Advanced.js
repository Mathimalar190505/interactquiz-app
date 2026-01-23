// SQL Advanced Topics (Subqueries & Views): 10 Questions

export const SQL_ADVANCED_QUESTIONS = [
  {
    question: "A query embedded within another SQL query is called a:",
    options: ["Nested Query", "Inner Query", "Subquery", "Embedded Query"],
    answer: "Subquery",
  },
  {
    question: "Which operator is typically used in the outer query to check for the existence of rows returned by a subquery?",
    options: ["EXISTS", "IN", "IS NULL", "ANY"],
    answer: "EXISTS",
  },
  {
    question: "What is a virtual table based on the result-set of an SQL statement?",
    options: ["Table Clone", "VIEW", "Temporary Table", "INDEX"],
    answer: "VIEW",
  },
  {
    question: "Which command is used to create a virtual table from a query?",
    options: ["MAKE VIEW", "CREATE VIRTUAL TABLE", "CREATE VIEW", "DEFINE VIEW"],
    answer: "CREATE VIEW",
  },
  {
    question: "When is a correlated subquery executed?",
    options: ["Once, before the main query", "Once, after the main query", "Once for every row processed by the outer query", "Only when the outer query returns zero rows"],
    answer: "Once for every row processed by the outer query",
  },
  {
    question: "What is the main benefit of using a VIEW?",
    options: ["Faster data insertion", "Data security and complexity hiding", "Automatic indexing", "Real-time backups"],
    answer: "Data security and complexity hiding",
  },
  {
    question: "Which keyword can be used with a subquery to compare a value to every value in the subquery result set?",
    options: ["EACH", "EVERY", "ALL", "BETWEEN"],
    answer: "ALL",
  },
  {
    question: "What are two types of subqueries?",
    options: ["Horizontal and Vertical", "Correlated and Non-correlated", "Simple and Complex", "Insert and Update"],
    answer: "Correlated and Non-correlated",
  },
  {
    question: "Which of the following is NOT generally permitted in a simple VIEW definition?",
    options: ["SELECT statement", "JOIN clause", "ORDER BY clause", "WHERE clause"],
    answer: "ORDER BY clause", // ORDER BY is generally only allowed if TOP or LIMIT is also used.
  },
  {
    question: "What is the operation of creating an index on a table primarily used for?",
    options: ["Reducing storage space", "Speeding up data retrieval", "Enforcing data constraints", "Preventing SQL injection"],
    answer: "Speeding up data retrieval",
  },
];