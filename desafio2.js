const fs = require("fs");

class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }

  save(producto) {
    const productos = fs.readFileSync(`${this.nombreArchivo}.txt`, "utf-8");
    const parsedProductos = JSON.parse(productos);
    let idMax = 0;
    if (parsedProductos.length == 0) {
      Object.assign(producto, {
        id: 1,
      });
      parsedProductos.push(producto);
      fs.writeFileSync(
        `${this.nombreArchivo}.txt`,
        JSON.stringify(parsedProductos, null, 2)
      );
      return 1;
    } else {
      parsedProductos.forEach((i) => {
        if (i.id > idMax) {
          idMax = i.id;
        }
      });
      Object.assign(producto, {
        id: idMax + 1,
      });
      parsedProductos.push(producto);
      fs.writeFileSync(
        `${this.nombreArchivo}.txt`,
        JSON.stringify(parsedProductos, null, 2)
      );
      return idMax + 1;
    }
  }

  async getById(Id) {
    try {
      const productos = await fs.promises.readFile(
        `${this.nombreArchivo}.txt`,
        "utf-8"
      );
      const parsedProductos = await JSON.parse(productos);

      const item = parsedProductos.find((i) => {
        return i.id === Id;
      });
      console.log(item);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAll() {
    try {
      const productos = await fs.promises.readFile(
        `${this.nombreArchivo}.txt`,
        "utf-8"
      );
      const parsedProductos = await JSON.parse(productos);
      console.log(parsedProductos);
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteById(Id) {
    try {
      const productos = await fs.promises.readFile(
        `${this.nombreArchivo}.txt`,
        "utf-8"
      );
      const parsedProductos = await JSON.parse(productos);

      const borrar = parsedProductos.filter((i) => {
        return i.id != Id;
      });
      console.log(borrar);
      fs.promises.writeFile(
        `${this.nombreArchivo}.txt`,
        JSON.stringify(borrar, null, 2)
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteAll() {
    try {
      const vacio = [];
      await fs.promises.writeFile(
        `${this.nombreArchivo}.txt`,
        JSON.stringify(vacio, null, 2)
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}

const container = new Contenedor("productos");

//  console.log(
//    container.save({
//      name: "Iphone 14",
//      price: 990,
//    })
//  );

// console.log(container.getById(3));
//console.log(container.getAll());
// console.log(container.deleteById(3))
// console.log(container.getAll())
// console.log(container.deleteAll())