# language: ru
Функция: Заполнение первого шага создания страницы акции
  Как организатору акции
  Мне нужно заполнить поля первого шага создания страницы акции
  Чтобы указать по ней основную информацию

  Предыстория:
    Допустим я на странице "Создание страницы акции"
    И у меня открыт первый шаг создания страницы акции

  Сценарий: Указание ближайшего населённого пункта
    Если я ввожу "деревня Боровиковщина" в поле "Ближайший населённый пункт"
    То Субботник должен показать на карте границы населённого пункта "деревня Боровиковщина"
    И Субботник должен поставить указатель в центре населённого пункта

  Сценарий: Успешное и полное заполнение первого шага создания страницы акции
    Если я ввожу "Уборка левого берега р. Ислочь" в поле "Название акции"
    И я ввожу "деревня Боровиковщина" в поле "Ближайший населённый пункт"
    И я указываю точку "53.959215, 26.728599" на карте
    И я ввожу "05.05.2018" в поле "Дата проведения"
    И я ввожу "09:00" в поле "Время начала"
    И я ввожу "18:00" в поле "Время окончания"
    И я нажимаю на кнопку "Далее"
    То Субботник должен открыть второй шаг создания страницы акции

  Сценарий: Минимальное успешное заполнение первого шага создания страницы акции
    Если я ввожу "Субботник в Осмоловке" в поле "Название акции"
    И я ввожу "деревня Осмоловка" в поле "Ближайший населённый пункт"
    И я ввожу "05.05.2018" в поле "Дата проведения"
    И я ввожу "09:00" в поле "Время начала"
    И я нажимаю на кнопку "Далее"
    То Субботник должен открыть второй шаг создания страницы акции

  Сценарий: Переход к указанию периода проведения акции вместо точной даты и времени
    Если я нажимаю на панель "Я ещё не знаю точную дату и время проведения акции"
    То Субботник должен сделать следующие поля недоступными для редактирования: "Дата проведения", "Время начала", "Время окончания"

  Сценарий: Указание периода проведения акции вместо точной даты и времени
    Если я ввожу "Субботник в Осмоловке" в поле "Название акции"
    И я ввожу "деревня Осмоловка" в поле "Ближайший населённый пункт"
    И я нажимаю на панель "Я ещё не знаю точную дату и время проведения акции"
    И я ввожу "01.05.2018" в поле "Дата начала периода"
    И я ввожу "31.05.2018" в поле "Дата окончания периода"
    И я нажимаю на кнопку "Далее"
    То Субботник должен открыть второй шаг создания страницы акции
