import Image from "next/image"
import ContactFormButton from "./contact-form-button"

export default function CallToAction() {
  return (
    <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        {/* Text content - takes full width on mobile */}
        <div className="w-full md:w-3/5 z-10">
          <h2 className="text-black dark:text-white mb-6">
            Your Next Big Idea
            <span className="block text-[#2768e1] dark:text-[#2768e1]">Starts</span> Here
          </h2>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Have an idea or a problem that needs solving?
          </p>
          <p className="mb-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Let's chat. I'll help you explore the best approach, map out a plan, and see if we're the right fit.
          </p>
          <div>
            <ContactFormButton />
          </div>
        </div>

        {/* Image - hidden on mobile, visible on md and up */}
        <div className="hidden  md:w-3/6 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
          <Image
            src="/hero-pic.png"
            alt="Purple Wave"
            width={500}
            height={500}
            className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
          />
        </div>
      </div>
    </section>
  )
}
