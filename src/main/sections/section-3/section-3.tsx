import Cards from "./card"

const Section3 = () => {
  return (
    <section className="h-[480px] w-[1110px] flex flex-col items-center justify-between">
      <div className="flex items-center justify-center h-[240px]">
        <img className="" src="/WORK.png" alt="" />
        <img className="absolute" src="/HowItWorks.png" alt="" />
      </div>
      <Cards />
    </section>
  )
}

export default Section3
