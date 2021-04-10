import React from 'react'
// import MovieItems from '../../components/Home/MovieItems/MovieItems'
import Axios from "axios";
import CarouselItem from '../../components/Home/Carousel/CarouselItem';
import Search from '../../components/Home/Search/Search';
import SlideMovie from '../../components/Home/SlideMovie/SlideMovie';
import SlideMobie from '../../components/Home/SlideMobie/SlideMobie';
import Loading from '../../Layouts/Loading/Loading';
import New from '../../components/Home/New/New';
import MovieTheater from '../../components/Home/MovieTheater/MovieTheater';
import ScrollToTop from "../../Layouts/ScrollToTop/ScrollToTop";


export default function Home(props) {
    return (
        <>
            <ScrollToTop/>
            <CarouselItem/>
            {/* <Search/> */}
            <SlideMovie/>
            <MovieTheater/>
            <New/>
            <SlideMobie/>
        </>
    )
    
}
