import {Hero} from './components/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      {/* Main Content */}
      <div>
        <div className="container mx-auto px-4 py-8" id="about">
          <section className="mb-8" id="about">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              About
            </h2>
            <ul className="list-disc list-inside">
              <li>Peloton Interactive (2021 – Present)</li>
              <li>Paperspace (2019 – 2021)</li>
              {/* Add more experiences */}
            </ul>
          </section>
          <section className="mb-8" id="experience">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Experience
            </h2>
            <ul className="list-disc list-inside">
              <li>Peloton Interactive (2021 – Present)</li>
              <li>Paperspace (2019 – 2021)</li>
              {/* Add more experiences */}
            </ul>
          </section>
          <section className="mb-8" id="interests">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Interests
            </h2>
            <p>
              Following economic trends, new technology, competitive sports
              (basketball is my favorite), human psychology.
            </p>
          </section>
          <section id="contact">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Contact
            </h2>
            <p>Email: kevin.s.kabore@gmail.com</p>
            <p>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/kevinkabore/"
                className="text-blue-600 hover:underline"
              >
                Kevin Kabor&eacute;&apos;s LinkedIn Profile
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
