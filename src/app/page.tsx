'use client'
import { Github, Linkedin, Mail} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Chat from "@/components/chat";

function Skill({ name }: { name: string }) {
  return (
    <div className="flex items-center space-x-2 bg-gray-800 p-3 rounded-md">
      <span>{name}</span>
    </div>
  );
}

function Project({
  title,
  description,
  sourceLink,
}: {
  title: string;
  description: string;
  sourceLink: string;
}) 

{

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-4">
        <Link
          href={sourceLink}
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </Link>
      </div>
    </div>
  );
}

function Article({
  title,
  description,
  sourceLink,
}: {
  title: string;
  description: string;
  sourceLink: string;
}) 

{

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-4">
        <Link
          href={sourceLink}
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read
        </Link>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      
      <main className="max-w-5xl mx-auto space-y-16 py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center">
          <div className="mb-8">
            <Image
              src="/images/Me.jpg"
              alt="Jeffrey Mintah"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
          </div>
          <div>
            <p className="text-lg sm:text-xl text-gray-400 break-words whitespace-normal">I am 
              <span className="text-yellow-500 text-bold"> Jeffrey Mintah.</span></p>
            <p className="text-lg sm:text-xl text-gray-400 break-words whitespace-normal">A 
              <span className="text-yellow-500 text-bold"> Software Engineer.</span></p>
            <p className="text-lg sm:text-xl text-gray-400 break-words whitespace-normal">I love making interesting stuff with 
              <span className="text-yellow-500 text-bold"> Programming</span>🚀.</p>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <Link href="https://github.com/Minty-cyber"target="_blank" className="text-gray-400 hover:text-white">
              <Github size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/jeffrey-m-a846a2229" target="_blank" className="text-gray-400 hover:text-white">
              <Linkedin size={24} />
            </Link>
            <Link href="mailto:jeffreymintah737@gmail.com"  target="_blank" className="text-gray-400 hover:text-white">
              <Mail size={24} />
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4"> <span className="text-yellow-500 text-3xl text-bold"> / About Me...</span></h2>
          <div className="flex ">
            
            <p className="text-gray-300">
            Hey there, I’m Jeffrey, a <span className="text-yellow-500 text-bold">Sofware Engineer</span> with a strong expertise in building scalable, 
            efficient server-side applications. With a deep understanding of databases, APIs, and system architecture, 
            I specialize in creating seamless, high-performance solutions that power user experiences. 
            I&apos;m passionate about optimizing performance, ensuring security, and collaborating with cross-functional teams to deliver robust, reliable systems.
            I have a diverse skill set that includes expertise in <span className="text-yellow-500 text-bold">Python</span> , <span  className="text-yellow-500 text-bold">Go </span>
            and <span className="text-yellow-500 text-bold">JavaScript</span>. I am also intrigued by the concept of <span className="text-yellow-500 text-bold">AI</span> and 
            I am currently exploring deeply on how it can be combined with my skillsets to make a lasting difference in the Tech World.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4"><span className="text-yellow-500 text-3xl text-bold"> / Techs and Tools...</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <Skill name="Python" />
            <Skill name="Go" />
            <Skill  name="JavaScript" />
            <Skill name="TypeScript" />
            <Skill name="Django" />
            <Skill name="Django Rest Framework" />
            <Skill  name="FastAPI" />
            <Skill name="Flask" />
            <Skill name="Gin" />
            <Skill name="NodeJS" />
            <Skill name="AlpineJS" />
            <Skill name="NextJS" />
            <Skill  name="NGINX" />
            <Skill name="Docker" />
            <Skill name="Postman" />
            <Skill name="RabbitMQ" />
            <Skill name="SQLAlchemy" />
            <Skill name="GraphQL" />
            <Skill name="Celery" />
            <Skill name="DBeaver" />
          


          </div>
        </section>

        {/* Projects Section */}

        <section>
          <h2 className="text-2xl font-semibold mb-4"><span className="text-yellow-500 text-3xl text-bold"> / Open Source Contributions...</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Project
              title="FastAPI FullStack Template"
              description="Refactored Imports in a file
              and Ensured code effectiveness in a function and its declaration"
              sourceLink="https://github.com/Minty-cyber/full-stack-fastapi-template"
            />
            <Project
              title="Djate"
              description="Engineered the usage of uv as the package manager, 
                Reconfigured the MakeFile to implement uv as the package manager, 
                Implemented the Github workflow to install uv, flake8 and black cli as a linter and formatter"
              sourceLink="https://github.com/Minty-cyber/djate"
            />
           
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4"><span className="text-yellow-500 text-3xl text-bold"> / Projects...</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Project
              title="LinkInk"
              description="A full stack note taking application with advanced AI features"
              sourceLink="https://github.com/Minty-cyber/linkink"
            />
            <Project
              title="BasicLingua Web 🤖"
              description="A webapp that shows the demo of how the basiclingua library works with an LLM Python library. 
              It has features of Text Summarization, Text Translate, Text Intent and so forth..."
              sourceLink="https://github.com/Minty-cyber/BasicLingua-Webapp"
            />
            <Project
              title="LinguaDoc 🤖"
              description="A desktop application for translating languages
               and giving users the functionality to export as a word document🚀"
              sourceLink="https://github.com/Minty-cyber/LinguaDoc"
            />
            <Project
              title="PDF Assistant 🤖"
              description="An application that allows you to interact with your PDF's by answering questions based on the PDF's you upload ⚓."
              sourceLink="https://github.com/Minty-cyber/PDF-Assistant"
            />
          </div>
        </section>

      

        <section>
          <h2 className="text-2xl font-semibold mb-4"><span className="text-yellow-500 text-3xl text-bold"> / Articles...</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Article
              title="React-Django CRUD"
              description="An article on combining React and Django"
              sourceLink="https://jeffmint.hashnode.dev/building-a-crud-application-with-react-and-django-a-todo-application"
            />
            <Article
              title="Code that Speaks"
              description="Talking and hearing back from your codes with Python"
              sourceLink="https://jeffmint.hashnode.dev/code-that-speaks-a-beginners-guide-to-pyttsx3-text-to-speech-tts-in-python"
            />
           
          </div>
        </section>

          {/* Contact Section */}
          <section>
          <h2 className="text-2xl font-semibold mb-4"><span className="text-yellow-500 text-3xl text-bold"> / Contact Me...</span></h2>
          <p className="text-gray-300 mb-4">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="text-center">
            <Link
              href="mailto:jeffreymintah737@gmail.com"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

          <div className="bg-gray-900 text-gray-100">
         
          <Chat />
        </div>
    </div>
  );
}
