import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hori Nguyen's Portfolio</title>
        <meta name="description" content="Portfolio of Hori Nguyen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-blue-700 text-white py-4 px-8">
        <nav className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-1">Hori Nguyen</h1>
            <h2 className="text-xl mb-2">(he/him/his)</h2>
          </div>
          <div className="flex items-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </nav>
      </header>
      <main className="bg-white text-black px-8 py-4">
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            Hello! I'm a 4th year Computer Science student at California State
            University Fullerton. I'm a passionate software developer with
            experience in building web applications using technologies like
            React, Node.js, and Next.js. I enjoy learning new technologies and
            solving complex problems. I particularly enjoy frontend development
            for its creative aspects and the opportunity it provides to craft
            engaging user interfaces.
          </p>
        </section>
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <section className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ExperienceCard
                title="Junior Frontend Engineer"
                location="MERU AI LLC"
                date="January 2024 - Present"
                description="Developed a web application that allows users manage their businesses."
              />
              <ExperienceCard
                title="ECS Dean's Assistant"
                location="California State University Fullerton"
                date="June 2023 - August 2023"
                description="Actively communicates with students who have inquiries about the ALEKS program, providing support, 
              guidance, and further clarifications to ensure understanding and success for the students."
              />
              <ExperienceCard
                title="ASSURE-US Research Assistant"
                location="California State University Fullerton"
                date="June 2023"
                description="Conducted research on machine learning models and algorithms and their applications for solving real
              world problems. Designed a Sudoku Solver using TensorFlow and Machine Learning."
              />
              <ExperienceCard
                title="CIC PCUBED Research Assistant"
                location="California State University Fullerton"
                date="June 2022 - August 2022"
                description="Data Science Analysis of Spotify Music. Created graphs that displayed data from Spotify’s API, 
              utilized packages such as Spotipy, Numpy, Pandas and Plotly; coded with python in the Pycharm IDE."
              />
            </div>
          </section>
        </section>
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">Skills and Technologies</h2>
          <div className="flex flex-wrap justify-center p-4">
            <div className="flex">
              <SkillCard imageUrl="/python_logo.png" />
              <SkillCard imageUrl="/js.png" />
              <SkillCard imageUrl="/java.png" />
              <SkillCard imageUrl="/c.png" />
              <SkillCard imageUrl="/c++.png" />
              <SkillCard imageUrl="/c_sharp.png" />
              <SkillCard imageUrl="/css.png" />
              <SkillCard imageUrl="/html.png" />
              <SkillCard imageUrl="/react_logo.png" />
              <SkillCard imageUrl="/tailwindcss.png" />
              <SkillCard imageUrl="/tensorflow.png" />
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center">
            <TechnologySkill imageUrl="/vscode.png" />
            <TechnologySkill imageUrl="/pycharm.png" />
            <TechnologySkill imageUrl="/eclipse.png" />
            <TechnologySkill imageUrl="/linux.png" />
            <TechnologySkill imageUrl="/git.png" />
            <TechnologySkill imageUrl="/github.png" />
            <TechnologySkill imageUrl="/google_colab.png" />
          </div>
        </section>
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Predictive Model for Gender Affirming Care"
              description="Description of Project 4"
              imageUrl="/project4.jpg"
            />
            <ProjectCard
              title="Motion"
              description="Notion Clone"
              imageUrl="/project1.jpg"
            />
            <ProjectCard
              title="Tboy Swag"
              description="Collective of gender affirming resources for transmascs."
              imageUrl="/project2.jpg"
            />
            <ProjectCard
              title="Sudoku Solver"
              description="Description of Project 4"
              imageUrl="/project4.jpg"
            />
            <ProjectCard
              title="Spotify Data Science Analysis"
              description="Data Science Analysis of Spotify Music. Created graphs that displayed data from Spotify’s API,"
              imageUrl="/project3.jpg"
            />
          </div>
        </section>
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-lg mr-4 hover:underline">
      {children}
    </a>
  );
}

function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={300}
        className="object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function SkillCard({ imageUrl }) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden" style={{ width: '80px', height: '80px', margin: '8px' }}>
      <div className = "p-4">
        <div className="flex items-center justify-center h-full">
          <Image
            src={imageUrl}
            alt="Skill Icon"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({
  title,
  description,
  additionalDetails,
  date,
  location,
}) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mt-2">
          <span className="font-bold"></span>{" "}
          <span className="font-semibold text-blue-700">{location}</span>
        </p>
        <p className="mt-2">
          <span className="font-semibold mb-2"></span> {date}
        </p>
        <p className="mt-2">{description}</p>
        {additionalDetails && <p className="mt-4">{additionalDetails}</p>}
      </div>
    </div>
  );
}
function TechnologySkill({ imageUrl }) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden" style={{ width: '80px', height: '80px', margin: '8px' }}>
      <div className="p-2">
        <div className="flex items-center justify-center h-full">
          <Image
            src={imageUrl}
            alt="Technology Icon"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}