import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Pricing = () => {
  const { addItem, itemCount } = useCart();
  const { toast } = useToast();

  const products = [
    {
      id: "caviar-sturgeon",
      name: "Икра Осетра",
      description: "Нежный вкус с ореховыми нотами",
      weight: "50г",
      price: 4500,
      priceText: "4 500 ₽",
      image: "https://cdn.poehali.dev/files/b80e75be-2174-4327-824f-2d51ef4240d6.jpg",
      features: ["Крупные икринки", "Ореховый вкус", "Морской аромат", "Премиум качество"],
      popular: false
    },
    {
      id: "caviar-salmon",
      name: "Икра Лосося",
      description: "Классический деликатес с богатым вкусом",
      weight: "100г",
      price: 1800,
      priceText: "1 800 ₽",
      image: "https://cdn.poehali.dev/files/1027461d-e919-47fc-905f-227e056054db.jpg",
      features: ["Яркие икринки", "Правильная форма", "Тающая текстура", "Сбалансированный вкус"],
      popular: true
    },
    {
      id: "caviar-gift-set",
      name: "Подарочный Набор",
      description: "Эксклюзивный набор из двух видов икры",
      weight: "150г",
      price: 7900,
      priceText: "7 900 ₽",
      image: "https://cdn.poehali.dev/files/d2e5eef2-6849-4470-96ed-63b85b138686.jpeg",
      features: ["Премиальная упаковка", "Два вида икры", "Идеально для подарка", "Фирменная лента"],
      popular: false
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
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

      <div className="fixed top-6 left-6 z-50">
        <Link to="/">
          <Button variant="outline" size="lg" className="rounded-full shadow-lg bg-background/80 backdrop-blur-sm">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Главная
          </Button>
        </Link>
      </div>

      <section className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Наши цены
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены на деликатесы премиум-класса. Качество, которое стоит своих денег.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className={`relative overflow-hidden hover:shadow-2xl transition-all hover:scale-105 ${
                  product.popular ? 'border-2 border-secondary shadow-xl' : ''
                }`}
              >
                {product.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Популярно
                    </span>
                  </div>
                )}
                
                <div className="h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardHeader className="pb-4">
                  <h3 className="text-2xl font-bold text-primary">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-4xl font-bold text-primary">{product.priceText}</span>
                      <span className="text-muted-foreground ml-2">/ {product.weight}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-primary hover:bg-primary/90 rounded-full font-semibold text-lg py-6"
                  >
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/50 border-2 border-border">
            <CardContent className="py-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Icon name="Truck" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-primary">Бесплатная доставка</h3>
                  <p className="text-muted-foreground">При заказе от 5000 ₽ по Москве</p>
                </div>
                <div>
                  <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-primary">Гарантия качества</h3>
                  <p className="text-muted-foreground">Возврат денег в течение 14 дней</p>
                </div>
                <div>
                  <Icon name="Clock" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-primary">Быстрая доставка</h3>
                  <p className="text-muted-foreground">Доставка в день заказа по Москве</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
