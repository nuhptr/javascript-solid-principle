class Cinema {
  constructor(price) {
    if (this.constructor.name === "Cinema") {
      throw new Error(`${this.constructor.name} is abstract class!`);
    }

    this.price = price;
  }

  /**
   * calculateAdminFee() di class cinema dan
   * cukup diturunkan ke class nama cinema
   *
   * wajib diturunkan
   */
  calculateAdminFee() {
    throw new error("Method not implemented");
  }
}

class StandardCinema extends Cinema {
  calculateAdminFee() {
    return (this.price * 10) / 100;
  }
}

class DeluxeCinema extends Cinema {
  calculateAdminFee() {
    return (this.price * 12) / 100;
  }
}

class PremiumCinema extends Cinema {
  calculateAdminFee() {
    return (this.price * 20) / 100;
  }
}

// Jika ada cinema baru
class CoupleCinema extends Cinema {
  calculateAdminFee() {
    return (this.price * 15) / 100;
  }
}

// create class cinema
const main = () => {
  const standardCinema = new StandardCinema(100);
  const adminFee = standardCinema.calculateAdminFee();
  console.log(adminFee);
};

main();
