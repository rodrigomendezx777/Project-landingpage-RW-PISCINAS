import BannerCarousel from './components/layouts/BannerCarousel/BannerCarousel.component';
import TestimonialCarousel from './components/Testimonials/TestimonialCarousel';
import FAQAccordion from './components/FAQAccordion/FAQAccordion'
import ProductList from './components/ProductList/ProductList.component'
import RotatingProductGrid from './components/RotatingProduct/RotatingProductGrid'
import Carousel from './components/layouts/CarouselProducts/Carousel'


export default function Home() {
  const items = [
    {
      image: "/images/Logo/logo_rw.png",
      title: "Elegance Cardigan",
      price: "From $10.00",
    },
    {
      image: "/images/Logo/logo_rw.png",
      title: "Harmony Coffee Table",
      price: "From $10.00",
    },
    {
      image: "/images/Logo/logo_rw.png",
      title: "Pro Smartwatch",
      price: "From $10.00",
    },
    {
      image: "/images/Logo/logo_rw.png",
      title: "Carmine Platform Sandals",
      price: "From $10.00",
    },
    {
      image: "/images/Logo/logo_rw.png",
      title: "Carmine Platform Sandals",
      price: "From $10.00",
    },
    {
      image: "/images/Logo/logo_rw.png",
      title: "Carmine Platform Sandals",
      price: "From $10.00",
    },
    {
      image: "/images/Logo/logo_rw.png",
      title: "Carmine Platform Sandals",
      price: "From $10.00",
    },
    {
      image: "/images/Logo/logo_rw.png",
      title: "Carmine Platform Sandals",
      price: "From $10.00",
    },
    {
      image: "/images/Logo/logo_rw.png",
      title: "Carmine Platform Sandals",
      price: "From $10.00",
    },
    {
      image: "/images/Logo/logo_rw.png",
      title: "Carmine Platform Sandals",
      price: "From $10.00",
    },
    {
      image: "/images/Logo/logo_rw.png",
      title: "Carmine Platform Sandals",
      price: "From $10.00",
    },
  ]

  const images = [
    '/images/banners/banner1.png',
    '/images/banners/banner2.png',
    '/images/banners/banner3.png',
    '/images/banners/banner4.png',
  ];

  const testimonials = [
    { id: 1, text: "Serviço excelente! A piscina ficou pronta em tempo recorde.", name: "João Silva", avatar: "/images/testimonials/joao.jpg" },
    { id: 2, text: "Equipe muito atenciosa e qualidade acima do esperado.", name: "Maria Oliveira", avatar: "/images/testimonials/maria.jpg" },
    { id: 3, text: "Superou todas as expectativas, recomendo a todos!", name: "Carlos Souza", avatar: "/images/testimonials/carlos.jpg" },
    { id: 4, text: "meu pau é grande!", name: "Carlos Souza", avatar: "/images/testimonials/carlos.jpg" },
  ];




  return (
  <>
    
    <BannerCarousel images={images} />
    <RotatingProductGrid />
    <TestimonialCarousel testimonials={testimonials} />
    <Carousel items={items} />
    <ProductList />
    <FAQAccordion />

    
    
  
  </>
    
  );
}
