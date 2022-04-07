import ServicesContainer from './ServicesContainer'

export default function Services() {
  return (
    <div className="z-20 bg-[#E9FBF8] py-20 z-10">
      <div className="contianer mx-auto max-w-4xl">
        <div className="w-3/4 mx-auto text-center mb-8">
          <h2 className="text-5xl font-bold mb-3">Nossos serviços</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
        </div>
        <ServicesContainer />
      </div>
    </div>
  )
}