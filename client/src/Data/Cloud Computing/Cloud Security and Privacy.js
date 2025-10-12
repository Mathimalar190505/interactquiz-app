export const CLOUD_SECURITY_AND_PRIVACY_QUESTIONS = [
  {
    question: "In the context of cloud computing, what is the **Shared Responsibility Model**?",
    options: ["A legal agreement specifying the liability of the cloud provider for all security breaches.", "A framework that clearly defines which security tasks are the responsibility of the cloud provider and which are the responsibility of the customer.", "A checklist of regulatory requirements that all public cloud platforms must meet.", "A system that automatically shifts security duties entirely to the provider when a breach occurs."],
    answer: "A framework that clearly defines which security tasks are the responsibility of the cloud provider and which are the responsibility of the customer.",
  },
  {
    question: "Under the Shared Responsibility Model, which security task is **always** the responsibility of the **customer**, regardless of the cloud service model (IaaS, PaaS, or SaaS)?",
    options: ["Physical security of the data center and hardware.", "Patching the underlying host operating system.", "Configuration of application-level encryption and user access management.", "Network infrastructure management and virtualization."],
    answer: "Configuration of application-level encryption and user access management.",
  },
  {
    question: "Which term describes the practice of encrypting sensitive data before it is sent to the cloud provider, ensuring the provider cannot view the unencrypted data?",
    options: ["Encryption in Transit", "Client-Side Encryption (Zero-Knowledge)", "Data Masking", "Server-Side Encryption"],
    answer: "Client-Side Encryption (Zero-Knowledge)",
  },
  {
    question: "Why is **Compliance** (like HIPAA, GDPR, or SOC 2) often more complex in a Public Cloud environment than in an on-premise Private Cloud?",
    options: ["Cloud providers refuse to sign compliance agreements.", "The customer must prove that the shared, multi-tenant infrastructure meets their specific regulatory requirements.", "Compliance standards do not apply to data stored outside a private network.", "Cloud security is inherently less secure than traditional data centers."],
    answer: "The customer must prove that the shared, multi-tenant infrastructure meets their specific regulatory requirements.",
  },
  {
    question: "What is the primary risk associated with a malicious insider (like a disgruntled employee) in a cloud environment?",
    options: ["The employee might steal the provider's physical servers.", "The employee might accidentally delete cloud network infrastructure.", "The employee might leverage excessive **Identity and Access Management (IAM)** privileges to exfiltrate or corrupt sensitive data.", "The employee might overload the network with unencrypted traffic."],
    answer: "The employee might leverage excessive **Identity and Access Management (IAM)** privileges to exfiltrate or corrupt sensitive data.",
  },
  {
    question: "Which cloud security concept is directly related to **GDPR (General Data Protection Regulation)** and dictates that personal data should only be processed and stored when absolutely necessary?",
    options: ["Cloud Auditing", "Data Proliferation", "Data Minimization", "Container Isolation"],
    answer: "Data Minimization",
  },
  {
    question: "What is the common term for a vulnerability where a multi-tenant application in the cloud allows one customer to illegally view or access the data of another customer?",
    options: ["Inter-Cloud Sprawl", "Insecure API Gateways", "Hypervisor Theft", "Cross-Tenant Access"],
    answer: "Cross-Tenant Access",
  },
  {
    question: "If a company is using an IaaS Virtual Machine (VM), whose responsibility is it to apply security patches to the **Guest Operating System** running inside that VM?",
    options: ["The Cloud Provider", "A neutral third-party auditor", "The Customer", "The Regulatory Body"],
    answer: "The Customer",
  },
  {
    question: "What is the key benefit of implementing **Micro-segmentation** (fine-grained network policies) in a cloud environment?",
    options: ["It eliminates the need for any firewalls or security groups.", "It reduces the cost of cloud storage services.", "It limits the lateral (side-to-side) movement of an attacker within a network if a single server is compromised.", "It guarantees that all data is encrypted by default."],
    answer: "It limits the lateral (side-to-side) movement of an attacker within a network if a single server is compromised.",
  },
  {
    question: "What is a **CASB (Cloud Access Security Broker)** primarily used for in cloud security architecture?",
    options: ["To provide high-speed network connectivity between hybrid cloud regions.", "To act as a central enforcement point between cloud users and cloud service providers, enforcing security policies as cloud usage is accessed.", "To manage physical server security in the provider's data center.", "To automate billing and cost optimization for cloud services."],
    answer: "To act as a central enforcement point between cloud users and cloud service providers, enforcing security policies as cloud usage is accessed.",
  },
];
