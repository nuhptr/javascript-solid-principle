/**
 * Berdasarkan kode class CinemaCalculations, untuk mendapatkan  
   perhitungan admin fee dilakukan operasi percabangan if else yang mengecek masing-masing jenis cinema. Pada kasus ini, nilai admin fee dari masing-masing cinema berbeda yang diurutkan dari standard hingga premium. Semakin mewah fasilitas cinema tersebut (termewah adalah premium), maka biaya admin fee semakin besar. 

  Lalu, bagaimana jika ada jenis cinema baru? Untuk menambahkan cinema baru, kita perlu menambahkan else if lagi di percabangan calculateAdminFee. Semakin banyak jenis cinema-nya, maka percabangan if else-nya akan semakin bertambah, tentu ini menjadi problem karena kelas CinemaCalculation akan terus perlu diubah.
 */

class CinemaAdmin {
  calculateAdminFee(cinema) {
    if (cinema instanceof StandardCinema) {
      return (cinema.price * 10) / 100;
    }

    if (cinema instanceof DeluxeCinema) {
      return (cinema.price * 12) / 100;
    }

    if (cinema instanceof PremiumCinema) {
      return (cinema.price * 20) / 100;
    }

    return 0;
  }
}

class Cinema {
  constructor(price) {
    this.price = price;
  }
}

class StandardCinema extends Cinema {}

class DeluxeCinema extends Cinema {}

class PremiumCinema extends Cinema {}
