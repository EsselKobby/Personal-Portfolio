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
              alt="Bernard Essel"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
          </div>
          <div>
            <p className="text-lg sm:text-xl text-gray-400 break-words whitespace-normal">I am 
              <span className="text-yellow-500 text-bold"> Bernard Essel.</span></p>
            <p className="text-lg sm:text-xl text-gray-400 break-words whitespace-normal">A 
              <span className="text-yellow-500 text-bold"> Software Engineer.</span></p>
            <p className="text-lg sm:text-xl text-gray-400 break-words whitespace-normal">I love making interesting stuff and making impact with 
              <span className="text-yellow-500 text-bold"> Programming </span>🚀.</p>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <Link href="https://github.com/EsselKobby/"target="_blank" className="text-gray-400 hover:text-white">
              <Github size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/bernard-essel" target="_blank" className="text-gray-400 hover:text-white">
              <Linkedin size={24} />
            </Link>
            <Link href="mailto:essel.bernard.kobby@gmail.com"  target="_blank" className="text-gray-400 hover:text-white">
              <Mail size={24} />
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4"> <span className="text-yellow-500 text-3xl text-bold"> / About Me...</span></h2>
          <div className="flex ">
            
            <p className="text-gray-300">
            Hey there, I’m Bernard, a <span className="text-yellow-500 text-bold">Telecommunications Engineering</span> student passionate about networking, cybersecurity, and innovative tech solutions. I specialize in designing and troubleshooting network systems, with expertise in <span className="text-yellow-500 text-bold">MATLAB</span>, <span className="text-yellow-500 text-bold">Python</span>, and <span className="text-yellow-500 text-bold">web development</span>. 
            I’m also deeply involved in advancing STEM education and exploring how <span className="text-yellow-500 text-bold">AI</span> can solve real-world challenges.
            As a natural leader, I’ve led initiatives like <span className="text-yellow-500 text-bold">ENACTUS KNUST</span> and founded startups such as <span className="text-yellow-500 text-bold">FORESS Tech, Sneaks 'N' Wear & KalcHub</span>.
            Let’s connect and build something extraordinary together!
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4"><span className="text-yellow-500 text-3xl text-bold"> / Techs and Tools...</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <Skill name="Python" />
            <Skill  name="JavaScript" />
            <Skill name="Django" />
            <Skill name="Antenna Design" />
            <Skill name="MATLAB" />
            <Skill name="Graphic Design" />
            <Skill name="Photography" />
            <Skill name="Digital Marketing" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4"><span className="text-yellow-500 text-3xl text-bold"> / Projects...</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Project
              title="TeamTek"
              description="This is a repository that highlight a movie streaming website"
              sourceLink="https://github.com/EsselKobby/TeamTek"
            />
            <Project
              title="SE Repository 🤖"
              description="This is a repository that showcases my journey through my software engineering journey."
              sourceLink="https://github.com/EsselKobby/Software-Engineering"
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
              href="mailto:essel.bernard.kobby@gmail.com"
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
