export interface Lab {
  id: string;
  week: number;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  description: string;
  starterCodeUrl: string;
}

export interface Week {
  number: number;
  title: string;
  topics: string[];
  readings: string[];
  labDescription?: string;
  starterCodeNote?: string;
  links?: { title: string; url: string; }[];
}

export interface CapstoneProject {
  title: string;
  description: string;
  deliverables: string[];
  difficulty: 'Intermediate' | 'Advanced';
}

export const curriculum: Week[] = [
  {
    number: 1,
    title: "Foundations: Introduction, Models & Architecture",
    topics: [
      "What is a distributed system? Why bother?",
      "Basic models (client-server, peer-to-peer)",
      "Intro to processes/threads (from OS perspective)",
      "System architectures: Centralized vs. Decentralized"
    ],
    readings: ["Coulouris Ch. 1", "OS/networks summaries"],
    labDescription: "Sockets & Threads. Build a multi-threaded echo server. Very guided starter code provided. Modify this working example. Starter code provided on GitHub.",
    starterCodeNote: "Very guided starter code provided.",
    links: [
      {
        title: "Week 1 Materials",
        url: "https://github.com/victordeman/distributed-systems/blob/distributed-systems-course-site-3201933785043314310/links/week1"
      }
    ]
  },
  {
    number: 2,
    title: "Networking: Communication, Protocols & Sockets",
    topics: [
      "Networking basics (IP, TCP/UDP, sockets)",
      "Simple client-server programming",
      "Network performance: Latency vs. Bandwidth",
      "Encapsulation and layering"
    ],
    readings: ["Coulouris Ch. 2"],
    labDescription: "Networking Basics. Continue with socket programming exercises. Starter code provided on GitHub."
  },
  {
    number: 3,
    title: "Concurrency & Failure: Managing Complexity and Crashes",
    topics: [
      "Concurrency & data structures review (locks, queues, lists, hash tables)",
      "Failure models and partial failures",
      "Handling race conditions in distributed state",
      "Idempotency in network operations"
    ],
    readings: ["Coulouris Ch. 2 (continued)", "Concurrency guide"],
    labDescription: "Concurrency & Failure Models. Thread-safe data structures in Python. Starter code provided on GitHub."
  },
  {
    number: 4,
    title: "Remote Calls I: RPC Concepts and Implementations",
    topics: [
      "RPC/RMI concepts",
      "Message passing",
      "Remote call semantics (at-least-once, etc.)",
      "Interface Definition Languages (IDLs)"
    ],
    readings: ["Coulouris Ch. 4"],
    labDescription: "Remote Procedure Calls I. Build a basic RPC-style service in Python. Starter code provided on GitHub."
  },
  {
    number: 5,
    title: "Remote Calls II: Serialization, Pub-Sub & Advanced Patterns",
    topics: [
      "Publish-subscribe systems",
      "Advanced RPC patterns",
      "Serialization and Deserialization (JSON, Protobuf)",
      "Asynchronous message passing"
    ],
    readings: ["Coulouris Ch. 4 (continued)"],
    labDescription: "Remote Procedure Calls II. Implement a simple pub-sub system. Starter code provided on GitHub."
  },
  {
    number: 6,
    title: "Naming: Identification and Location in Distributed Systems",
    topics: [
      "DNS, directories",
      "Flat vs. hierarchical naming",
      "Resource discovery mechanisms",
      "Scalable naming systems"
    ],
    readings: ["Coulouris Ch. 5 (Light reading)"],
    labDescription: "Naming & Directory Services. Implementing a basic directory service. Starter code provided on GitHub."
  },
  {
    number: 7,
    title: "Time & Clocks: Ordering Events in Distributed Systems",
    topics: [
      "Physical vs. logical clocks",
      "Lamport clocks",
      "Vector clocks (intuition + simple examples)",
      "Causality and happens-before relationship"
    ],
    readings: ["Coulouris Ch. 6"],
    labDescription: "Time & Logical Clocks. Implement vector clocks in Python. Starter code provided on GitHub."
  },
  {
    number: 8,
    title: "Coordination: Leader Election, Mutual Exclusion & Global State",
    topics: [
      "Mutual exclusion algorithms",
      "Leader election (high-level)",
      "Snapshots and consistent global state",
      "Distributed termination detection"
    ],
    readings: ["Coulouris Ch. 6 (continued)"],
    labDescription: "Coordination & Vector Clocks. Bully algorithm implementation. Starter code provided on GitHub."
  },
  {
    number: 9,
    title: "Replication & Consistency: Managing State in Large Scale Systems",
    topics: [
      "Replication types (primary-backup, quorum)",
      "Consistency models + CAP theorem (intuition and trade-offs)",
      "Eventual consistency and conflict resolution",
      "Quorum-based protocols"
    ],
    readings: ["Coulouris Ch. 7"],
    labDescription: "Replication & Consistency. Simple replicated key-value store. Starter code provided on GitHub."
  },
  {
    number: 10,
    title: "Consensus: Reaching Agreement in the Presence of Faults",
    topics: [
      "Failure detectors, reliable broadcast",
      "Consensus: Focus on Raft (practical approach)",
      "Case studies: Dynamo, Cassandra (high-level)",
      "Safety and Liveness in consensus"
    ],
    readings: ["Raft Paper (Introduction + Safety sections)"],
    labDescription: "Fault Tolerance & Consensus. Basic Raft leader election. Starter code provided on GitHub."
  },
  {
    number: 11,
    title: "Distributed Storage: File Systems and Object Stores",
    topics: [
      "NFS basics",
      "Cloud storage (S3/GFS/HDFS overview)",
      "Caching and consistency in storage systems",
      "Distributed File System architectures"
    ],
    readings: ["Coulouris Ch. 8"],
    labDescription: "Distributed Storage. Explore distributed file systems. Starter code provided on GitHub."
  },
  {
    number: 12,
    title: "Distributed Transactions: Reliability and Atomicity",
    topics: [
      "ACID properties in distributed systems",
      "Two-Phase Commit (2PC) protocol",
      "Locking and timestamp ordering",
      "Concurrency control in transactions"
    ],
    readings: ["Coulouris Ch. 9"],
    labDescription: "Distributed Transactions. Distributed transaction simulations. Starter code provided on GitHub."
  },
  {
    number: 13,
    title: "Security: Authentication and Cryptographic Protocols",
    topics: [
      "Authentication and Authorization",
      "Cryptography in distributed settings",
      "Digital signatures and certificates",
      "Secure communication channels (TLS/SSL)"
    ],
    readings: ["Coulouris Ch. 11 (Overview)"],
    labDescription: "Security. Secure communication implementation. Starter code provided on GitHub."
  },
  {
    number: 14,
    title: "Scalability: Modern Cloud and Microservices Architectures",
    topics: [
      "Cloud computing and microservices",
      "MapReduce and Spark overview",
      "Emerging trends: serverless, CRDTs",
      "Load balancing and horizontal scaling"
    ],
    readings: ["MapReduce Whitepaper (High-level)"],
    labDescription: "Modern Topics. MapReduce simulation in Python. Starter code provided on GitHub."
  },
  {
    number: 15,
    title: "Projects & Review: The Future of Distributed Systems",
    topics: [
      "Student project presentations",
      "Course review and final wrap-up",
      "Future directions in distributed systems",
      "Career paths in systems engineering"
    ],
    readings: [],
    labDescription: "Future Trends & Review. Final project wrap-up. Starter code provided on GitHub."
  }
];

export const labs: Lab[] = [
  {
    id: "lab-1",
    week: 1,
    title: "Sockets & Threads",
    difficulty: "Beginner",
    estimatedTime: "3 hours",
    description: "Build a multi-threaded echo server using Python's socket and threading modules. Very guided starter code provided. Modify this working example.",
    starterCodeUrl: "https://github.com/victordeman/distributed-systems/tree/main/labs/lab1"
  },
  {
    id: "lab-2",
    week: 4,
    title: "Simple RPC",
    difficulty: "Beginner",
    estimatedTime: "4 hours",
    description: "Implement a basic Remote Procedure Call mechanism to understand serialization and network communication. Starter code provided on GitHub.",
    starterCodeUrl: "https://github.com/victordeman/distributed-systems/tree/main/labs/lab2"
  },
  {
    id: "lab-3",
    week: 7,
    title: "Vector Clocks",
    difficulty: "Intermediate",
    estimatedTime: "5 hours",
    description: "Implement vector clocks to track causality in a distributed system with multiple processes. Starter code provided on GitHub.",
    starterCodeUrl: "https://github.com/victordeman/distributed-systems/tree/main/labs/lab3"
  },
  {
    id: "lab-4",
    week: 9,
    title: "Replicated KV Store",
    difficulty: "Intermediate",
    estimatedTime: "6 hours",
    description: "Create a key-value store that replicates data across nodes using simple primary-backup logic. Starter code provided on GitHub.",
    starterCodeUrl: "https://github.com/victordeman/distributed-systems/tree/main/labs/lab4"
  }
];

export const capstoneProjects: CapstoneProject[] = [
  {
    title: "Fault-Tolerant Chat Service",
    description: "A chat application that remains available even if the primary server fails, using basic leader election.",
    deliverables: ["Working Python prototype", "Design document", "Video demo"],
    difficulty: "Intermediate"
  },
  {
    title: "Distributed Key-Value Store (Raft-lite)",
    description: "Implement a simplified version of the Raft consensus algorithm to manage a replicated state machine.",
    deliverables: ["Python implementation", "Failure test suite", "Technical report"],
    difficulty: "Advanced"
  },
  {
    title: "Maelstrom Challenge",
    description: "Use the Maelstrom framework to build and test a distributed system for consistency and performance.",
    deliverables: ["Maelstrom-compatible binary", "Benchmark results"],
    difficulty: "Advanced"
  }
];

export const assessmentWeighting = [
  { item: "In Class Quizzes Participation", weight: 5 },
  { item: "Labs & Assignments & Capstone Project", weight: 10 },
  { item: "Quizzes", weight: 5 },
  { item: "Final Exam", weight: 70 }
];

export const resources = {
  readings: [
    { title: "Coulouris: Distributed Systems - Concepts and Design", url: "#" },
    { title: "Raft Visualization", url: "https://raft.github.io/" },
    { title: "CAP Theorem Intuition", url: "#" }
  ],
  tools: [
    { name: "Python 3.11+", url: "https://python.org" },
    { name: "Docker", url: "https://docker.com" },
    { name: "Maelstrom", url: "https://github.com/jepsen-io/maelstrom" }
  ]
};
