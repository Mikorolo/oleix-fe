import React from 'react';
import {Button, Carousel} from "react-bootstrap";

const Home = () => {
    return (
        <div>
          <h2 className='mt-3 d-flex justify-content-center'>Witaj w systemie USOS Politechniki Świętokrzyskiej</h2>
            <Carousel className='mt-3' variant='dark'>
                <Carousel.Item>
                    <img
                        className="d-block justify-content-center mx-auto"
                        src="https://nowymarketing.pl/i/articles/19609_l2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-white'>Lista studentów</h3>
                        <Button className='fw-bold'>Przejdź do</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block justify-content-center mx-auto"
                        src="https://gfx.dlastudenta.pl/photos/birger-kollmeier-910261_960_720_600xauto.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-white'>Lista prowadzących</h3>
                        <Button className='fw-bold'>Przejdź do</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block justify-content-center mx-auto"
                        src="https://cdn.galleries.smcloud.net/t/galleries/gf-LhWQ-2YTw-aU2C_rodzina-500-plus-gdzie-zlozyc-wniosek-w-rzeszowie-nabor-wnioskow-rusza-juz-w-lutym-664x442.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-white'>Wnioski</h3>
                        <Button className='fw-bold'>Przejdź do</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block justify-content-center mx-auto"
                        src="https://www.intersoft.pl/gfx/szkolenia_top_855.png"
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-white'>Zarządzaj grupami</h3>
                        <Button className='fw-bold'>Przejdź do</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;