export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-3xl text-4xl font-medium lg:text-5xl text-white">
            Programmer, Mobile Developer, Full Stack Developer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
                  className="rounded-[15px] shadow block w-full h-full object-cover"
                  alt="Mobile developer working"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Danilo Pérez, a passionate Mobile Developer and Full Stack Developer
                specializing in building cross-platform mobile applications and scalable web solutions
                across esports, fitness, and resource management platforms. I have extensive professional experience working with
                innovative companies such as{" "}
                <span className="font-bold">Codevico, CPS innovations, SaltStack For DevOps, and Juvo</span>.
                I thrive on creating impactful, user-centric mobile and web applications using modern technologies.
              </p>
              <p className="text-white">
                 My expertise spans <span className="font-bold">iOS and Android mobile development, cross-platform frameworks, and blockchain technologies</span>—paired with
                  full-stack technologies like React, Angular, Vue, Node.js, Express.js, MongoDB, PostgreSQL, and cloud deployment on AWS, Azure, and GCP.
                  I thrive in building scalable, high-performance mobile and web applications and creating impactful digital solutions
                  for diverse industries.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. My work across diverse
                    teams continues to expand the possibilities of mobile and full-stack
                    development, creating seamless user experiences across platforms.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Danilo Pérez
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
