// SQL Aggregate Functions: 10 Questions

export const SQL_AGGREGATE_QUESTIONS = [
  {
    question: "Which function calculates the average value of a numeric column?",
    options: ["TOTAL()", "MEAN()", "AVG()", "SUM()"],
    answer: "AVG()",
  },
  {
    question: "Which function is used to count the number of rows that match a specified criterion?",
    options: ["SIZE()", "ROWS()", "COUNT()", "NUMBER()"],
    answer: "COUNT()",
  },
  {
    question: "Which clause is necessary when using aggregate functions with non-aggregated columns?",
    options: ["ORDER BY", "WHERE", "HAVING", "GROUP BY"],
    answer: "GROUP BY",
  },
  {
    question: "Which function returns the lowest value in a column?",
    options: ["LOWER()", "MIN()", "SMALLEST()", "BOTTOM()"],
    answer: "MIN()",
  },
  {
    question: "The `HAVING` clause is used to filter groups, similar to how the `WHERE` clause filters:",
    options: ["Columns", "Tables", "Rows", "Databases"],
    answer: "Rows",
  },
  {
    question: "Which function returns the highest value in a column?",
    options: ["MAX()", "TOP()", "HIGH()", "GREATEST()"],
    answer: "MAX()",
  },
  {
    question: "What will `COUNT(*)` return?",
    options: ["Count of non-null values", "Count of distinct values", "Total number of rows, including nulls", "Count of unique rows only"],
    answer: "Total number of rows, including nulls",
  },
  {
    question: "Which function calculates the sum of a numeric column?",
    options: ["ADD()", "TOTAL()", "SUM()", "AGGREGATE()"],
    answer: "SUM()",
  },
  {
    question: "When should the `HAVING` clause be used instead of the `WHERE` clause?",
    options: ["To filter before grouping", "To filter single rows", "To filter the results of an aggregate function", "They are interchangeable"],
    answer: "To filter the results of an aggregate function",
  },
  {
    question: "The `DISTINCT` keyword can be used within which aggregate function to count only unique values?",
    options: ["SUM()", "MAX()", "AVG()", "COUNT()"],
    answer: "COUNT()",
  },
];