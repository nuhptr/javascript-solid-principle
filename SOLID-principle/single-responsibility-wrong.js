/**
 * TODO: Single Responsibility Principle yang salah
 * semua fungsi dibebankan kedalam satu kelas sehingga
 * akan susah ketika ada pengembangan kecil / besar
 */

class Item {}

class Order {
  calculateToSum() {
    // Implementation Code
  }

  getItems() {
    // Implementation Code
  }

  getItemsCount() {
    // Implementation Code
  }

  addItem(item) {
    // Implementation Code
  }

  deleteItem(item) {
    // implementation code
  }

  printOrder() {
    // Implementation Code
  }

  showOrder() {
    //   Implementation Code
  }

  getDailyHistory() {
    //   Implementation Code
  }

  getMonthlyHistory() {
    //   Implementation Code
  }
}

const main = () => {
  const order = new Order();
  order.calculateToSum();
};

main();
