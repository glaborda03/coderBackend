class Usuario {
    constructor(nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = [];
      this.mascotas = [];
    }
  
    getFullName() {
      return `Nombre completo ${this.nombre} ${this.apellido}`; //ok
    }
  
    addMascota(nombreMascota) {
       this.mascotas.push(nombreMascota);
    }
  
    countMascotas() {
      return this.mascotas.length;
    }
  
    addBook(libro, creador) {
      this.libros.push({ name: libro, author: creador });
    }
  
    getBookNames() { 
      const nombreLibro=this.libros.map(i=>i.name)
      return nombreLibro
    }
    
  }
  
  
  
  const persona1 = new Usuario("Gabriel", "Laborda", [{"Game of Thrones":"George Martin"},{"the handmaid's tale":"Margaret Atwood"}], ["Perro"]);
  
  const agregarMascota = persona1.addMascota("Roco")
  const agregarMascota1 = persona1.addMascota("Neron")
  const agregarLibro = persona1.addBook("Game of Thrones","George Martin")
  const agregarLibro1 = persona1.addBook("the handmaid's tale","Margaret Atwood")
  
  
  console.log(persona1);