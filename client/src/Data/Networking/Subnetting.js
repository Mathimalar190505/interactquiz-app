export const SUBNETTING_QUESTIONS = [
  {
    question: "What is the equivalent dotted-decimal subnet mask for a network using the CIDR notation $/25$?",
    options: ["$255.255.255.0$", "$255.255.255.128$", "$255.255.255.192$", "$255.255.255.240$"],
    answer: "$255.255.255.128$",
  },
  {
    question: "How many usable host addresses are available in a subnet with a mask of $/28$?",
    options: ["14", "16", "30", "62"],
    answer: "14",
  },
  {
    question: "Given the host IP address $192.168.10.130$ and a subnet mask of $255.255.255.240$, what is the Network Address?",
    options: ["$192.168.10.128$", "$192.168.10.129$", "$192.168.10.132$", "$192.168.10.144$"],
    answer: "$192.168.10.128$",
  },
  {
    question: "For a subnet that contains the IP address $172.16.50.45$ with a $/20$ prefix, what is the Broadcast Address?",
    options: ["$172.16.63.255$", "$172.16.50.255$", "$172.16.55.255$", "$172.16.47.255$"],
    answer: "$172.16.63.255$",
  },
  {
    question: "A company needs a subnet that can support exactly 90 hosts. Which is the smallest subnet mask that can fulfill this requirement?",
    options: ["$/26$", "$/25$", "$/27$", "$/24$"],
    answer: "$/25$",
  },
  {
    question: "What is the first usable host address in the subnet defined by the Network ID $10.1.1.96 /27$?",
    options: ["$10.1.1.96$", "$10.1.1.97$", "$10.1.1.98$", "$10.1.1.127$"],
    answer: "$10.1.1.97$",
  },
  {
    question: "If the IP address is $172.20.10.5$ and the subnet mask is $255.255.240.0$, what is the CIDR prefix notation?",
    options: ["$/20$", "$/24$", "$/16$", "$/22$"],
    answer: "$/20$",
  },
  {
    question: "You are subnetting $192.168.1.0$ with a mask of $255.255.255.224$. What is the second usable host IP address in the **first** subnet?",
    options: ["$192.168.1.1$", "$192.168.1.2$", "$192.168.1.33$", "$192.168.1.34$"],
    answer: "$192.168.1.2$",
  },
  {
    question: "A subnet mask of $255.255.255.252$ allows for how many total IP addresses (including the network and broadcast addresses)?",
    options: ["2", "4", "6", "8"],
    answer: "4",
  },
  {
    question: "Given the network ID $192.168.5.64 /26$, what is the last usable host address?",
    options: ["$192.168.5.94$", "$192.168.5.95$", "$192.168.5.126$", "$192.168.5.127$"],
    answer: "$192.168.5.126$",
  },
];
