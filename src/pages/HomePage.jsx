import { useSelector } from "react-redux"
import AlbumSlider from "../Components/Slider/AlbumSlider/AlbumSlider";
import Slider from "../Components/Slider/Slider"

const HomePage = () => {
  const albums = useSelector(state => state.albumSlice);
  const tracks = useSelector(state => state.trackSlice);

  return (
    <div className="container mt-2">
      <div className="container">
        <AlbumSlider
          slidesPerView={1}
          size='big'
          img='img__big'
          array={albums}
          title='Albums'
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        />
      </div>

      <div className="container mt-2">
        <Slider
          slidesPerView={2}
          size='small'
          img='img__small'
          array={tracks.list}
          title='Tracks'
          breakpoints={{
            600: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 8,
              spaceBetween: 10,
            }
          }}
        />
      </div>


    </div>
  )
}

export default HomePage