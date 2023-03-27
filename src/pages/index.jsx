import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const CarShow = dynamic(() => import('@/components/canvas/CarShow'), { ssr: false })

// Dom components go here
export default function Page(props) {
  return (
    <></>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <CarShow />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}


// credits: "Mazda RX-7 FC" (https://skfb.ly/6Tnso) by Lexyc16 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
