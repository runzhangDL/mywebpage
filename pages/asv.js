import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Gear from './gear';
import React, { useState } from 'react'

const Asv = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Run Zhang's Project-ASV</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className={styles.breadcrumb}>
            <a href='/'>Home</a> &gt; ASV Project Details
        </div>

        <div className= {styles.projectContainer}>
            <h1>Autonomous Surface Vehicle Controller</h1>
            <div>
                <h2>Problem  Context</h2>
                <p>Consider an Autonomous Surface Vehicle (ASV), a specific type of robot with four thrusters mounted on its underside. The goal is to develop a program that determines the force and direction of each thruster based on the vehicle's current state and its environment. One prevalent approach is to use a deep neural network controller, which can be viewed as a non-linear function that maps each state to an action space. Gradient Descent and Backpropagation are widely used techniques for optimizing the network. However, alternative approaches, such as Evolutionary Algorithms, attempt to find the optimal solution by explicitly searching the model parameter space. </p>
                <figure className={styles.projectFigure}>
                    <img src='/smarty.png' alt='SMARTY ASV'></img>
                    <figcaption>Figure 1: Simulating physical ASV using SMARTY platform</figcaption>
                </figure>
            </div>
            <div>
                <h2>Implementation</h2>
                <p>
                    The experiment was conducted in a simulated environment called <a href='https://github.com/resilient-swarms/ASVLite/tree/380253999fdc261fa22b9301f2c9d28bcd0b66d2' target='_blank'>ASVLite</a>, which simulates the dynamics of a vehicle under random ocean surface conditions, particularly various wave forces. To investigate the performance of Evolutionary Algorithms on neural network controller learning, I used libraries such as <a href='https://github.com/sferes2/sferes2/tree/8f15234e412552f269f8fea7fc5247f2f3b7affd' target='_blank'>sferes2</a>, <a href='https://github.com/resibots/limbo/tree/2a652957b8e51cf27874f2a2792e0a6d0a80941f' target='_blank'>limbo</a>, and map-elites (deprecated). The full project code is available in the <a href='https://github.com/runzhangDL/ASV-Adaption' target='_blank'>ASV-Adaption</a> repository. The project was primarily built using C++, and the main tasks involved defining the objectives and utilizing the algorithm libraries to search for optimal solutions. In each iteration of the genetic search, multiple parameter settings were used to obtain fitness scores, which evaluated the performance of the controller. The settings with higher fitness scores were then selected for the next iteration, undergoing random transformations that mimicked genetic mutations in nature.
                </p>
                <p>
                    Another part of the project is to use deep reinforcement learning, e.g. DDPG to learn the vehicle controller. Under this method, the control problem will be modeled as Markov Decision Process and Actor-Critic models were the primariy function approximator which will be optimized during the learning process. Different from evolutionary algorith, here gradient descent were the optmizer which will chain rule to adjsut controller in the direction that minimize the loss function. The source code could be found on <a href='https://github.com/runzhangDL/ASV-DeepRL' target='_blank'>ASV-DeepRL</a>. A major difficulty in this implementation is how to conenct the python tensorflow library to the C++ simulator library. I brideged the gap by temprarily storing the results into file which then would be read by the other library written in a different langugae.

                    Another aspect of the project involved using deep reinforcement learning, such as the Deep Deterministic Policy Gradient (DDPG) algorithm, to train the vehicle controller. In this approach, the control problem is modeled as a Markov Decision Process, and Actor-Critic models serve as the primary function approximators, which are optimized during the learning process. Unlike evolutionary algorithms, gradient descent is used as the optimizer in this case. It employs the chain rule to adjust the controller in the direction that minimizes the loss function. The source code for this part of the project can be found in the <a href='https://github.com/runzhangDL/ASV-DeepRL' target='_blank'>ASV-DeepRL</a> repository. One significant challenge in this implementation was figuring out how to connect the Python TensorFlow library with the C++ simulator library. To bridge this gap, I temporarily stored the results in files, which were then read by the other library written in a different language.
                </p>
            </div>
            <div>
                <h2>Results</h2>

                The results demonstrated that the controller derived from the evolutionary algorithm performed more sensibly than the one obtained through gradient descent. As shown in Figure 2, the controller worked well for the waypoints specified in the evaluation list, which were used to guide the evolutionary algorithm in selecting fit individuals. However, when presented with waypoints beyond the list, the controller failed to perform satisfactorily, indicating that its generalization capability was limited.
                <figure className={styles.projectFigure}>
                    <img src='/asvresult.jpg' alt='Navigation Task'></img>
                    <figcaption>Figure 2: Trajectories from the start position to the target desitination, made by the learnt controller</figcaption>
                </figure>
            </div>
        </div>

        <Gear is_home={false}></Gear>
      </main>

      <footer className={styles.footer}>
        <span>Run Zhang Company Limited</span>
        <span>
          <a href="https://www.linkedin.com/in/runzhangprofile/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
          </a>
        </span>
        <span>
          <a href="mailto:runzhang715@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
          </svg>
          </a>
        </span>
        <span>
        <a href='https://x.com/runzhang24' target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
          </svg>
        </a>
        </span>
        <span>
          <a href='https://www.facebook.com/profile.php?id=100025327039685&sk=about' target='_blank'>
          <svg width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
          </svg>
          </a>
        </span>
        <span>
          <a href='https://github.com/runzhangDL' target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
          </a>
        </span>
        <span>
          <a href='https://www.instagram.com/rz2u19/' target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
          </svg>
          </a>
        </span>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export default Asv;
