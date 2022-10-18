import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard.js'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home() {


  const exploreData = [{"img":"https://links.papareact.com/5j2","location":"London","distance":"45-minute drive"},{"img":"https://links.papareact.com/1to","location":"Manchester","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/40m","location":"Liverpool","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/msp","location":"York","distance":"4-hour drive"},{"img":"https://links.papareact.com/2k3","location":"Cardiff","distance":"45-minute drive"},{"img":"https://links.papareact.com/ynx","location":"Birkenhead","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/kji","location":"Newquay","distance":"6-hour drive"},{"img":"https://links.papareact.com/41m","location":"Hove","distance":"2-hour drive"}]

  const cardData = [{"img":"https://links.papareact.com/2io","title":"Outdoor getaways"},{"img":"https://links.papareact.com/q7j","title":"Unique stays"},{"img":"https://links.papareact.com/s03","title":"Entire homes"},{"img":"https://links.papareact.com/8ix","title":"Pet allowed"}]


  return (
   <div className=''>

    <Head><title>Airbnb 2.0</title></Head>





      <Header />


      <Banner />


      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          {/* Explore Nearby */}

          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>



          {/* Pull some data from server */}


          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'>

          {
            exploreData?.map(({img,distance,location}) => (
              <SmallCard key={img} location={location} img={img} distance={distance} />
            ))
          }
          


          

          </div>
          </section>



            {/* Card Data */}


            <section>
              <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
            


          <div className='flex space-x-6 overflow-scroll scrollbar-hide p-3 -ml-3 '>


            {
              cardData?.map(({img,title}) => (
                <MediumCard key={img} img={img} title={title}   />
              ))
            }



          </div>

          </section>



          <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoor"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
          />


        
      </main>


          <div className='bg-gray-100'>
            <Footer />

            </div>



   </div>
  )
}


