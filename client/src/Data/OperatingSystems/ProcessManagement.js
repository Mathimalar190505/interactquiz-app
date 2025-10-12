// Process Management: 10 Questions

export const OS_PROCESS_MANAGEMENT_QUESTIONS = [
  {
    question: "Which scheduling algorithm is non-preemptive and selects the job that will take the least time?",
    options: ["Round Robin", "FCFS", "SJF (Shortest Job First)", "Priority Scheduling"],
    answer: "SJF (Shortest Job First)",
  },
  {
    question: "What is the technique called where the CPU rapidly switches between multiple processes?",
    options: ["Context Switching", "Process Creation", "Throttling", "Paging"],
    answer: "Context Switching",
  },
  {
    question: "Which scheduling algorithm gives each process an equal time slice (quantum)?",
    options: ["Priority", "FCFS", "SJF", "Round Robin"],
    answer: "Round Robin",
  },
  {
    question: "What is the condition called when a set of processes are blocked indefinitely, waiting for resources held by each other?",
    options: ["Starvation", "Deadlock", "Livelock", "Thrashing"],
    answer: "Deadlock",
  },
  {
    question: "What is the maximum number of simultaneous threads a single-core CPU can execute?",
    options: ["Zero", "One", "Two", "Unlimited"],
    answer: "One",
  },
  {
    question: "A process that is waiting for some event to occur (e.g., I/O completion) is in which state?",
    options: ["New", "Ready", "Running", "Waiting"],
    answer: "Waiting",
  },
  {
    question: "Which mechanism is used to ensure that only one process can access a shared resource at a time?",
    options: ["Spooling", "Paging", "Mutual Exclusion", "Buffering"],
    answer: "Mutual Exclusion",
  },
  {
    question: "The part of the program where a shared resource is accessed is known as the:",
    options: ["Critical Section", "Semaphore", "Mutex", "Monitor"],
    answer: "Critical Section",
  },
  {
    question: "Which synchronization primitive is an integer variable used for signaling among processes?",
    options: ["Lock", "Condition Variable", "Semaphore", "Monitor"],
    answer: "Semaphore",
  },
  {
    question: "What is a major problem with the FCFS (First-Come, First-Served) scheduling algorithm?",
    options: ["High overhead", "Starvation", "Convoy effect (short jobs waiting for long jobs)", "Excessive context switches"],
    answer: "Convoy effect (short jobs waiting for long jobs)",
  },
];