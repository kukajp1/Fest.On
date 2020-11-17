new Vue({
    el: '#desafio',
    data: {
      nome: 'Lucas Naeshiro Fuzeto',
      idade: 21,
      imagem: 'https://fandomrealm.com/pub/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/a/s/as.jpg'
    },
    methods: {
        random: function(){
            return Math.random() * (500 - 0) + 0
        }
    }
  })