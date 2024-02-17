import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">About Me</h1>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Experience
        </h2>
        <ul className="list-disc list-inside">
          <li>Peloton Interactive (2021 – Present)</li>
          <li>Paperspace (2019 – 2021)</li>
          {/* Add more experiences */}
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Interests
        </h2>
        <p>
          Following economic trends, new technology, competitive sports
          (basketball is my favorite), human psychology.
        </p>
      </section>
      <section>
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
            Kevin Kabor&eacute;'s LinkedIn Profile
          </a>
        </p>
      </section>
    </div>
  )
}

export default Home
