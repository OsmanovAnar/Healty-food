import Cards from './card'

const Section3 = () => {
  return (
    <section className="flex h-[480px] w-[1110px] flex-col items-center justify-between">
      <div className="flex h-[240px] items-center justify-center">
        <img className="" src="/WORK.png" alt="" />
        <img className="absolute" src="/HowItWorks.png" alt="" />
      </div>
      <Cards />
    </section>
  )
}

export default Section3
