const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {title: 'The Final Empire', author: 'Fimber', age: 33, isFav: true},
                {title: 'The of the Kings', author: 'Brandon Sanders', age: 33, isFav: false},
                {title: 'The Final Empire', author: 'Fimber', age: 33, isFav: true}
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },

        toggleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')