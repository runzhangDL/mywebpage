import type { Metadata } from "next";

import Figure from "@/components/Figure";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

const project = getProject("asv");

export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
};

export default function Asv() {
  return (
    <ProjectPage project={project}>
      <h2>Problem context</h2>
      <p>
        Consider an Autonomous Surface Vehicle (ASV), a specific type of robot
        with four thrusters mounted on its underside. The goal is to develop a
        program that determines the force and direction of each thruster based
        on the vehicle&apos;s current state and its environment. One prevalent
        approach is to use a deep neural network controller, which can be viewed
        as a non-linear function that maps each state to an action space.
        Gradient descent and backpropagation are widely used techniques for
        optimizing the network. However, alternative approaches, such as
        evolutionary algorithms, attempt to find the optimal solution by
        explicitly searching the model parameter space.
      </p>

      <Figure
        src="/smarty.png"
        alt="SMARTY platform simulating a physical autonomous surface vehicle"
        width={850}
        height={408}
        caption="Figure 1: Simulating a physical ASV using the SMARTY platform"
        priority
      />

      <h2>Implementation</h2>
      <p>
        The experiment was conducted in a simulated environment called{" "}
        <a
          href="https://github.com/resilient-swarms/ASVLite/tree/380253999fdc261fa22b9301f2c9d28bcd0b66d2"
          target="_blank"
          rel="noreferrer"
        >
          ASVLite
        </a>
        , which simulates the dynamics of a vehicle under random ocean surface
        conditions, particularly various wave forces. To investigate the
        performance of evolutionary algorithms on neural network controller
        learning, I used libraries such as{" "}
        <a
          href="https://github.com/sferes2/sferes2/tree/8f15234e412552f269f8fea7fc5247f2f3b7affd"
          target="_blank"
          rel="noreferrer"
        >
          sferes2
        </a>
        ,{" "}
        <a
          href="https://github.com/resibots/limbo/tree/2a652957b8e51cf27874f2a2792e0a6d0a80941f"
          target="_blank"
          rel="noreferrer"
        >
          limbo
        </a>
        , and map-elites (deprecated). The full project code is available in the{" "}
        <a
          href="https://github.com/runzhangDL/ASV-Adaption"
          target="_blank"
          rel="noreferrer"
        >
          ASV-Adaption
        </a>{" "}
        repository. The project was primarily built using C++, and the main
        tasks involved defining the objectives and using the algorithm libraries
        to search for optimal solutions. In each iteration of the genetic search,
        multiple parameter settings were used to obtain fitness scores, which
        evaluated the performance of the controller. The settings with higher
        fitness scores were then selected for the next iteration, undergoing
        random transformations that mimicked genetic mutations in nature.
      </p>
      <p>
        Another aspect of the project involved using deep reinforcement
        learning, such as the Deep Deterministic Policy Gradient (DDPG)
        algorithm, to train the vehicle controller. In this approach, the
        control problem is modeled as a Markov Decision Process, and
        Actor-Critic models serve as the primary function approximators, which
        are optimized during the learning process. Unlike evolutionary
        algorithms, gradient descent is used as the optimizer in this case. It
        employs the chain rule to adjust the controller in the direction that
        minimizes the loss function. The source code for this part of the
        project can be found in the{" "}
        <a
          href="https://github.com/runzhangDL/ASV-DeepRL"
          target="_blank"
          rel="noreferrer"
        >
          ASV-DeepRL
        </a>{" "}
        repository. One significant challenge in this implementation was
        figuring out how to connect the Python TensorFlow library with the C++
        simulator library. To bridge this gap, I temporarily stored the results
        in files, which were then read by the other library written in a
        different language.
      </p>

      <h2>Results</h2>
      <p>
        The results demonstrated that the controller derived from the
        evolutionary algorithm performed more sensibly than the one obtained
        through gradient descent. As shown in Figure 2, the controller worked
        well for the waypoints specified in the evaluation list, which were used
        to guide the evolutionary algorithm in selecting fit individuals.
        However, when presented with waypoints beyond the list, the controller
        failed to perform satisfactorily, indicating that its generalization
        capability was limited.
      </p>

      <Figure
        src="/asvresult.jpg"
        alt="Trajectories produced by the learnt controller"
        width={1706}
        height={844}
        caption="Figure 2: Trajectories from the start position to the target destination, made by the learnt controller"
      />
    </ProjectPage>
  );
}
