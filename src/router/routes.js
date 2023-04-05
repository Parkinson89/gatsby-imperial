export const PUBLIC_ROUTES = [
  {
    path: "/",
    modifier: "main",
    textLink: "Главная",
    lowerLevelLinks: [
      {
        id: 0,
        idName: "certificates",
        text: "Лицензии"
      },
      {
        id: 1,
        idName: "ourClients",
        text: "Клиенты и партнёры"
      },
      {
        id: 2,
        idName: "letters",
        text: "Благодарственные письма"
      },
      {
        id: 3,
        idName: "security",
        text: "Охрана"
      },
      {
        id: 4,
        idName: "callback",
        text: "Обратный звонок"
      }
    ]
  },
  {
    path: "/services",
    modifier: "services",
    textLink: "Услуги",
    lowerLevelLinks: [
      {
        id: 0,
        idName: "physical",
        text: "Охрана объектов"
      },
      {
        id: 1,
        idName: "escort",
        text: "Сопровождение грузов"
      },
      {
        id: 2,
        idName: "personal",
        text: "Личная охрана"
      },
      {
        id: 3,
        idName: "development",
        text: "Разработка концепций безопасности"
      }
    ]
  },
  {
    path: "/equipments",
    modifier: "equipments",
    textLink: "Оборудование"
  },
  {
    path: "/vacancies",
    modifier: "vacancies",
    textLink: "Трудоустройство"
  },
  {
    path: "/contacts",
    modifier: "contacts",
    textLink: "Контакты"
  }
];
