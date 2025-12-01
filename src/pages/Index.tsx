import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { addItem, itemCount } = useCart();
  const { toast } = useToast();
  const scrollToProducts = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: "caviar-sturgeon",
      name: "Икра Осетра",
      description: "Нежный вкус с ореховыми нотами. Крупные икринки насыщенного цвета с характерным морским ароматом.",
      weight: "50г",
      price: 4500,
      priceText: "4 500 ₽",
      image: "https://cdn.poehali.dev/files/b80e75be-2174-4327-824f-2d51ef4240d6.jpg"
    },
    {
      id: "caviar-salmon",
      name: "Икра Лосося",
      description: "Классический деликатес с богатым вкусом. Яркие икринки правильной формы, тающие во рту.",
      weight: "100г",
      price: 1800,
      priceText: "1 800 ₽",
      image: "https://cdn.poehali.dev/files/1027461d-e919-47fc-905f-227e056054db.jpg"
    },
    {
      id: "caviar-gift-set",
      name: "Подарочный Набор",
      description: "Эксклюзивный набор из двух видов икры в премиальной упаковке. Идеальный подарок для особого случая.",
      weight: "150г",
      price: 7900,
      priceText: "7 900 ₽",
      image: "https://cdn.poehali.dev/files/d2e5eef2-6849-4470-96ed-63b85b138686.jpeg"
    }
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      weight: product.weight,
      image: product.image
    });
    toast({
      title: "Добавлено в корзину",
      description: `${product.name} добавлен в корзину`,
    });
  };

  const advantages = [
    {
      icon: "Snowflake",
      title: "Свежесть",
      description: "Прямые поставки с рыбных ферм. Доставляем в термокоробках, чтобы каждая икринка сохранила свой вкус."
    },
    {
      icon: "Award",
      title: "Наследие",
      description: "Мы знаём всё об икре. Наши эксперты помогут вам сделать идеальный выбор."
    },
    {
      icon: "Heart",
      title: "Доверие",
      description: "Более 2000 довольных клиентов и сотни восторженных отзывов."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Выберите икру на сайте",
      description: "Изучите каталог и выберите продукт, который идеально подойдет для вашего случая"
    },
    {
      number: "02",
      title: "Оформите заказ",
      description: "Укажите адрес и удобное время доставки. Мы подстроимся под ваш график"
    },
    {
      number: "03",
      title: "Получите свежий продукт",
      description: "Курьер доставит икру в надежной термоупаковке прямо к вашей двери"
    }
  ];

  const reviews = [
    {
      name: "Анна П.",
      text: "Заказывала икру для праздничного стола. Качество превосходное, доставили быстро в специальной упаковке. Гости были в восторге!",
      rating: 5
    },
    {
      name: "Сергей В.",
      text: "Покупаю здесь уже третий раз. Икра всегда свежая, вкус потрясающий. Отдельное спасибо за сервис и внимательное отношение.",
      rating: 5
    },
    {
      name: "Елена М.",
      text: "Подарочный набор стал идеальным подарком для родителей. Упаковка великолепная, а качество икры на высшем уровне!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Как хранить икру после вскрытия?",
      answer: "После вскрытия банки икру следует хранить в холодильнике при температуре от 0 до +4°C и употребить в течение 2-3 дней. Обязательно держите икру в оригинальной упаковке или переложите в стеклянную емкость."
    },
    {
      question: "Вы доставляете по всей России?",
      answer: "Да, мы осуществляем доставку по всей России. Икра транспортируется в специальных термоконтейнерах с хладагентами. По Москве доставка осуществляется курьером в день заказа, в другие города — через транспортные компании."
    },
    {
      question: "Можно ли оформить подарочную упаковку?",
      answer: "Конечно! Мы предлагаем премиальную подарочную упаковку с фирменной лентой и поздравительной открыткой. Эта опция доступна при оформлении заказа. Стоимость упаковки — 500 рублей."
    }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://cdn.poehali.dev/files/82499c38-de6c-4bad-be59-1514bf50108d.jpg')"
    }}>
      <div className="fixed top-6 right-6 z-50">
        <Link to="/cart">
          <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full shadow-2xl relative">
            <Icon name="ShoppingCart" size={24} className="mr-2" />
            Корзина
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                {itemCount}
              </span>
            )}
          </Button>
        </Link>
      </div>

      <section 
        className="relative min-h-screen flex items-center justify-center"
      >
        <div className="container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Икра, достойная момента
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto opacity-90">
            Наследие вкуса в каждой икринке
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-80">
            Премиальная икра с бережной доставкой до вашего стола.<br />
            Идеально для праздника, ужина или особого подарка.
          </p>
          <Button 
            onClick={scrollToProducts}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-2xl transition-all hover:scale-105"
          >
            Выбрать икру
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Наша коллекция
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Тщательно отобранные деликатесы высочайшего качества
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground font-medium">{product.weight}</span>
                    <span className="text-2xl font-bold text-secondary">{product.priceText}</span>
                  </div>
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-primary hover:bg-primary/90 rounded-full font-semibold"
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Всего 3 шага до идеальной икры
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary text-foreground font-bold text-3xl mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-secondary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Нас рекомендуют
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 border-border hover:border-secondary transition-all">
                <CardContent className="pt-8 pb-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  <p className="font-bold text-primary">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-border rounded-lg px-6 hover:border-secondary transition-all"
              >
                <AccordionTrigger className="text-lg font-semibold text-primary hover:text-secondary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section 
        className="py-24 relative bg-primary/95 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 text-center text-white z-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Превратите ваш вечер в событие
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Закажите икру прямо сейчас и получите бесплатную доставку<br />
            по Москве при заказе от 5000 рублей
          </p>
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-foreground font-semibold text-lg px-10 py-6 rounded-full shadow-2xl transition-all hover:scale-105"
          >
            Сделать заказ
          </Button>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Икорный Дом</h3>
              <p className="opacity-80 leading-relaxed">
                Премиальная икра с 2020 года.<br />
                Качество, проверенное временем.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <p className="opacity-80 mb-2">Телефон: +7 (495) 123-45-67</p>
              <p className="opacity-80 mb-2">Email: info@ikorniydom.ru</p>
              <p className="opacity-80">Москва, ул. Примерная, 1</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Часы работы</h4>
              <p className="opacity-80 mb-2">Пн-Пт: 9:00 - 21:00</p>
              <p className="opacity-80 mb-2">Сб-Вс: 10:00 - 20:00</p>
              <p className="opacity-80">Без выходных</p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center opacity-60">
            <p>© 2024 Икорный Дом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;