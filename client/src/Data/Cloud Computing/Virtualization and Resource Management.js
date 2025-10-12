export const VIRTUALIZATION_AND_RESOURCE_MANAGEMENT_QUESTIONS = [
  {
    question: "What is the primary role of a **Hypervisor** (or Virtual Machine Monitor - VMM) in a virtualized environment?",
    options: ["To manage all network traffic and perform load balancing.", "Software that creates, runs, and isolates Virtual Machines (VMs) from the underlying physical hardware.", "A security protocol for encrypting data at rest.", "A dedicated physical server rack in a data center."],
    answer: "Software that creates, runs, and isolates Virtual Machines (VMs) from the underlying physical hardware.",
  },
  {
    question: "A **Type 1 Hypervisor** is often called a 'Bare Metal' hypervisor because it:",
    options: ["Is always deployed on Linux operating systems.", "Runs directly on the host machine's hardware without needing a host operating system.", "Is less secure than a Type 2 hypervisor.", "Can only manage networking resources, not CPU or memory."],
    answer: "Runs directly on the host machine's hardware without needing a host operating system.",
  },
  {
    question: "Compared to a Virtual Machine (VM), what is the key advantage of a **Container** (e.g., Docker) regarding startup and size?",
    options: ["Containers provide better hardware isolation than VMs.", "Containers run a separate, full guest operating system for stronger security.", "Containers are much smaller and start faster because they share the host operating system kernel.", "Containers are designed primarily for graphical interface applications."],
    answer: "Containers are much smaller and start faster because they share the host operating system kernel.",
  },
  {
    question: "Which primary cloud feature enables the sharing and dynamic assignment of physical resources (CPU, RAM, storage) to multiple virtualized instances, maximizing hardware efficiency?",
    options: ["High Availability", "Resource Pooling", "Quality of Service (QoS)", "Geographical Distribution"],
    answer: "Resource Pooling",
  },
  {
    question: "What cloud feature automatically adjusts the number of compute resources (up or down) allocated to an application based on real-time traffic or load metrics?",
    options: ["Failover Clustering", "Load Balancing", "Auto-scaling", "Static Routing"],
    answer: "Auto-scaling",
  },
  {
    question: "The risk known as **VM Sprawl** primarily relates to:",
    options: ["A bug that causes all virtual machines to crash simultaneously.", "The accidental creation and proliferation of unmanaged or forgotten virtual machines that consume resources and pose security risks.", "A failure to allocate enough storage space for virtual machine snapshots.", "A bottleneck in the network card of the host server."],
    answer: "The accidental creation and proliferation of unmanaged or forgotten virtual machines that consume resources and pose security risks.",
  },
  {
    question: "When provisioning a Virtual Machine, what does the term **vCPU** represent?",
    options: ["The physical network card assigned to the VM.", "The total available bandwidth for the VM.", "A software-based representation of a physical CPU core, allowing multiple VMs to share the same physical core.", "The amount of dedicated, non-shared physical memory (RAM)."],
    answer: "A software-based representation of a physical CPU core, allowing multiple VMs to share the same physical core.",
  },
  {
    question: "The practice of allocating more total virtual memory or CPU resources to VMs than the physical host actually has available, based on expected low utilization, is known as:",
    options: ["Resource Reservation", "Oversubscription (or Over-Provisioning)", "Resource Affinity", "Capacity Planning"],
    answer: "Oversubscription (or Over-Provisioning)",
  },
  {
    question: "What is the primary objective of a **Load Balancer** in a highly virtualized, web-scale environment?",
    options: ["To manage encryption keys for all virtual servers.", "To route incoming network traffic efficiently across a group of backend servers to prevent overload and ensure performance.", "To serve static files like images and videos to users.", "To back up the entire virtualized environment once per day."],
    answer: "To route incoming network traffic efficiently across a group of backend servers to prevent overload and ensure performance.",
  },
  {
    question: "A company implements **Live Migration** for its VMs. What benefit does this provide?",
    options: ["It reduces the operating system boot time.", "It ensures data is always backed up to tape storage.", "It allows a running VM to be moved from one physical host to another without interruption (zero downtime).", "It automatically converts a VM into a container image."],
    answer: "It allows a running VM to be moved from one physical host to another without interruption (zero downtime).",
  },
];
