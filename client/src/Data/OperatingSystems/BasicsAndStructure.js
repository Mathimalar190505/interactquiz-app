// OS Basics and Structure: 10 Questions

export const OS_BASICS_QUESTIONS = [
  {
    question: "What is the core component of an operating system?",
    options: ["Shell", "BIOS", "Kernel", "Compiler"],
    answer: "Kernel",
  },
  {
    question: "Which type of OS handles jobs sequentially, often used in older mainframes?",
    options: ["Real-Time OS", "Batch OS", "Distributed OS", "Time-Sharing OS"],
    answer: "Batch OS",
  },
  {
    question: "What mode of operation allows the OS to execute privileged instructions?",
    options: ["User Mode", "Safe Mode", "Kernel Mode", "Protected Mode"],
    answer: "Kernel Mode",
  },
  {
    question: "A computer program in execution is called a:",
    options: ["Thread", "Process", "Program Counter", "Job"],
    answer: "Process",
  },
  {
    question: "Which OS structure has the kernel divided into different layers?",
    options: ["Monolithic System", "Microkernel", "Layered Approach", "Virtual Machine"],
    answer: "Layered Approach",
  },
  {
    question: "The OS maintains a data structure called the PCB for each process. What does PCB stand for?",
    options: ["Program Control Block", "Process Control Bus", "Primary Control Buffer", "Process Control Block"],
    answer: "Process Control Block",
  },
  {
    question: "Which system call is used to create a new process in Unix/Linux?",
    options: ["exec()", "new()", "create()", "fork()"],
    answer: "fork()",
  },
  {
    question: "What is the purpose of a System Call?",
    options: ["To execute assembly code", "To allow user programs to request services from the kernel", "To manage network connections", "To compile source code"],
    answer: "To allow user programs to request services from the kernel",
  },
  {
    question: "A small, fundamental unit of CPU utilization that allows a process to have multiple control flows is a:",
    options: ["Subroutine", "Process", "Thread", "Program"],
    answer: "Thread",
  },
  {
    question: "Which OS type is designed to handle events and data within a strict time frame?",
    options: ["Distributed OS", "Network OS", "Real-Time OS", "Single-User OS"],
    answer: "Real-Time OS",
  },
];