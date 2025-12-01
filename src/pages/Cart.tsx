import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();
  const { toast } = useToast();
  const [isOrdering, setIsOrdering] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const handleOrder = () => {
    if (!customerName.trim() || !customerPhone.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive"
      });
      return;
    }

    setIsOrdering(true);
    setTimeout(() => {
      toast({
        title: "Заказ оформлен!",
        description: `Спасибо, ${customerName}! Мы свяжемся с вами по номеру ${customerPhone} для подтверждения заказа.`,
      });
      clearCart();
      setCustomerName("");
      setCustomerPhone("");
      setIsOrdering(false);
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://cdn.poehali.dev/files/82499c38-de6c-4bad-be59-1514bf50108d.jpg')"
        }}
      >
        <div className="container mx-auto px-4 py-20">
          <Card className="max-w-2xl mx-auto bg-background/95 backdrop-blur-sm">
            <CardContent className="text-center py-16">
              <Icon name="ShoppingCart" size={80} className="mx-auto mb-6 text-muted-foreground" />
              <h1 className="text-3xl font-bold mb-4 text-primary">Корзина пуста</h1>
              <p className="text-muted-foreground mb-8">
                Добавьте товары из каталога, чтобы оформить заказ
              </p>
              <Link to="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full">
                  Перейти в каталог
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://cdn.poehali.dev/files/82499c38-de6c-4bad-be59-1514bf50108d.jpg')"
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Корзина</h1>
            <Link to="/">
              <Button variant="outline" className="bg-white/90 hover:bg-white">
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="bg-background/95 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-primary">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.weight}</p>
                        <div className="flex items-center gap-3">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 p-0"
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <span className="font-semibold w-8 text-center">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 p-0"
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-secondary mb-2">
                          {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                        </p>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Icon name="Trash2" size={18} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-background/95 backdrop-blur-sm sticky top-6">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Итого</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Товары ({items.reduce((sum, item) => sum + item.quantity, 0)} шт)</span>
                      <span>{total.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Доставка</span>
                      <span className="text-green-600 font-semibold">Бесплатно</span>
                    </div>
                    <div className="h-px bg-border my-4"></div>
                    <div className="flex justify-between text-xl font-bold">
                      <span className="text-primary">Всего:</span>
                      <span className="text-secondary">{total.toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold mb-2 block">
                        Ваше имя
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Введите ваше имя"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold mb-2 block">
                        Номер телефона
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="rounded-full"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={handleOrder}
                    disabled={isOrdering}
                    className="w-full bg-primary hover:bg-primary/90 rounded-full font-semibold py-6 text-lg"
                  >
                    {isOrdering ? "Оформляем..." : "Оформить заказ"}
                  </Button>

                  <Button
                    onClick={clearCart}
                    variant="ghost"
                    className="w-full mt-3 text-muted-foreground hover:text-destructive"
                  >
                    Очистить корзину
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;