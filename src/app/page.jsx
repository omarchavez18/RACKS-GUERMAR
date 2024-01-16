import Gallery from '@/components/gallery/Gallery'
import VideoSection from '@/components/videoSection/VideoSection'
import PrincipalClients from '@/components/principalClients/PrincipalClients'

export default function Home() {
  return (
    <>
      <VideoSection
        video={'./video/home/homeVideo.mp4'}
        title={'GUERMAR MUEBLES METALICOS'}
        subtitle={'Soluciones para todo tipo de necesidades'}
      />
      <Gallery />
      <PrincipalClients />
    </>
  )
}
