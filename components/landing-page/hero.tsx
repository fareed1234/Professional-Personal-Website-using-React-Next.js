import Image from "next/image"
import ContactFormButton from "./contact-form-button"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        {/* Text content - takes full width on mobile */}
        <div className="w-full md:w-3/5 z-10">
          <h1 className="text-black dark:text-white">
           I'm the First
            <span className="block text-[#2768e1] dark:text-[#2768e1]">React Developer</span>
           Student
          </h1>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            I build high-quality, scalable platform—client portals, marketplaces, AI automations, and SaaS—using the
            best tools for the job, no shortcuts.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton />
            <a href="#services" className="btn-secondary text-black dark:text-white">
              Learn more
            </a>
          </div>
        </div>

        {/* Image - hidden on mobile, visible on md and up */}
        <div className="hidden md:w-3/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
          <Image
            src="/hero-pic.png"
            alt="Robot-on-a-MacBook"
            width={500}
            height={500}
            className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
          />
        </div>
      </div>
    </section>
  )
}
