import {LOCALES} from './locales';

export type LocalizationKeys = {
  form_title: string;
  wish_title: string;
  wish_title_placeholder: string;
  wish_description: string;
  wish_description_placeholder: string;
  wish_link: string;
  wish_link_placeholder: string;
  wish_price: string;
  wish_price_placeholder: string;
  wish_currency: string;
  add_btn: string;

  nav_add_wish: string;
  nav_wish_list: string;
  nav_archive: string;

  wish_list_title: string;
  wish_item_edit_btn: string;
  wish_item_done_btn: string;
  wish_item_delete_btn: string;
  wish_item_link: string;

  archive_title: string;

  validations_required_field: string;
  validations_only_letters: string;
  validations_only_url: string;
  validations_only_numbers: string;
  validations_only_positive_price: string;
};

export const messages = {
  [LOCALES.ENGLISH]: {
    form_title: 'Create wish',
    wish_title: 'Title*',
    wish_title_placeholder: 'type wish title',
    wish_description: 'Description*',
    wish_description_placeholder: 'type wish description',
    wish_link: 'Link',
    wish_link_placeholder: 'add wish link',
    wish_price: 'Price',
    wish_price_placeholder: 'add wish price',
    wish_currency: 'Currency',
    add_btn: 'Add',

    nav_add_wish: 'Add wish',
    nav_wish_list: 'Wish list',
    nav_archive: 'Archive',

    wish_list_title: 'My wishes',
    wish_item_edit_btn: 'Edit',
    wish_item_done_btn: 'Done',
    wish_item_delete_btn: 'Delete',
    wish_item_link: 'Link',

    archive_title: 'Fulfilled wishes',

    validations_required_field: 'Fill this field',
    validations_max_length: 'Title must be at most 30 characters',
    validations_only_letters: 'Use only letters',
    validations_only_url: 'Use only url',
    validations_only_numbers: 'Use only numbers',
    validations_only_positive_price: 'Use only positive price',
  } as LocalizationKeys,

  [LOCALES.RUSSIAN]: {
    form_title: 'Создайте желание',
    wish_title: 'Заголовок*',
    wish_title_placeholder: 'добавьте заголовок',
    wish_description: 'Описание*',
    wish_description_placeholder: 'добавьте описание',
    wish_link: 'Ссылка',
    wish_link_placeholder: 'добавьте ссылку',
    wish_price: 'Цена',
    wish_price_placeholder: 'добавьте цену',
    wish_currency: 'Валюта',
    add_btn: 'Добавить',

    nav_add_wish: 'Добавить желание',
    nav_wish_list: 'Список желаний',
    nav_archive: 'Архив',

    wish_list_title: 'Мои желания',
    wish_item_edit_btn: 'Редактировать',
    wish_item_done_btn: 'Выполнено',
    wish_item_delete_btn: 'Удалить',
    wish_item_link: 'Ссылка',

    archive_title: 'Исполненные желания',

    validations_required_field: 'Заполните это поле',
    validations_max_length: 'Заголовок должен содержать не более 30 символов',
    validations_only_letters: 'Используйте только буквы',
    validations_only_url: 'Используйте только URL',
    validations_only_numbers: 'Используйте только цифры',
    validations_only_positive_price:
      'Используйте только положительные значения',
  } as LocalizationKeys,

  [LOCALES.UKRAINIAN]: {
    form_title: 'Створіть бажання',
    wish_title: 'Заголовок*',
    wish_title_placeholder: 'додайте заголовок',
    wish_description: 'Oпис*',
    wish_description_placeholder: 'додайте опис',
    wish_link: 'Посилання',
    wish_link_placeholder: 'додайте посилання',
    wish_price: 'Цiна',
    wish_price_placeholder: 'додайте цiну',
    wish_currency: 'Валюта',
    add_btn: 'Додати',

    nav_add_wish: 'Додати бажання',
    nav_wish_list: 'Список бажань',
    nav_archive: 'Архiв',

    wish_list_title: 'Мої бажання',
    wish_item_edit_btn: 'Редагувати',
    wish_item_done_btn: 'Виконано',
    wish_item_delete_btn: 'Видалити',
    wish_item_link: 'Посилання',

    archive_title: 'Виконані бажання',

    validations_required_field: 'Заповніть це поле',
    validations_max_length: 'Назва має містити не більше 30 символів',
    validations_only_letters: 'Використовуйте лише літери',
    validations_only_url: 'Використовуйте лише URL',
    validations_only_numbers: 'Використовуйте лише цифри',
    validations_only_positive_price: 'Використовуйте лише позитивні значення',
  } as LocalizationKeys,
};
