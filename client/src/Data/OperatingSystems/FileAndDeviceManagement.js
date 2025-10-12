// File and Device Management: 10 Questions

export const OS_FILE_DEVICE_QUESTIONS = [
  {
    question: "A File Control Block (FCB) contains information about a file, such as:",
    options: ["CPU usage", "Page table entries", "File permissions and size", "Process state"],
    answer: "File permissions and size",
  },
  {
    question: "Which file access method reads and writes records in sequence?",
    options: ["Random Access", "Indexed Access", "Sequential Access", "Direct Access"],
    answer: "Sequential Access",
  },
  {
    question: "What is the main function of the Device Controller?",
    options: ["To compile programs", "To transfer data between the device and its local buffer", "To manage network traffic", "To run the kernel"],
    answer: "To transfer data between the device and its local buffer",
  },
  {
    question: "Which disk scheduling algorithm minimizes head movement by moving the head only in one direction until the end?",
    options: ["FCFS", "SSTF", "SCAN (Elevator Algorithm)", "C-LOOK"],
    answer: "SCAN (Elevator Algorithm)",
  },
  {
    question: "What is the difference between a character device and a block device?",
    options: ["Speed of access", "Location in the file system", "Block devices are accessed in fixed-size chunks; character devices as a stream of bytes", "Character devices are faster"],
    answer: "Block devices are accessed in fixed-size chunks; character devices as a stream of bytes",
  },
  {
    question: "Which directory structure is the most common and widely used?",
    options: ["Single-Level", "Two-Level", "Tree-Structured", "Acyclic-Graph"],
    answer: "Tree-Structured",
  },
  {
    question: "What does the term 'buffering' in I/O systems refer to?",
    options: ["Encrypting data", "Temporarily storing data in a memory area during transfer", "Managing disk allocation", "Preventing external fragmentation"],
    answer: "Temporarily storing data in a memory area during transfer",
  },
  {
    question: "The problem of two processes trying to access the same directory or file concurrently is solved by:",
    options: ["Process scheduling", "File locking", "Segmentation", "Paging"],
    answer: "File locking",
  },
  {
    question: "Which mechanism allows the OS to process I/O requests without keeping the CPU busy by polling?",
    options: ["DMA (Direct Memory Access)", "Spooling", "Buffering", "Kernel Mode"],
    answer: "DMA (Direct Memory Access)",
  },
  {
    question: "A hard link is essentially a:",
    options: ["Pointer to the file's data block", "New file copy", "Symbolic link", "Different directory entry pointing to the same file"],
    answer: "Different directory entry pointing to the same file",
  },
];