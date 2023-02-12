import React from 'react';
import menu from '../img/combo1.webp';
import falafel from '../img/paraiso.webp';
import franq from '../img/franquicia.webp';
import pet from '../img/petfriendly.webp';
import jugo from '../img/jugos.webp'
import veg from '../img/vegetales.webp'
import eventos from '../img/eventos.webp'

const About = () => {
    return (
        <><div className='bg-greenveg h-screen'>Header</div>
        <hr className='w-48 h-1 mx-auto my-10 bg-orangeveg'></hr>
            <section className=''>
                <h2 className='text-green-500 font-questrial text-center text-2xl md:text-4xl md:mb-5'>CONOCÉ LA MEJOR #STREETFOOD</h2>
                <h2 className='text-green-500 font-yellowtail text-center mb-10 text-2xl md:text-4xl'>Del Medio Oriente</h2>
            </section>
        <hr className='w-48 h-1 mx-auto my-10 bg-orangeveg mb-32'></hr>
            <section className='mb-52 h-96 bg-greenveg md:mb-44 grid place-content-center'>
                <div class="w-9/12 mx-auto md:max-w-full md:flex">
                    <div class="md:w-3/5 flex-none">
                        <img className='rounded-full' src={menu} alt="" />
                    </div>
                    <div class="bg-white -mt-10 border-2 border-greenveg place-self-center p-4 grid place-content-center md:w-96 md:h-full md:border-0">
                        <div class="mb-8">
                            <div class=" text-center font-questrial">
                                <h2 className='text-gray-800 font-bold mt-8 text-3xl md:w-96 md:text-3xl'>El menú mas apetitoso</h2>
                                <h2 className='font-yellowtail text-gray-800 text-4xl mb-6 md:mb-14'>en un click</h2>
                                <button className='bg-greenveg h-10 w-28 text-white text-2xl font-bold rounded shadow-lg hover:scale-110'>MENU</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mb-72 h-96 bg-orangeveg md:mb-52 grid place-content-center'>
                <div class="w-9/12 mx-auto md:max-w-full md:flex">
                    <div class="bg-white -mb-10 border-2 border-orangeveg place-self-center p-4 grid place-content-center md:h-full md:w-96 md:border-0">
                        <div class="mb-8">
                            <div class=" text-center">
                                <h2 className='font-yellowtail text-gray-800 text-3xl mb-2 md:text-5xl md:mb-8'>El paraiso del Falafel</h2>
                                <h3 className='mb-4 font-questrial text-gray-800 text-2xl md:mb-8'>¿Ya probaste nuestros platos?</h3>
                                <p className='font-questrial md:leading-6'>Disfrutá de una mezcla de sabores inigualables elaborados a base de especias, granos y un sinfín de vegetales como pimiento, cebolla, tomate, garbanzos, berenjenas.</p>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-3/5 flex-none">
                        <img className='rounded-full' src={falafel} alt="" />
                    </div>
                </div>
            </section>
            <section className='mb-48 h-96 bg-greenveg grid place-content-center'>
                <div class="w-9/12 mx-auto md:max-w-full md:flex">
                    <div class="md:w-3/5 flex-none">
                        <img className='rounded-full' src={franq} alt="" />
                    </div>
                    <div class="bg-white -mt-10 border-2 border-greenveg place-self-center p-4 grid place-content-center md:h-full md:border-0 md:m-0">
                        <div class="mb-8">
                            <div class="text-center font-questrial">
                                <h2 className='text-gray-800 mt-8 font-bold text-2xl mb-2 md:text-3xl'>¿Querés abrir una</h2>
                                <h2 className='mb-4 font-yellowtail text-gray-700 text-2xl md:text-4xl md:mb-8'>Franquicia?</h2>
                                <p className='mb-4 md:leading-6'>Veggie es una cadena de origen argentino, número uno en comidas rápidas del medio oriente. El rubro de Street food tiene un gran caudal y altos niveles de venta lo que facilita el retorno de la inversión, para más info sobre franquicias contactanos.</p>
                                <button className='bg-greenveg h-10 w-32 text-white text-lg font-bold rounded shadow-lg hover:scale-110 md:mt-4'>Contáctanos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex gap-3 flex-row flex-wrap justify-center md:justify-evenly'>
            <div className='w-36 relative rounded overflow-hidden md:w-72'>
                <img src={veg} alt='mascota' />
                <h1 class="absolute p-1 inset-x-0 bottom-4 bg-greenveg text-white font-questrial text-sm text-center md:text-xl">
                    Ingredientes mas frescos</h1>
            </div>
            <div className='w-36 relative rounded overflow-hidden md:w-72'>
                <img src={jugo} alt='mascota' />
                <h1 class="absolute p-1 inset-x-0 bottom-4 text-white font-questrial bg-greenveg text-sm text-center md:text-xl">
                    Probá nuestros jugos naturales</h1>
            </div>
            <div className='w-36 relative rounded overflow-hidden md:w-72'>
                <img src={pet} alt='mascota' />
                <h1 class="absolute p-1 inset-x-0 bg-greenveg bottom-4 text-white text-sm font-questrial text-center md:text-xl">
                    ¡Ven con tu amigo peludo!</h1>
            </div>
            <div className='w-36 relative rounded overflow-hidden md:w-72'>
                <img src={eventos} alt='mascota' />
                <h1 class="absolute p-1 inset-x-0 bg-greenveg bottom-4 text-white text-sm font-questrial text-center md:text-xl">
                    Invítanos a tus eventos</h1>
            </div>
            </section>
            </>
        )
    };

export default About