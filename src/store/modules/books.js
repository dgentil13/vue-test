import axios from 'axios';

export default {
  state: {
    books: [],
  },

  getters: {
    books: state => state.books,
  },

  actions: {
    onSubmit({ commit }, search) {
      // eslint-disable-next-line no-console
      console.log('q', search);
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=:${search[0]}:${
            search[1]
          }&key=AIzaSyA4TrQpaKQj75j-1fOMgTykqqqQmLmqfMY
        `,
        )
        .then(res => {
          commit('onSubmit', res.data.items);
        })
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
    },
  },

  mutations: {
    onSubmit: (state, books) => (state.books = books),
  },
};
