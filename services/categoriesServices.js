class CategoriesServices {
  constructor() {
    this.categories = [
      { categoryName: 'muebles', cocina: 100, baño: 200, sala: 400 },
      {
        categoryName: 'electrodomesticos',
        television: 50,
        lavadora: 60,
        microondas: 70,
        nevera: 150,
      },
    ];
  }

  find() {
    return this.categories;
  }

  findOne(categoryName) {
    return this.categories.find((item) => item.categoryName === categoryName);
  }
}

module.exports = CategoriesServices;
