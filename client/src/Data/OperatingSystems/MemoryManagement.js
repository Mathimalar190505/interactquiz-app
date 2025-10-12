// Memory Management: 10 Questions

export const OS_MEMORY_MANAGEMENT_QUESTIONS = [
  {
    question: "What is the technique of dividing the physical memory into fixed-size blocks?",
    options: ["Segmentation", "Swapping", "Paging", "Compaction"],
    answer: "Paging",
  },
  {
    question: "What is the term for a logical address being different from the physical address?",
    options: ["Absolute Addressing", "Address Binding", "Relocation", "Memory Mapping"],
    answer: "Relocation",
  },
  {
    question: "What is the problem caused by small, non-contiguous free memory partitions in a dynamic partitioning system?",
    options: ["Internal Fragmentation", "External Fragmentation", "Deadlock", "Thrashing"],
    answer: "External Fragmentation",
  },
  {
    question: "What is the primary purpose of a Page Table?",
    options: ["To store process IDs", "To map logical addresses to physical addresses", "To manage disk space", "To store file attributes"],
    answer: "To map logical addresses to physical addresses",
  },
  {
    question: "The technique where a process is swapped out of main memory temporarily to allow other processes to run is called:",
    options: ["Paging", "Virtual Memory", "Segmentation", "Swapping"],
    answer: "Swapping",
  },
  {
    question: "What occurs when a process is constantly paging (swapping pages between memory and disk) but doing little useful work?",
    options: ["Deadlock", "Fragmentation", "Thrashing", "Starvation"],
    answer: "Thrashing",
  },
  {
    question: "Which page replacement algorithm replaces the page that has not been used for the longest period of time?",
    options: ["FIFO", "LRU (Least Recently Used)", "LFU (Least Frequently Used)", "Optimal"],
    answer: "LRU (Least Recently Used)",
  },
  {
    question: "What is the key mechanism that allows the size of the logical address space to be much larger than the physical address space?",
    options: ["Segmentation", "Paging", "Virtual Memory", "Internal Fragmentation"],
    answer: "Virtual Memory",
  },
  {
    question: "What is the memory loss that occurs when the allocated memory is slightly larger than the requested memory (common in fixed-size partitions)?",
    options: ["Internal Fragmentation", "External Fragmentation", "Overhead", "Memory Leak"],
    answer: "Internal Fragmentation",
  },
  {
    question: "What specialized hardware cache stores the most recently used Page Table Entries?",
    options: ["L1 Cache", "TLB (Translation Lookaside Buffer)", "Buffer Cache", "RAM"],
    answer: "TLB (Translation Lookaside Buffer)",
  },
];