export const events = {
  'error.system.network':
    'Похоже, наш сервис временно недоступен. Попробуйте немного позднее',

  'error.email.required': 'Необходимо указать ваш e-mail',
  'error.email.format': 'Вы указали невалидный e-mail',

  'error.password.required': 'Необходимо указать ваш пароль',
  'error.password.min': 'Пароль не может быть короче 8 символов',

  'error.emailOrPassword.incorrect': 'Неверный логин или пароль',

  'error.recoveryCode.notFound':
    'Некорректная ссылка из письма, попробуйте еще раз',

  'error.firstName.required': 'Укажите ваше имя',

  'error.lastName.required': 'Укажите вашу фамилию',

  'error.user.notFound': 'Пользователь не найден',
  'error.user.incompleteProfile':
    'Профиль заполнен не полностью. Заполните и повторите попытку',

  'error.comment.notFound': 'Комментарий не найден',
  'error.comment.targetNotExists':
    'Невозможно прокомментировать несуществующий объект',

  'error.project.notFound': 'Начинание не найдено',

  'error.subscription.notFound': 'Подписка не найдена',
  'error.subscription.myself': 'Невозможно подписатся на себя',
  'error.subscription.exists': 'Вы уже подписаны на это',

  'error.message.empty': 'Вы пытаетесь отправить пустое сообщение',

  'error.help.notFound': 'Справочный раздел пока пуст',

  'error.like.exists': 'Вы уже оценили это',
  'error.like.targetNotExists': 'Невозможно оценить несуществующий объект',
  'error.like.likeNotExists': 'Оценки не существует',
  'error.like.dislikeNotSupported':
    'Дизлайк можно поставить только комментарию',
};
