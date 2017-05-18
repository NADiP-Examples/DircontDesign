export const ROLES = [
  { title: 'Партнер', value: 'partner' },
  { title: 'АП(администратор пользователя)', value: 'admin_of_user' },
  { title: 'АН(администратор направления)', value: 'admin_of_direction' },
  { title: 'Оператор', value: 'operator' },
  { title: 'Бухгалтер', value: 'accountant' },
  { title: 'Эксперт', value: 'expert' },
  { title: 'АТП(администратор тех поддержки)', value: 'superuser' }
];

export const LEGAL_STATUSES = [
  {
    value: 'natural_person',
    title: 'Физ.лицо'
  },
  {
    value: 'individual_entrepreneur',
    title: 'ИП'
  },
  {
    value: 'legal_entity',
    title: 'Юр.лицо'
  },
];

export const RESIDENCES = [
  {
    value: 'russian_federation',
    title: 'Резидент РФ'
  },
  {
    value: 'other',
    title: 'Иное'
  },
];
