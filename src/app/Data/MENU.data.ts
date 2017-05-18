// ROLES (http://wiki.dircont.com/pages/viewpage.action?pageId=1277979)
// АТП [superuser]
//  Бухгалтер [accountant]
//  Эксперт [expert]
// Партнер [partner]
// АП [admin_of_user]
//  АН[admin_of_direction]
//    Оператор [operator]
//

export const TOP_MENU_ITEMS = {
  unknown: [],
  admin_of_user: [
    {
      link: '/personal_data',
      label: 'Личные данные'
    },
    {
      link: '/employees',
      label: 'Сотрудники'
    },
    {
      link: '/black-white-list',
      label: 'Черно-белый список'
    },
    {
      link: '/faq',
      label: 'ЧАВО'
    },
  ],
  partner: [
    {
      link: '/personal_data',
      label: 'Личные данные'
    },
    {
      link: '/black-white-list',
      label: 'Черно-белый список'
    },
    {
      link: '/faq',
      label: 'ЧАВО'
    },
  ]
};

export const LEFT_MENU_ITEMS = {
  unknown: [],
  admin_of_user: [
    {
      link: '',
      label: 'Клиентов'
    },
    {
      link: '',
      label: 'Партнеров'
    },
    {
      link: '',
      label: 'Поступлений и выплат'
    },
  ],
  partner: [
    {
      link: '',
      label: 'Клиентов'
    },
    {
      link: '',
      label: 'Партнеров'
    },
    {
      link: '',
      label: 'Поступлений и выплат'
    },
  ],
};
