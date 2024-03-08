function review(db) {
  return db.collection('reviews').insertMany([
      {
        id: 1,
        alt: "фото",
        date: "Апрель 2020",
        face: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2Fface2.jpg?alt=media&token=ee06d9c2-11be-4147-a01f-26fc5f9e5847",
        name: "Андрей",
        quotes: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2FblueQuotes.jpg?alt=media&token=cf300582-ee82-456e-bb96-dd7985fcb7ed",
        rating: "5",
        text1: "Маршрут очень хорошо продуман, несмотря на то что экскурсия достаточно длинная , но время пролетело незаметно, и все благодаря гиду. Информация преподносилась легко и увлекательно, ничего лишнего, прекрасные виды, величественные горы, комфортное общение. Спасибо!",
      },
      {
        id: 2,
        alt: "фото",
        date: "Май 2020",
        face: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2Fface1.jpg?alt=media&token=93be5b32-ac0b-4ad7-adbf-1afce4a08212",
        name: "Юлия",
        quotes: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2Fquotes.jpg?alt=media&token=8811d9be-6825-412d-8af7-85e5aa88758f",
        rating: "5",
        text1: "Это был великолепный день! Подарок мужу удался! Очень душевный и интересный гид, огромное спасибо, мы до сих пор под впечатлением! Заехал за нами домой, бутылка шампанского в подарок на день рождения, увлекательный рассказ и остановки по любому нашему желанию. Готовы повторить!"
      },
      {
        id: 3,
        alt: "фото",
        date: "Июнь 2020",
        face: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2Fface3.jpg?alt=media&token=a07979aa-45e7-4f53-b813-c304f8714408",
        name: "Владимир",
        quotes: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2Fquotes.jpg?alt=media&token=8811d9be-6825-412d-8af7-85e5aa88758f",
        rating: "5",
        text1: "Неоценимый плюс - Вас никто не загоняет во временные рамки: хотите заехать покушать - без проблем, хотите погулять - гуляйте. Вам всегда порекомендует что попробовать, что посмотреть. Первоначально взяли только одну экскурсию, а в итоге съездили в Кахетию, Мцхету и в Боржоми. Мы остались в полном восторге от самой страны и от людей, с которыми мы там познакомились!"
      },
      {
        id: 4,
        alt: "фото",
        date: "Май 2020",
        face: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2Fface4.jpg?alt=media&token=4b84d351-7ddb-4126-88e5-f76a5f79905b",
        name: "Александр",
        quotes: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2FblueQuotes.jpg?alt=media&token=cf300582-ee82-456e-bb96-dd7985fcb7ed",
        rating: "5",
        text1: "Большое спасибо Армену за экскурсию! Все очень душевно и интересно. С удовольствием будем рекомендовать всем знакомым и друзьям. Армен отличный рассказчик и потрясающий гид. Уже мечтаем вернуться в Грузию и увидеть ещё больше красивых мест этой замечательной и гостеприимной страны!"
      },
      {
        id: 5,
        alt: "фото",
        date: "Апрель 2020",
        face: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2Fface5.jpg?alt=media&token=3fc93753-692a-413c-b2fc-95bae68df38e",
        name: "Вадим",
        quotes: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2Fquotes.jpg?alt=media&token=8811d9be-6825-412d-8af7-85e5aa88758f",
        rating: "5",
        text1: "Путешествие по Военно-грузинской дороге. Останавливались в красивых местах, купили сувениры, были в недорогом, но очень вкусном ресторане. Добравшись до Казбеги, пересели на джип и взобрались по серпантину до храма  Гергети, откуда  открывается чудесный панорамный вид, восхитительные пейзажи. Все было очень классно!"
      },
      {
        id: 6,
        alt: "фото",
        date: "Июнь 2020",
        face: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2Fface6.jpg?alt=media&token=1fb278be-55b5-414b-be9b-358b2c510d12",
        name: "Вероника",
        quotes: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2FblueQuotes.jpg?alt=media&token=cf300582-ee82-456e-bb96-dd7985fcb7ed",
        rating: "5",
        text1: "Ездили в Казбеги. Экскурсия потрясающая - маршрут проходит по красивейшим местам, во время поездки  учитывались все наши пожелания. Очень душевный гид, невероятно много рассказал исторических фактов, хотелось запомнить как можно больше. Воспринималось все очень легко - видно, что  человек получает удовольствие от работы! Рекомендую! Конечная точка путешествия - просто восторг, в Казбеги нужно побывать обязательно, если  вы приехали в Грузию. А индивидуальная Экскурсия для такой поездки - лучший вариант."
      },
      {
        id: 7,
        alt: "фото",
        date: "Май 2020",
        face: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2Fface8.jpg?alt=media&token=7da5dc0a-db87-4adc-b3ec-c4710a3293df",
        name: "Олег",
        quotes: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2Fquotes.jpg?alt=media&token=8811d9be-6825-412d-8af7-85e5aa88758f",
        rating: "5",
        text1: "Экскурсия нам понравилась. Наш гид постарался рассказать нам не только о Мцхете, но и о Грузии так, чтобы мы их полюбили и обязательно приехали еще. Глубоко, с историческими событиями, особенностями культуры, не отягощая датами, но и не упуская важных событий. Провели много часов вместе и не устали. Спасибо!!!"
      },
      {
        id: 8,
        alt: "фото",
        date: "Апрель 2020",
        face: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2Fface7.jpg?alt=media&token=1001a39b-2185-4c4e-ad9d-96534d877d46",
        name: "Ангелина",
        quotes: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2FblueQuotes.jpg?alt=media&token=cf300582-ee82-456e-bb96-dd7985fcb7ed",
        rating: "5",
        text1: "Наша девичья компания от всей русской души благодарит Армена за удивительное грузинское гостеприимство, мы не просто получили исторические факты, мы словно побывали в путешествии во времени: погрузились в атмосферу, насладились красотой и увезли в своей душе самые теплые воспоминания об этой земле."
      },
      {
        id: 9,
        alt: "фото",
        date: "Июнь 2020",
        face: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2Fface9.jpg?alt=media&token=12c51d52-a86d-4a65-b2ca-fe14bfbbcb5c",
        name: "Михаил",
        rating: "5",
        quotes: "https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.appspot.com/o/Page%2FReviews%2Fquotes.jpg?alt=media&token=8811d9be-6825-412d-8af7-85e5aa88758f",
        text1: "Прекрасно проведенное время в Тбилиси, закомство с Грузией. Мы познакомились с историей Грузии, посетили великолепные крепости и храмы, насладились красотой гор и долин, попробовали национальные грузинские блюда."
      }
    ])
  }
export { review };
