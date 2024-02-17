import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      <header className="text-center py-4">
        <h1 className="text-4xl font-bold">About Me</h1>
      </header>
      <section className="py-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <p>Peloton Interactive (2021 – Present)</p>
        <p>Paperspace (2019 – 2021)</p>
        {/* Add more experiences */}
      </section>
      <section className="py-4">
        <h2 className="text-2xl font-semibold">Interests</h2>
        <p>
          Following economic trends, new technology, competitive sports
          (basketball is my favorite), human psychology.
        </p>
      </section>
      <section className="py-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>Email: kevin.s.kabore@gmail.com</p>
        <p>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/kevinkabore/">
            Kevin Kabor&eacute;s LinkedIn Profile
          </a>
        </p>
      </section>
    </div>
  )
}

export default Home
