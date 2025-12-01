import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const PricingFull = () => {
  const { addItem, itemCount } = useCart();
  const { toast } = useToast();
  const [selectedProducts, setSelectedProducts] = useState<{[key: string]: string}>({});
  const caviarProducts = [
    {
      id: "caviar-sterlet",
      name: "Икра стерляди",
      description: "Черная, зернистая, малосольная, без консервантов",
      promo: true,
      prices: [
        { volume: "Менее 1 кг", price: "44 000 ₽/кг", priceNum: 44000, oldPrice: "48 000 ₽" },
        { volume: "Более 1 кг", price: "42 000 ₽/кг", priceNum: 42000, oldPrice: "48 000 ₽" },
        { volume: "Более 3 кг", price: "40 000 ₽/кг", priceNum: 40000, oldPrice: "48 000 ₽" }
      ]
    },
    {
      id: "caviar-sturgeon-full",
      name: "Икра осетра",
      description: "Черная, зернистая, малосольная, без консервантов",
      promo: false,
      prices: [
        { volume: "Любой объем", price: "56 000 ₽/кг", priceNum: 56000, oldPrice: null }
      ]
    }
  ];

  const fishProducts = [
    {
      id: "sturgeon-fresh",
      name: "Осетр речной",
      description: "Не потрошеный, охлажденный или быстрозамороженный",
      prices: [
        { volume: "3-4 кг", price: "1 750 ₽/кг", priceNum: 1750, oldPrice: null },
        { volume: "4-5 кг", price: "1 850 ₽/кг", priceNum: 1850, oldPrice: null },
        { volume: "5-6 кг", price: "1 950 ₽/кг", priceNum: 1950, oldPrice: null },
        { volume: "6-8 кг", price: "1 900 ₽/кг", priceNum: 1900, oldPrice: "2 050 ₽" },
        { volume: "8-10 кг", price: "2 000 ₽/кг", priceNum: 2000, oldPrice: "2 150 ₽" },
        { volume: "10+ кг", price: "2 250 ₽/кг", priceNum: 2250, oldPrice: null }
      ]
    },
    {
      id: "sterlet-fresh",
      name: "Стерлядь речная",
      description: "Охлажденная или быстрозамороженная",
      prices: [
        { volume: "До 1,5 кг", price: "1 500 ₽/кг", priceNum: 1500, oldPrice: "1 650 ₽" },
        { volume: "От 1,5 кг", price: "1 650 ₽/кг", priceNum: 1650, oldPrice: null }
      ]
    },
    {
      id: "sturgeon-smoked-hot",
      name: "Осетр горячего копчения",
      description: "На опилках (ветла + груша + ольха)",
      prices: [
        { volume: "2,5-3,5 кг/шт", price: "3 600 ₽/кг", priceNum: 3600, oldPrice: null, note: "потрошеный с головой и хвостом" },
        { volume: "2,2-3,3 кг/шт", price: "3 950 ₽/кг", priceNum: 3950, oldPrice: null, note: "потрошеный без головы и хвоста" }
      ]
    },
    {
      id: "sturgeon-balyk",
      name: "Балык-книжка из осетра",
      description: "Холодного подкопчения на опилках (шелковица)",
      prices: [
        { volume: "2,5-4 кг", price: "4 900 ₽/кг", priceNum: 4900, oldPrice: null, note: "без головы и хвоста" }
      ]
    }
  ];

  const handleAddToCart = (productId: string, productName: string, price: number, volume: string) => {
    addItem({
      id: `${productId}-${volume}`,
      name: `${productName} (${volume})`,
      price: price,
      weight: volume,
      image: "https://cdn.poehali.dev/files/b80e75be-2174-4327-824f-2d51ef4240d6.jpg"
    });
    toast({
      title: "Добавлено в корзину",
      description: `${productName} (${volume}) добавлен в корзину`,
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
            <div className="inline-block bg-secondary/20 text-secondary px-6 py-2 rounded-full mb-4 font-bold text-lg">
              🔥 АКЦИЯ 🔥
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Прайс-лист
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Икра черная, зернистая, малосольная, без консервантов
            </p>
          </div>

          <div className="space-y-8 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">🥚 Икра премиум качества</h2>
            {caviarProducts.map((product, index) => (
              <Card key={index} className={`overflow-hidden ${product.promo ? 'border-2 border-secondary shadow-xl' : ''}`}>
                <CardHeader className="bg-muted/50">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{product.name}</h3>
                      <p className="text-muted-foreground">{product.description}</p>
                    </div>
                    {product.promo && (
                      <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap">
                        🔥 АКЦИЯ
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {product.prices.map((priceItem, priceIndex) => (
                      <div key={priceIndex} className="p-4 bg-background rounded-lg border-2 border-border hover:border-primary transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <span className="font-semibold text-lg">{priceItem.volume}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{priceItem.price}</div>
                            {priceItem.oldPrice && (
                              <div className="text-muted-foreground line-through text-sm">{priceItem.oldPrice}</div>
                            )}
                          </div>
                        </div>
                        <Button 
                          onClick={() => handleAddToCart(product.id, product.name, priceItem.priceNum, priceItem.volume)}
                          className="w-full bg-primary hover:bg-primary/90 rounded-full"
                          size="sm"
                        >
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          Добавить в корзину
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-8 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">🐟 Осетровые рыбы</h2>
            {fishProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-muted/50">
                  <h3 className="text-2xl font-bold text-primary mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {product.prices.map((priceItem, priceIndex) => (
                      <div key={priceIndex} className="p-4 bg-background rounded-lg border-2 border-border hover:border-primary transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="font-semibold text-lg">{priceItem.volume}</div>
                            {priceItem.note && (
                              <div className="text-sm text-muted-foreground mt-1">{priceItem.note}</div>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{priceItem.price}</div>
                            {priceItem.oldPrice && (
                              <div className="text-muted-foreground line-through text-sm">{priceItem.oldPrice}</div>
                            )}
                          </div>
                        </div>
                        <Button 
                          onClick={() => handleAddToCart(product.id, product.name, priceItem.priceNum, priceItem.volume)}
                          className="w-full bg-primary hover:bg-primary/90 rounded-full"
                          size="sm"
                        >
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          Добавить в корзину
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
            <CardContent className="py-12">
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div>
                  <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-primary">Самовывоз</h3>
                  <p className="text-muted-foreground">Из Северного Бутово</p>
                </div>
                <div>
                  <Icon name="Truck" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-primary">Доставка</h3>
                  <p className="text-muted-foreground">Яндекс доставка по Москве</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <a href="tel:+79999999999">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full font-semibold text-lg px-8 py-6">
                    <Icon name="Phone" size={24} className="mr-2" />
                    Связаться с нами
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg border-2 border-border">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={24} className="text-primary mt-1 flex-shrink-0" />
              <div className="text-muted-foreground">
                <p className="font-semibold mb-2">Важная информация:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Все цены указаны за 1 килограмм продукции</li>
                  <li>• Икра продается без консервантов, только малосол</li>
                  <li>• Рыба доступна в охлажденном или быстрозамороженном виде</li>
                  <li>• При покупке больших объемов действуют специальные цены</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingFull;