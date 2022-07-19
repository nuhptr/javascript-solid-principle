class DataRepository {
  constructor() {
    //   Membuat data menjadi private hanya bisa diakses kelas turunannya
    this._data = [];
  }

  setData() {
    const response =
      /* tons of logical code to retrive data */
      (this._data = response.data);
  }

  get Data() {
    return this._data;
  }
}
