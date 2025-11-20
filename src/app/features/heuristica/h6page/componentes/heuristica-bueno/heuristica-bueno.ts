import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heuristica-bueno',
  imports: [FormsModule],
  templateUrl: './heuristica-bueno.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeuristicaBueno {

  selectedSize = signal('');
  selectedCrust = signal('');
  selectedToppings = signal<string[]>([]);

  sizeOptions = [
    { value: 'small', name: 'Personal', icon: '🍕', price: '$8.99' },
    { value: 'medium', name: 'Mediana', icon: '🍕', price: '$12.99' },
    { value: 'large', name: 'Grande', icon: '🍕', price: '$15.99' },
    { value: 'xlarge', name: 'Familiar', icon: '🍕', price: '$18.99' }
  ];

  crustOptions = [
    { value: 'thin', name: 'Delgada', icon: '🥖', description: 'Crujiente y ligera' },
    { value: 'thick', name: 'Gruesa', icon: '🍞', description: 'Suave y esponjosa' },
    { value: 'stuffed', name: 'Rellena', icon: '🧀', description: 'Con queso en el borde' }
  ];

  toppingOptions = [
    { value: 'pepperoni', name: 'Pepperoni', icon: '🍕', price: '1.50' },
    { value: 'mushrooms', name: 'Champiñones', icon: '🍄', price: '1.00' },
    { value: 'olives', name: 'Aceitunas', icon: '🫒', price: '1.00' },
    { value: 'peppers', name: 'Pimientos', icon: '🌶️', price: '1.00' },
    { value: 'onions', name: 'Cebollas', icon: '🧅', price: '0.75' },
    { value: 'tomatoes', name: 'Tomates', icon: '🍅', price: '1.00' },
    { value: 'cheese', name: 'Queso Extra', icon: '🧀', price: '2.00' },
    { value: 'ham', name: 'Jamón', icon: '🥓', price: '2.00' }
  ];

  selectSize(size: string) {
    this.selectedSize.set(size);
  }

  selectCrust(crust: string) {
    this.selectedCrust.set(crust);
  }

  toggleTopping(topping: string) {
    const current = this.selectedToppings();
    if (current.includes(topping)) {
      this.selectedToppings.set(current.filter(t => t !== topping));
    } else {
      this.selectedToppings.set([...current, topping]);
    }
  }

  isSelected(topping: string): boolean {
    return this.selectedToppings().includes(topping);
  }

  canOrder(): boolean {
    return this.selectedSize() !== '' && this.selectedCrust() !== '';
  }

  getSelectedSizeName(): string {
    const size = this.sizeOptions.find(s => s.value === this.selectedSize());
    return size ? size.name : '';
  }

  getSelectedCrustName(): string {
    const crust = this.crustOptions.find(c => c.value === this.selectedCrust());
    return crust ? crust.name : '';
  }

  getSizePrice(): number {
    const size = this.sizeOptions.find(s => s.value === this.selectedSize());
    return size ? parseFloat(size.price.replace('$', '')) : 0;
  }

  getToppingsPrice(): number {
    return this.selectedToppings().reduce((total, topping) => {
      const toppingObj = this.toppingOptions.find(t => t.value === topping);
      return total + (toppingObj ? parseFloat(toppingObj.price) : 0);
    }, 0);
  }

  getTotal(): string {
    return (this.getSizePrice() + this.getToppingsPrice()).toFixed(2);
  }

  getSelectedToppingsNames(): string {
    return this.selectedToppings()
      .map(t => this.toppingOptions.find(opt => opt.value === t)?.name)
      .filter(Boolean)
      .join(', ');
  }
}
