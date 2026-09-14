export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  /** Short label used in the breadcrumb trail. */
  shortTitle: string;
  title: string;
  summary: string;
  tags: string[];
  thumbnail: ProjectImage;
};

export const projects: Project[] = [
  {
    slug: "asv",
    shortTitle: "ASV",
    title: "Autonomous Surface Vehicle Controller",
    summary:
      "My Master's dissertation focused on implementing Evolutionary Algorithms to develop a vehicle controller, which selected actions based on the current state of the environment or the vehicle itself. Additionally, the project explored deep reinforcement learning and compared the two approaches.",
    tags: ["Evolutionary Algorithms", "Deep RL", "C++"],
    thumbnail: {
      src: "/navi_nn.png",
      alt: "Neural network controller steering an autonomous surface vehicle",
      width: 2348,
      height: 1190,
    },
  },
  {
    slug: "gat",
    shortTitle: "GAT",
    title: "Graph Attention Networks with automatic graph generation on text data",
    summary:
      "While working with text data, I realized that structured data is commonly represented using relational graphs, where two nodes are connected if they are related. This observation naturally led to the idea of exploring whether deep learning models can be trained to generate these relational graphs.",
    tags: ["Graph Neural Networks", "LSTM", "NLP"],
    thumbnail: {
      src: "/graph1.png",
      alt: "Relational graph generated from text data",
      width: 1024,
      height: 1024,
    },
  },
  {
    slug: "vrl",
    shortTitle: "Video prediction",
    title: "Predicting the future semantic masks of moving objects",
    summary:
      "For the deep learning course at NYU, I worked with two classmates to implement the open-source SimVP model on a video semantic prediction task, then explored VQ-VAE pre-training as a follow-up.",
    tags: ["Video Prediction", "Segmentation", "PyTorch"],
    thumbnail: {
      src: "/simvp.png",
      alt: "SimVP architecture for video prediction",
      width: 824,
      height: 283,
    },
  },
];

export function getProject(slug: string): Project {
  const project = projects.find((candidate) => candidate.slug === slug);

  if (!project) {
    throw new Error(`Unknown project slug: ${slug}`);
  }

  return project;
}
