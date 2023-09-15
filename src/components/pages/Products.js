import React from 'react';
import '../../App.css';

export default function Products() {
  return (
    <div>
      <h1 className='products'>ABOUT ME</h1>

      {/* About Me Section */}
      <div className='about-me'>
        <h2>About Me</h2>
        <p>
          I'm a passionate computational media student with a love for creating innovative solutions.
          My journey in the world of coding began 2 years ago, and since then, I've been
          dedicated to honing my skills and taking on exciting projects.
        </p>
        <p>
          In addition to my technical skills, I also have a keen interest in design,
          which allows me to create not only functional but also visually appealing
          applications. I'm always eager to learn and explore new technologies.
        </p>
      </div>

      {/* Education Section */}
      <div className='education'>
        <h2>Education</h2>
        <p>
          Bachelor of Science in Computational Media<br />
          Georgia Institute of Technology<br />
        </p>
      </div>

      {/* Coding Languages Section */}
      <div className='coding-languages'>
        <h2>Coding Languages</h2>
        <p>
          JavaScript, Python, Java, C#, SQL, HTML, CSS
        </p>
      </div>

      {/* Fun Fact Section */}
      <div className='fun-fact'>
        <h2>Fun Fact</h2>
        <p>
          I can solve a Rubik's Cube in under 1 minute!
        </p>
      </div>

      {/* Hobbies Section */}
      <div className='hobbies'>
        <h2>Hobbies</h2>
        <p>
          In my free time, I enjoy reading, playing the guitar, and experimenting with cooking new recipes.
        </p>
      </div>

      {/* Add more portfolio elements here */}
    </div>
  );
}
