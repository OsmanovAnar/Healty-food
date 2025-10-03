import TimeAdresPhone from '../../../components/time-adres-phone'

const Section1 = () => {
  return (
    <section className="my-[80px] flex h-full w-full flex-col items-center">
      <img src="/Cooking with fine Wi.png" alt="" />

      <img className="mt-[16px]" src="/Whether you barbecue.png" alt="" />

      <button className="mt-[40px] h-[72px] w-[220px] cursor-pointer rounded-[43px] bg-[#34C759] text-[18px]">
        Order now
      </button>

      <TimeAdresPhone />
    </section>
  )
}

export default Section1
