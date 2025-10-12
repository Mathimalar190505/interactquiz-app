export const IP_ADDRESSING_QUESTIONS = [
  {
    question: "What is the total number of bits in an IPv4 address?",
    options: ["64", "128", "32", "48"],
    answer: "32",
  },
  {
    question: "An IPv6 address is 128 bits long and is typically represented in which format?",
    options: ["Dotted-decimal", "Binary", "Hexadecimal separated by colons", "Octal"],
    answer: "Hexadecimal separated by colons",
  },
  {
    question: "Which IP address falls within the private **Class C** range?",
    options: ["$10.0.0.1$", "$172.15.0.1$", "$192.168.1.1$", "$172.32.0.1$"],
    answer: "$192.168.1.1$",
  },
  {
    question: "A network using the CIDR notation $/27$ allows for how many usable host addresses?",
    options: ["14", "30", "62", "126"],
    answer: "30",
  },
  {
    question: "What is the default subnet mask for an IP address starting with $10.x.x.x$ (Class A)?",
    options: ["$255.255.0.0$", "$255.0.0.0$", "$255.255.255.0$", "$255.255.255.255$"],
    answer: "$255.0.0.0$",
  },
  {
    question: "In an IP network, which address is used for one-to-all communication within the local segment?",
    options: ["Network Address", "Loopback Address", "Default Gateway", "Broadcast Address"],
    answer: "Broadcast Address",
  },
  {
    question: "IP addresses in the range $224.0.0.0$ to $239.255.255.255$ are reserved for what purpose?",
    options: ["Public Internet Addresses", "Multicast Communication (Class D)", "Experimental Use (Class E)", "Private Network Use"],
    answer: "Multicast Communication (Class D)",
  },
  {
    question: "An IP address starting with $169.254.x.x$ indicates what type of network configuration issue?",
    options: ["DHCP server is assigning an address successfully", "The address is a loopback address", "The device failed to obtain an address from DHCP (APIPA)", "The address is manually configured"],
    answer: "The device failed to obtain an address from DHCP (APIPA)",
  },
  {
    question: "What is the primary benefit of performing subnetting on a large internal network?",
    options: ["Increasing the speed of the internet connection", "Reducing the size of broadcast domains", "Eliminating the need for a router", "Simplifying the IP protocol stack"],
    answer: "Reducing the size of broadcast domains",
  },
  {
    question: "The ability to use different subnet mask lengths within the same network is known as:",
    options: ["CIDR", "NAT", "VLSM", "DHCP"],
    answer: "VLSM",
  },
];
