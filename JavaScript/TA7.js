function getTheTitles(books) {
    const titles = books.map(book => book.title);
    console.log('Los títulos son', titles);
}
const books = [
    {
        title: 'Pensar la felicidad',
        author: 'Gabriel Rolon'
    },
    {
        title: 'Este dolor no es mio',
        author: 'Adela cortina'
    },
    {
        title: 'Como transformar tu futuro ',
        author: 'Adrian Sosa'
    }

];
getTheTitles(books);

  