'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('libros', 
      
    [
      {
        titulo: "Saragossa Manuscript, The (Rekopis znaleziony w Saragossie)",
        autor: "Neel Kinge",
        isbn: "695993529-1",
        editorial: "Eadel",
        topicos: "romance,adventure,mystery",
        tipo: "novela",
        descripcion: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        imagen: "http://dummyimage.com/220x156.png/5fa2dd/ffffff",
        contador: 2,
        ultimo_reservante : "Juan Carlos"
      },
      {
        titulo: "Camilla",
        autor: "Blake Stobart",
        isbn: "795994569-1",
        editorial: "Mynte",
        topicos: "adventure,romance",
        tipo: "novela",
        descripcion: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        imagen: "http://dummyimage.com/216x235.png/5fa2dd/ffffff",
        contador: 2,
        ultimo_reservante : "Tulio"

      },
      {
        titulo: "Trapped in the Closet: Chapters 1-12",
        autor: "Jordan Filkov",
        isbn: "001946320-0",
        editorial: "Flashpoint",
        topicos: "romance",
        tipo: "novela",
        descripcion: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        imagen: "http://dummyimage.com/112x219.png/cc0000/ffffff",
        contador: 1,
        ultimo_reservante: "Tulio"
      },
      {
        titulo: "Losers' Club (Kaybedenler kulübü)",
        autor: "Kevyn Cuthill",
        isbn: "261902795-0",
        editorial: "Fivebridge",
        topicos: "mystery",
        tipo: "novela",
        descripcion: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        imagen: "http://dummyimage.com/175x325.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Home",
        autor: "Chickie Pert",
        isbn: "307247532-6",
        editorial: "Realcube",
        topicos: "mystery",
        tipo: "revista",
        descripcion: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        imagen: "http://dummyimage.com/226x243.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Zombie High",
        autor: "Deina Holson",
        isbn: "509015144-X",
        editorial: "Abata",
        topicos: "romance",
        tipo: "libro",
        descripcion: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        imagen: "http://dummyimage.com/124x124.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Luzhin Defence, The",
        autor: "Patin Garioch",
        isbn: "004074214-8",
        editorial: "Mydo",
        topicos: "romance",
        tipo: "articulo",
        descripcion: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        imagen: "http://dummyimage.com/118x278.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Lost in Beijing (Ping guo)",
        autor: "Phelia Walicki",
        isbn: "961332602-2",
        editorial: "Feednation",
        topicos: "fiction",
        tipo: "revista",
        descripcion: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        imagen: "http://dummyimage.com/153x189.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Ambulance, The",
        autor: "Brandon Mundie",
        isbn: "641061339-3",
        editorial: "Oyoyo",
        topicos: "romance",
        tipo: "libro",
        descripcion: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        imagen: "http://dummyimage.com/237x177.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Divorcee, The",
        autor: "Giacinta Towle",
        isbn: "257297667-6",
        editorial: "Rhyloo",
        topicos: "adventure",
        tipo: "articulo",
        descripcion: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        imagen: "http://dummyimage.com/179x341.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "College",
        autor: "Cordelia Issacoff",
        isbn: "308909070-8",
        editorial: "Zazio",
        topicos: "mystery",
        tipo: "libro",
        descripcion: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor.Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        imagen: "http://dummyimage.com/174x257.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "The Shooting",
        autor: "Mureil Ruggen",
        isbn: "508733304-4",
        editorial: "Bubblebox",
        topicos: "romance",
        tipo: "revista",
        descripcion: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        imagen: "http://dummyimage.com/225x170.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Copenhagen",
        autor: "Angele Abry",
        isbn: "532746840-2",
        editorial: "Minyx",
        topicos: "mystery",
        tipo: "articulo",
        descripcion: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        imagen: "http://dummyimage.com/108x204.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Hunters, The",
        autor: "Adler Daybell",
        isbn: "720521174-3",
        editorial: "Miboo",
        topicos: "mystery",
        tipo: "libro",
        descripcion: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        imagen: "http://dummyimage.com/141x332.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Once Upon a Warrior (Anaganaga O Dheerudu)",
        autor: "Jenn Saphin",
        isbn: "106391191-5",
        editorial: "Jaxworks",
        topicos: "mystery",
        tipo: "articulo",
        descripcion: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        imagen: "http://dummyimage.com/163x194.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "This Is Not a Film (In film nist)",
        autor: "Claresta Mathon",
        isbn: "630640268-3",
        editorial: "Aimbo",
        topicos: "fiction",
        tipo: "libro",
        descripcion: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        imagen: "http://dummyimage.com/164x321.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Jungle Man-Eaters",
        autor: "Katheryn Witul",
        isbn: "993874793-0",
        editorial: "Yotz",
        topicos: "mystery",
        tipo: "novela",
        descripcion: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        imagen: "http://dummyimage.com/229x240.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Indiana Jones and the Temple of Doom",
        autor: "Dani Kynman",
        isbn: "784060192-8",
        editorial: "Demivee",
        topicos: "mystery",
        tipo: "articulo",
        descripcion: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        imagen: "http://dummyimage.com/203x368.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Giant of Marathon, The (Battaglia di Maratona, La)",
        autor: "Angus Jervois",
        isbn: "727118553-4",
        editorial: "Skiptube",
        topicos: "mystery",
        tipo: "revista",
        descripcion: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        imagen: "http://dummyimage.com/104x327.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Memories of Underdevelopment (Memorias del subdesarrollo)",
        autor: "Lowell Vize",
        isbn: "986820607-3",
        editorial: "Browsecat",
        topicos: "adventure",
        tipo: "novela",
        descripcion: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        imagen: "http://dummyimage.com/243x263.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Gaslight",
        autor: "Cindelyn Millins",
        isbn: "439762994-3",
        editorial: "Ainyx",
        topicos: "romance",
        tipo: "articulo",
        descripcion: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        imagen: "http://dummyimage.com/145x312.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "I Am Santa Claus",
        autor: "Enoch Ballintime",
        isbn: "718169707-2",
        editorial: "Podcat",
        topicos: "adventure",
        tipo: "revista",
        descripcion: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        imagen: "http://dummyimage.com/248x126.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Cry of the City",
        autor: "Lissi Littler",
        isbn: "631605146-8",
        editorial: "Quinu",
        topicos: "fiction",
        tipo: "revista",
        descripcion: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        imagen: "http://dummyimage.com/207x288.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Man, The",
        autor: "Drugi Gauntlett",
        isbn: "539306518-3",
        editorial: "Yadel",
        topicos: "adventure",
        tipo: "articulo",
        descripcion: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        imagen: "http://dummyimage.com/122x209.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Geography Club",
        autor: "Saudra Engeham",
        isbn: "890348299-9",
        editorial: "Livepath",
        topicos: "fiction",
        tipo: "articulo",
        descripcion: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        imagen: "http://dummyimage.com/202x287.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Monsters University",
        autor: "Zorana Chatfield",
        isbn: "754758545-0",
        editorial: "Agivu",
        topicos: "adventure",
        tipo: "revista",
        descripcion: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        imagen: "http://dummyimage.com/149x388.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Company Men, The",
        autor: "Zara Phette",
        isbn: "986967623-5",
        editorial: "Roombo",
        topicos: "romance",
        tipo: "novela",
        descripcion: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        imagen: "http://dummyimage.com/141x359.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Love Parade, The",
        autor: "Bear Edmonston",
        isbn: "675639581-5",
        editorial: "Zoomcast",
        topicos: "romance",
        tipo: "revista",
        descripcion: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        imagen: "http://dummyimage.com/237x245.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Ernest Saves Christmas",
        autor: "Guillermo Armour",
        isbn: "305554003-4",
        editorial: "Lazz",
        topicos: "adventure",
        tipo: "revista",
        descripcion: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        imagen: "http://dummyimage.com/214x373.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Somersault",
        autor: "Trudy Bengochea",
        isbn: "626265180-2",
        editorial: "Riffpedia",
        topicos: "romance",
        tipo: "articulo",
        descripcion: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        imagen: "http://dummyimage.com/237x151.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Dead Man on Campus",
        autor: "Martyn Skittle",
        isbn: "060291211-3",
        editorial: "Talane",
        topicos: "fiction",
        tipo: "revista",
        descripcion: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        imagen: "http://dummyimage.com/160x242.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Vulgar",
        autor: "Jacqueline Grigorkin",
        isbn: "331785891-5",
        editorial: "Tanoodle",
        topicos: "adventure",
        tipo: "novela",
        descripcion: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        imagen: "http://dummyimage.com/111x388.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "London After Midnight",
        autor: "Asa Napleton",
        isbn: "631007142-4",
        editorial: "Photobean",
        topicos: "fiction",
        tipo: "articulo",
        descripcion: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        imagen: "http://dummyimage.com/140x158.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Harold and Kumar Go to White Castle",
        autor: "Ichabod Filipic",
        isbn: "347112704-6",
        editorial: "Gevee",
        topicos: "fiction",
        tipo: "novela",
        descripcion: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        imagen: "http://dummyimage.com/163x190.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Get Shorty",
        autor: "Tabb O'Dare",
        isbn: "005191479-4",
        editorial: "Omba",
        topicos: "mystery",
        tipo: "articulo",
        descripcion: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        imagen: "http://dummyimage.com/145x295.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Geronimo: An American Legend",
        autor: "Verney Bidder",
        isbn: "889213763-8",
        editorial: "Edgetag",
        topicos: "adventure",
        tipo: "revista",
        descripcion: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum,velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        imagen: "http://dummyimage.com/190x278.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Tribe, The (Plemya)",
        autor: "Melisse Oldroyde",
        isbn: "131267229-3",
        editorial: "Tazz",
        topicos: "mystery",
        tipo: "articulo",
        descripcion: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        imagen: "http://dummyimage.com/122x367.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "It's Impossible to Learn to Plow by Reading Books",
        autor: "Sue Nuttey",
        isbn: "814456397-2",
        editorial: "Tavu",
        topicos: "fiction",
        tipo: "libro",
        descripcion: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        imagen: "http://dummyimage.com/153x170.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Svampe",
        autor: "Bennie Rounsivall",
        isbn: "045189848-6",
        editorial: "Devify",
        topicos: "romance",
        tipo: "novela",
        descripcion: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        imagen: "http://dummyimage.com/214x299.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Tremors II: Aftershocks",
        autor: "Leah Stiebler",
        isbn: "082172383-9",
        editorial: "Gigabox",
        topicos: "mystery",
        tipo: "revista",
        descripcion: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        imagen: "http://dummyimage.com/164x129.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Asterix & Obelix: Mission Cleopatra (Astérix & Obélix: Mission Cléopâtre)",
        autor: "Annetta Peachman",
        isbn: "364099299-7",
        editorial: "Ooba",
        topicos: "romance",
        tipo: "articulo",
        descripcion: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        imagen: "http://dummyimage.com/242x376.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Emergo (Apartment 143)",
        autor: "Catlee Ottiwill",
        isbn: "176493339-7",
        editorial: "Brainbox",
        topicos: "fiction",
        tipo: "articulo",
        descripcion: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        imagen: "http://dummyimage.com/201x183.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Bloodsport",
        autor: "Jackie Maffiotti",
        isbn: "610005218-0",
        editorial: "Photobug",
        topicos: "adventure",
        tipo: "articulo",
        descripcion: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        imagen: "http://dummyimage.com/226x327.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Carpetbaggers, The",
        autor: "Viv Summerton",
        isbn: "024857274-1",
        editorial: "Flipbug",
        topicos: "romance",
        tipo: "libro",
        descripcion: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        imagen: "http://dummyimage.com/100x293.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Rulers of the City",
        autor: "Nikolaus Oakly",
        isbn: "875575713-8",
        editorial: "Quinu",
        topicos: "mystery",
        tipo: "revista",
        descripcion: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        imagen: "http://dummyimage.com/128x165.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Such a Long Journey",
        autor: "Gay Gearty",
        isbn: "193007503-0",
        editorial: "Buzzbean",
        topicos: "mystery",
        tipo: "articulo",
        descripcion: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        imagen: "http://dummyimage.com/210x137.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Glass House, The",
        autor: "Silvanus Dunkerley",
        isbn: "651094140-6",
        editorial: "Wordify",
        topicos: "mystery",
        tipo: "novela",
        descripcion: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        imagen: "http://dummyimage.com/151x378.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Angels Fall",
        autor: "Pollyanna Wyper",
        isbn: "504246621-5",
        editorial: "Blogtag",
        topicos: "adventure",
        tipo: "novela",
        descripcion: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        imagen: "http://dummyimage.com/249x391.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Looper",
        autor: "Manuel Auckland",
        isbn: "448824146-8",
        editorial: "Zoomcast",
        topicos: "fiction",
        tipo: "revista",
        descripcion: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        imagen: "http://dummyimage.com/118x306.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Magic Town",
        autor: "Kyle Geraldini",
        isbn: "381232886-0",
        editorial: "Zava",
        topicos: "adventure",
        tipo: "articulo",
        descripcion: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        imagen: "http://dummyimage.com/169x124.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Something for Everyone",
        autor: "Nelly Kettleson",
        isbn: "116268842-4",
        editorial: "Fivechat",
        topicos: "adventure",
        tipo: "articulo",
        descripcion: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        imagen: "http://dummyimage.com/197x383.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Girl Next Door, The",
        autor: "Celinka Chessman",
        isbn: "023387855-6",
        editorial: "Voomm",
        topicos: "fiction",
        tipo: "libro",
        descripcion: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        imagen: "http://dummyimage.com/193x241.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Mondo Hollywood",
        autor: "Kile Lynch",
        isbn: "293201826-4",
        editorial: "Quaxo",
        topicos: "fiction",
        tipo: "revista",
        descripcion: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        imagen: "http://dummyimage.com/114x281.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Nobody's Fool",
        autor: "Lorri Rae",
        isbn: "146890180-X",
        editorial: "Twitternation",
        topicos: "fiction",
        tipo: "libro",
        descripcion: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        imagen: "http://dummyimage.com/180x328.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Grease",
        autor: "Efrem Towriss",
        isbn: "709276677-X",
        editorial: "Janyx",
        topicos: "romance",
        tipo: "novela",
        descripcion: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        imagen: "http://dummyimage.com/124x265.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Chronicle of My Mother (Waga haha no ki)",
        autor: "Kissie Guyan",
        isbn: "061590532-3",
        editorial: "Abatz",
        topicos: "mystery",
        tipo: "novela",
        descripcion: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        imagen: "http://dummyimage.com/221x318.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Giant of Marathon, The (Battaglia di Maratona, La)",
        autor: "Jinny Selkirk",
        isbn: "258356514-1",
        editorial: "Topicware",
        topicos: "adventure",
        tipo: "revista",
        descripcion: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        imagen: "http://dummyimage.com/155x368.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "I Never Sang for My Father",
        autor: "Celka Landor",
        isbn: "999729935-3",
        editorial: "Teklist",
        topicos: "romance",
        tipo: "libro",
        descripcion: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        imagen: "http://dummyimage.com/160x256.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Rich and Famous (Gong woo ching)",
        autor: "Barnabas Garz",
        isbn: "828960741-5",
        editorial: "Muxo",
        topicos: "adventure",
        tipo: "revista",
        descripcion: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        imagen: "http://dummyimage.com/140x231.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Steamboat Round the Bend",
        autor: "Melitta Haxley",
        isbn: "311281425-8",
        editorial: "Zoombeat",
        topicos: "romance",
        tipo: "revista",
        descripcion: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        imagen: "http://dummyimage.com/163x178.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Appointment with Danger",
        autor: "Christin Klimov",
        isbn: "072601931-3",
        editorial: "Eamia",
        topicos: "mystery",
        tipo: "novela",
        descripcion: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIncongue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        imagen: "http://dummyimage.com/185x138.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Hot Pursuit",
        autor: "Darsey Tague",
        isbn: "999192522-8",
        editorial: "Lazzy",
        topicos: "adventure",
        tipo: "revista",
        descripcion: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        imagen: "http://dummyimage.com/125x293.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Killing Auntie (Zabicie ciotki)",
        autor: "Annnora Chatterton",
        isbn: "438416509-9",
        editorial: "Wikido",
        topicos: "adventure",
        tipo: "articulo",
        descripcion: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        imagen: "http://dummyimage.com/105x116.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Robin and the 7 Hoods",
        autor: "Carlyle Warbys",
        isbn: "728796505-4",
        editorial: "Plajo",
        topicos: "romance",
        tipo: "libro",
        descripcion: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        imagen: "http://dummyimage.com/151x132.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Third Miracle, The",
        autor: "Corrianne FitzGibbon",
        isbn: "276637152-4",
        editorial: "Gevee",
        topicos: "adventure",
        tipo: "novela",
        descripcion: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        imagen: "http://dummyimage.com/217x128.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Stargate: Continuum",
        autor: "Maggee Cursons",
        isbn: "478822816-5",
        editorial: "Fanoodle",
        topicos: "adventure",
        tipo: "libro",
        descripcion: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        imagen: "http://dummyimage.com/238x177.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Rififi (Du rififi chez les hommes)",
        autor: "Sayers Maceur",
        isbn: "609038909-9",
        editorial: "Tagcat",
        topicos: "adventure",
        tipo: "novela",
        descripcion: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        imagen: "http://dummyimage.com/140x366.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Ten Commandments, The",
        autor: "Biron Hucks",
        isbn: "212636609-X",
        editorial: "Reallinks",
        topicos: "romance",
        tipo: "revista",
        descripcion: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        imagen: "http://dummyimage.com/187x239.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Wild Bill",
        autor: "Elisha Senyard",
        isbn: "951261027-2",
        editorial: "Abatz",
        topicos: "fiction",
        tipo: "articulo",
        descripcion: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        imagen: "http://dummyimage.com/105x395.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Chhoti Si Baat",
        autor: "Abram Rusk",
        isbn: "103344231-3",
        editorial: "Abatz",
        topicos: "romance",
        tipo: "revista",
        descripcion: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        imagen: "http://dummyimage.com/134x335.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Onechanbara - Zombie Bikini Squad (a.k.a. Oneechanbara: The Movie)",
        autor: "Dion Shera",
        isbn: "594532850-2",
        editorial: "Flashdog",
        topicos: "mystery",
        tipo: "libro",
        descripcion: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        imagen: "http://dummyimage.com/187x294.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Revenge of the Electric Car",
        autor: "Kissee Stiegers",
        isbn: "396380415-7",
        editorial: "Brightbean",
        topicos: "fiction",
        tipo: "libro",
        descripcion: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        imagen: "http://dummyimage.com/140x130.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Ninette",
        autor: "Alis Grellis",
        isbn: "310091395-7",
        editorial: "Lazzy",
        topicos: "fiction",
        tipo: "articulo",
        descripcion: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        imagen: "http://dummyimage.com/209x320.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Grifters, The",
        autor: "Jackqueline Lonsbrough",
        isbn: "113841477-8",
        editorial: "Buzzshare",
        topicos: "romance",
        tipo: "articulo",
        descripcion: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        imagen: "http://dummyimage.com/205x130.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Boys of Baraka, The",
        autor: "Blancha Yitzhakov",
        isbn: "130133816-8",
        editorial: "Edgeblab",
        topicos: "mystery",
        tipo: "libro",
        descripcion: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        imagen: "http://dummyimage.com/245x329.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Trekkies 2",
        autor: "Wit Delgado",
        isbn: "029224904-7",
        editorial: "Abata",
        topicos: "mystery",
        tipo: "revista",
        descripcion: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        imagen: "http://dummyimage.com/187x135.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Sirens",
        autor: "Hanny De Meyer",
        isbn: "884226591-8",
        editorial: "Skyndu",
        topicos: "adventure",
        tipo: "libro",
        descripcion: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        imagen: "http://dummyimage.com/120x228.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "High, Wide, and Handsome",
        autor: "Lona Rosevear",
        isbn: "404849727-8",
        editorial: "Divanoodle",
        topicos: "adventure",
        tipo: "novela",
        descripcion: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        imagen: "http://dummyimage.com/115x326.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Those Magnificent Men in Their Flying Machines",
        autor: "Cassaundra Whiley",
        isbn: "731297987-4",
        editorial: "Fanoodle",
        topicos: "adventure",
        tipo: "libro",
        descripcion: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        imagen: "http://dummyimage.com/200x243.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Roadie",
        autor: "Holly Dable",
        isbn: "693108152-7",
        editorial: "Cogilith",
        topicos: "mystery",
        tipo: "revista",
        descripcion: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        imagen: "http://dummyimage.com/231x286.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Gothika",
        autor: "Jessika Egarr",
        isbn: "838011429-9",
        editorial: "Jetwire",
        topicos: "mystery",
        tipo: "revista",
        descripcion: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        imagen: "http://dummyimage.com/147x202.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Hi Diddle Diddle",
        autor: "Caleb De Biasi",
        isbn: "481529178-0",
        editorial: "Kazu",
        topicos: "fiction",
        tipo: "libro",
        descripcion: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        imagen: "http://dummyimage.com/242x159.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Something's Gotta Give",
        autor: "Lou Utridge",
        isbn: "177647452-X",
        editorial: "Yodo",
        topicos: "fiction",
        tipo: "novela",
        descripcion: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        imagen: "http://dummyimage.com/134x330.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Find Love",
        autor: "Burtie Wilmott",
        isbn: "838807361-3",
        editorial: "Browsetype",
        topicos: "fiction",
        tipo: "articulo",
        descripcion: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        imagen: "http://dummyimage.com/145x106.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Fanatics (Kulman pojat)",
        autor: "Rodie Dutt",
        isbn: "904273896-0",
        editorial: "Dabtype",
        topicos: "romance",
        tipo: "novela",
        descripcion: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        imagen: "http://dummyimage.com/227x172.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Forbidden Games (Jeux interdits)",
        autor: "Christophorus Whitsun",
        isbn: "791415988-3",
        editorial: "Tavu",
        topicos: "mystery",
        tipo: "novela",
        descripcion: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        imagen: "http://dummyimage.com/205x232.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Trust Me",
        autor: "Alejoa Temby",
        isbn: "921257923-X",
        editorial: "Avaveo",
        topicos: "fiction",
        tipo: "novela",
        descripcion: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        imagen: "http://dummyimage.com/120x299.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Ringu (Ring)",
        autor: "Dur Coulthard",
        isbn: "559148795-5",
        editorial: "Yoveo",
        topicos: "adventure",
        tipo: "revista",
        descripcion: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        imagen: "http://dummyimage.com/104x267.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Easy Wheels",
        autor: "Blondell Yakob",
        isbn: "942111974-6",
        editorial: "Eimbee",
        topicos: "adventure",
        tipo: "libro",
        descripcion: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        imagen: "http://dummyimage.com/245x210.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "American Strays",
        autor: "Opalina Swannack",
        isbn: "142088901-X",
        editorial: "Feednation",
        topicos: "mystery",
        tipo: "novela",
        descripcion: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        imagen: "http://dummyimage.com/248x235.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Three Fugitives",
        autor: "Calley Maxfield",
        isbn: "796094006-1",
        editorial: "Dynabox",
        topicos: "adventure",
        tipo: "revista",
        descripcion: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        imagen: "http://dummyimage.com/247x384.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Liberal Arts",
        autor: "Morie Lamport",
        isbn: "551941178-6",
        editorial: "Eazzy",
        topicos: "fiction",
        tipo: "novela",
        descripcion: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        imagen: "http://dummyimage.com/128x386.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Indian Runner, The",
        autor: "Bobbie Hengoed",
        isbn: "542069518-9",
        editorial: "Vimbo",
        topicos: "romance",
        tipo: "articulo",
        descripcion: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        imagen: "http://dummyimage.com/127x275.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "Honorable",
        autor: "Leia Kemery",
        isbn: "468961462-8",
        editorial: "Jazzy",
        topicos: "romance",
        tipo: "novela",
        descripcion: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        imagen: "http://dummyimage.com/179x341.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "Taste of Menace",
        autor: "Win Coultar",
        isbn: "648778172-X",
        editorial: "Dynabox",
        topicos: "mystery",
        tipo: "novela",
        descripcion: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        imagen: "http://dummyimage.com/207x288.png/ff4444/ffffff",
        contador: 0
      },
      {
        titulo: "City of Arrakis",
        autor: "Osbourn McGrorty",
        isbn: "154693374-3",
        editorial: "Dynabox",
        topicos: "adventure",
        tipo: "novela",
        descripcion: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        imagen: "http://dummyimage.com/225x170.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "To Capture a Ring",
        autor: "Cris Pacher",
        isbn: "907143791-4",
        editorial: "Zoomzone",
        topicos: "mystery",
        tipo: "novela",
        descripcion: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        imagen: "http://dummyimage.com/180x328.png/5fa2dd/ffffff",
        contador: 0
      },
      {
        titulo: "Something Domestic",
        autor: "Tallulah Lescop",
        isbn: "529496090-7",
        editorial: "Aivee",
        topicos: "adventure",
        tipo: "novela",
        descripcion: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        imagen: "http://dummyimage.com/237x177.png/dddddd/000000",
        contador: 0
      },
      {
        titulo: "The Children of the Plant People",
        autor: "Belle Paprotny",
        isbn: "824544887-7",
        editorial: "Topicblab",
        topicos: "romance",
        tipo: "novela",
        descripcion: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        imagen: "http://dummyimage.com/210x137.png/cc0000/ffffff",
        contador: 0
      },
      {
        titulo: "Death of the Prize Pygmy",
        autor: "Blane Arkwright",
        isbn: "380606346-X",
        editorial: "Viva",
        topicos: "romance",
        tipo: "novela",
        descripcion: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        imagen: "http://dummyimage.com/163x190.png/cc0000/ffffff",
        contador: 0
      }
    ]
      
    , {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
