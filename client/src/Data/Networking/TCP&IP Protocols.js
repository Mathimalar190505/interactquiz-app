export const TCP_IP_PROTOCOLS_QUESTIONS = [
  {
    question: "Which layer of the TCP/IP model is responsible for providing communication services directly to the end-user application (e.g., HTTP, DNS)?",
    options: ["Network Access Layer", "Internet Layer", "Transport Layer", "Application Layer"],
    answer: "Application Layer",
  },
  {
    question: "What is the key difference between TCP (Transmission Control Protocol) and UDP (User Datagram Protocol)?",
    options: ["TCP uses port numbers; UDP does not.", "TCP is connection-oriented and reliable; UDP is connectionless and unreliable.", "UDP operates at the Internet Layer; TCP operates at the Transport Layer.", "TCP provides faster data transfer due to smaller header size."],
    answer: "TCP is connection-oriented and reliable; UDP is connectionless and unreliable.",
  },
  {
    question: "What is the first step in the TCP three-way handshake process to establish a connection?",
    options: ["Client sends a FIN flag.", "Client sends a SYN flag.", "Server sends a SYN-ACK flag.", "Client sends an ACK flag."],
    answer: "Client sends a SYN flag.",
  },
  {
    question: "Which protocol operates at the Internet Layer (Layer 3) and is responsible for the logical addressing and routing of packets across networks?",
    options: ["TCP", "UDP", "IP", "HTTP"],
    answer: "IP",
  },
  {
    question: "What is the function of the Domain Name System (DNS)?",
    options: ["To dynamically assign IP addresses to hosts.", "To translate IP addresses to MAC addresses.", "To translate hostnames (URLs) into IP addresses.", "To control the flow of data transmission."],
    answer: "To translate hostnames (URLs) into IP addresses.",
  },
  {
    question: "Which protocol uses Port 80 and is the foundation of data communication for the World Wide Web?",
    options: ["FTP", "SMTP", "Telnet", "HTTP"],
    answer: "HTTP",
  },
  {
    question: "What is the Protocol Data Unit (PDU) at the Transport Layer, specifically when using TCP?",
    options: ["Frame", "Segment", "Packet", "Datagram"],
    answer: "Segment",
  },
  {
    question: "What is the purpose of the Address Resolution Protocol (ARP)?",
    options: ["To report errors when a packet cannot reach its destination.", "To map a logical IP address to a physical MAC address on a local network.", "To authenticate a user before granting network access.", "To establish a secure, encrypted tunnel between two hosts."],
    answer: "To map a logical IP address to a physical MAC address on a local network.",
  },
  {
    question: "Real-time applications, such as VoIP (Voice over IP) and online gaming, often use UDP instead of TCP. Why?",
    options: ["UDP is encrypted by default.", "UDP prioritizes speed and low latency over guaranteed data delivery.", "UDP guarantees packets are delivered in order.", "UDP can span multiple networks more easily than TCP."],
    answer: "UDP prioritizes speed and low latency over guaranteed data delivery.",
  },
  {
    question: "Which of the following port numbers is commonly associated with secure email *retrieval* (IMAPS)?",
    options: ["21", "25", "110", "993"],
    answer: "993",
  },
];
