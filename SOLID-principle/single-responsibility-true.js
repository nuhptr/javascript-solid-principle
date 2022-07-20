/**
 * TODO: Single Responsibility Yang benar
 * sehingga pada saat ada penambahan fitur
 * mudah dikembangkan dan tidak ada permasalahan defak (sistem lain ikut imbas)
 */

class Item {
  // code here..
}

class Order {
  calculateToSum() {
    // code here..
  }

  getItems() {
    // code here..
  }

  getItemCount() {
    // code here..
  }

  addItem(item) {
    // code here..
  }

  deleteItem(item) {
    // code here..
  }
}

class OrderPreview {
  printOrder(order) {
    // code here..
  }

  showOrder(order) {
    // code here..
  }
}

class OrderHistory {
  getDailyHistory() {
    // code here..
  }

  getMonthlyHistory() {
    // code here..
  }
}

const main = () => {
  const item = new Item();
  const order = new Order();
  order.addItem(item);

  const history = new OrderHistory();
  history.getDailyHistory();

  const viewer = new OrderPreview();
  viewer.showOrder(order);
};

main();
