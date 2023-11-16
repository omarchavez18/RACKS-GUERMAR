import Gallery from '@/components/gallery/Gallery'
import VideoSection from '@/components/videoSection/VideoSection'
import PrincipalClients from '@/components/principalClients/PrincipalClients'

export default function Home() {
  return (
    <>
      <VideoSection />
      <Gallery />
      <PrincipalClients />
    </>
  )
}
