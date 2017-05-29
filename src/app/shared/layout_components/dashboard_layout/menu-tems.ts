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
      link: '/profile',
      label: 'Личные данные',
    },
    {
      link: '/profile/demo',
      label: 'Личные данные(Demo)',
      sub_items: [{
        link: '/profile/demo/one',
        label: 'Подпункт-1',
      }, {
        link: '/profile/demo/two',
        label: 'Подпункт-2',
      }, {
        link: '/profile/demo/three',
        label: 'Подпункт-3',
      }]
    },
    {
      link: '/employees',
      label: 'Сотрудники',
      sub_items: [{
        link: '/employees/list',
        label: 'Список сотрудников',
      }, ]
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
