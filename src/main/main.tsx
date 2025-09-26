import Section1 from './sections/section-1/section-1'
import Section2 from './sections/section-2/Section-2'
import Section3 from './sections/section-3/section-3'
import Section4 from './sections/section-4/section-4'
import Section5 from './sections/section-5/section-5'

const Main = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </main>
  )
}

export default Main
