# Shell-WepApp-PWA
Praktikum web apps pwa shell

Latihan: Offline Capability dengan Workbox

Pertama, kita perlu memasang beberapa dependency terlebih dahulu. Dependency yang akan kita instal adalah workbox-webpack-plugin dan workbox-window. Silakan jalankan perintah-perintah berikut untuk memasang packages tersebut. Jalankan mereka secara baris per baris.


    npm install workbox-webpack-plugin --save-dev
    npm install workbox-window --save

Menambahakan 



favorite-movie-idb.js dan simpan pada src -> scripts -> data.


        // TODO membuat database dan object storage
        const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORAGE_NAME } = CONFIG;
        const dbPromase = openDB(DATABASE_NAME, DATABASE_VERSION, {
        upgrade(database) {
            database.createObjectStore(OBJECT_STORAGE_NAME, { keyPath: 'id' });
        },
        });



Kemudian buat objek database yang di dalamnya terdapat asynchronous method dalam melakukan operasi database seperti getMovie, getAllMovies, putMovie, dan deleteMovie


        const FavoriteMovieIdb = {
        async getMovie(id) {
            return (await dbPromise).get(OBJECT_STORE_NAME, id);
        },
        async getAllMovies() {
            return (await dbPromise).getAll(OBJECT_STORE_NAME);
        },
        async putMovie(movie) {
            return (await dbPromise).put(OBJECT_STORE_NAME, movie);
        },
        async deleteMovie(id) {
            return (await dbPromise).delete(OBJECT_STORE_NAME, id);
        },
        };
        
        export default FavoriteMovieIdb;


