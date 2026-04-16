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
    title: "Introduction & Models",
    topics: [
      "What is a distributed system? Why bother?",
      "Basic models (client-server, peer-to-peer)",
      "Intro to processes/threads (from OS perspective)"
    ],
    readings: ["Coulouris Ch. 1", "OS/networks summaries"],
    labDescription: "Python socket echo server/client; simple multi-threaded server.",
    starterCodeNote: "Very guided starter code provided."
  },
  {
    number: 2,
    title: "Networking Basics",
    topics: [
      "Networking basics (IP, TCP/UDP, sockets)",
      "Simple client-server programming"
    ],
    readings: ["Coulouris Ch. 2"],
    labDescription: "Continue with socket programming exercises."
  },
  {
    number: 3,
    title: "Concurrency & Failure Models",
    topics: [
      "Concurrency & data structures review (locks, queues, lists, hash tables)",
      "Failure models and partial failures"
    ],
    readings: ["Coulouris Ch. 2 (continued)", "Concurrency guide"],
    labDescription: "Thread-safe data structures in Python."
  },
  {
    number: 4,
    title: "Communication & Remote Calls I",
    topics: [
      "RPC/RMI concepts",
      "Message passing",
      "Remote call semantics (at-least-once, etc.)"
    ],
    readings: ["Coulouris Ch. 4"],
    labDescription: "Build a basic RPC-style service in Python."
  },
  {
    number: 5,
    title: "Communication & Remote Calls II",
    topics: [
      "Publish-subscribe systems",
      "Advanced RPC patterns"
    ],
    readings: ["Coulouris Ch. 4 (continued)"],
    labDescription: "Implement a simple pub-sub system."
  },
  {
    number: 6,
    title: "Naming",
    topics: [
      "DNS, directories",
      "Flat vs. hierarchical naming"
    ],
    readings: ["Coulouris Ch. 5 (Light reading)"],
    labDescription: "Implementing a basic directory service."
  },
  {
    number: 7,
    title: "Time & Clocks",
    topics: [
      "Physical vs. logical clocks",
      "Lamport clocks",
      "Vector clocks (intuition + simple examples)"
    ],
    readings: ["Coulouris Ch. 6"],
    labDescription: "Implement vector clocks in Python."
  },
  {
    number: 8,
    title: "Coordination",
    topics: [
      "Mutual exclusion",
      "Leader election (high-level)",
      "Snapshots"
    ],
    readings: ["Coulouris Ch. 6 (continued)"],
    labDescription: "Bully algorithm implementation."
  },
  {
    number: 9,
    title: "Replication & Consistency",
    topics: [
      "Replication types (primary-backup, quorum)",
      "Consistency models + CAP theorem (intuition and trade-offs)"
    ],
    readings: ["Coulouris Ch. 7"],
    labDescription: "Simple replicated key-value store."
  },
  {
    number: 10,
    title: "Fault Tolerance & Consensus",
    topics: [
      "Failure detectors, reliable broadcast",
      "Consensus: Focus on Raft (practical approach)",
      "Case studies: Dynamo, Cassandra (high-level)"
    ],
    readings: ["Raft Paper (Introduction + Safety sections)"],
    labDescription: "Basic Raft leader election."
  },
  {
    number: 11,
    title: "Distributed Storage",
    topics: [
      "NFS basics",
      "Cloud storage (S3/GFS/HDFS overview)",
      "Caching and consistency"
    ],
    readings: ["Coulouris Ch. 8"],
  },
  {
    number: 12,
    title: "Transactions",
    topics: [
      "ACID, 2PC (high-level)",
      "Locking/timestamp ordering"
    ],
    readings: ["Coulouris Ch. 9"],
  },
  {
    number: 13,
    title: "Security Basics",
    topics: [
      "Authentication",
      "Cryptography in distributed settings"
    ],
    readings: ["Coulouris Ch. 11 (Overview)"],
  },
  {
    number: 14,
    title: "Modern Topics",
    topics: [
      "Cloud/microservices",
      "MapReduce/Spark overview",
      "Emerging: serverless, CRDTs"
    ],
    readings: ["MapReduce Whitepaper (High-level)"],
  },
  {
    number: 15,
    title: "Projects & Review",
    topics: [
      "Student project presentations",
      "Course review"
    ],
    readings: [],
  }
];

export const labs: Lab[] = [
  {
    id: "lab-1",
    week: 1,
    title: "Sockets & Threads",
    difficulty: "Beginner",
    estimatedTime: "3 hours",
    description: "Build a multi-threaded echo server using Python's socket and threading modules.",
    starterCodeUrl: "https://github.com/victordeman/distributed-systems/tree/main/labs/lab1"
  },
  {
    id: "lab-2",
    week: 4,
    title: "Simple RPC",
    difficulty: "Beginner",
    estimatedTime: "4 hours",
    description: "Implement a basic Remote Procedure Call mechanism to understand serialization and network communication.",
    starterCodeUrl: "https://github.com/victordeman/distributed-systems/tree/main/labs/lab2"
  },
  {
    id: "lab-3",
    week: 7,
    title: "Vector Clocks",
    difficulty: "Intermediate",
    estimatedTime: "5 hours",
    description: "Implement vector clocks to track causality in a distributed system with multiple processes.",
    starterCodeUrl: "https://github.com/victordeman/distributed-systems/tree/main/labs/lab3"
  },
  {
    id: "lab-4",
    week: 9,
    title: "Replicated KV Store",
    difficulty: "Intermediate",
    estimatedTime: "6 hours",
    description: "Create a key-value store that replicates data across nodes using simple primary-backup logic.",
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
  { item: "Participation", weight: 5 },
  { item: "Labs & Assignments", weight: 30 },
  { item: "Quizzes", weight: 25 },
  { item: "Final Exam", weight: 20 },
  { item: "Capstone Project", weight: 20 }
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
