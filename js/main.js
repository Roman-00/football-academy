$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });

  $('.list').click(function(){
    $('.column-one').toggleClass('column-list');
  });

  $('.list').click(function(){
    $('.news-card__text').toggleClass('column-width');
  });

  $('.grid').click(function() {
    $('.column-one').toggleClass('column-list');
  });

  $('.grid').click(function() {
    $('.news-card__text').toggleClass('column-width');
  });

  //Скрытие карт
  var ticket = $('.ticket');
  var ticketBoot = ticket.offset().top;
  $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if (windowTop > ticketBoot) {
      $('#map-one').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A804e9842e81be7d7cae8fe1bea1e8663e62d4eea16f76eee5d407e9c81fb6629&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false"></script>')
      $(window).unbind('scroll')
    }
  });

  //Скрытие карт
  var ticket = $('.ticket');
  var ticketTop = ticket.offset().top;
  $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if (windowTop > ticketTop) {
      $('#map-two').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A38014c39d234a806eafc07481668f628cd540dcae4eb849efbc9c37925d11e69&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false"></script>')
      $(window).unbind('scroll')
    }
  });

  //Скрытие карт
  var ticket = $('.ticket');
  var ticketTop = ticket.offset().top;
  $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if (windowTop > ticketTop) {
      $('#map-three').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad24ad5d72b6ad069d987120e407e1fca2145d17f225c6b6eb52396e938d48635&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false"></script>')
      $(window).unbind('scroll')
    }
  });

  //Скрытие карт
  var ticket = $('.ticket');
  var ticketTop = ticket.offset().top;
  $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if (windowTop > ticketTop) {
      $('#map-four').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aef9e6eacc1030dde44dad5122efa3df836014eb1cc96e9dc288ee62f413e08b2&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false"></script>')
      $(window).unbind('scroll')
    }
  });

  //Вторая модалка
  var modalBeginer = $('.modal-beginer'),
      modalBtn = $('[data-toggle=modal-beginer]'),
      closeBtn = $('.modal-beginer__close');
  modalBtn.on('click', function () {
    modalBeginer.toggleClass('modal-beginer--visible');
    });
  closeBtn.on('click', function() {
    modalBeginer.toggleClass('modal-beginer--visible');
  });

  //Третья модалка
  var modalIntensive = $('.modal-intensive'),
      modalBtn = $('[data-toggle=modal-intensive]'),
      closeBtn = $('.modal-intensive__close');
  modalBtn.on('click', function () {
    modalIntensive.toggleClass('modal-intensive--visible');
    });
  closeBtn.on('click', function() {
    modalIntensive.toggleClass('modal-intensive--visible');
  });

  //Четвертая модалка
  var modalBaby = $('.modal-baby'),
      modalBtn = $('[data-toggle=modal-baby]'),
      closeBtn = $('.modal-baby__close');
  modalBtn.on('click', function () {
    modalBaby.toggleClass('modal-baby--visible');
    });
  closeBtn.on('click', function() {
    modalBaby.toggleClass('modal-baby--visible');
  });

  //Пятая модалка
  var modalJuvinali = $('.modal-juvenali'),
      modalBtn = $('[data-toggle=modal-juvenali]'),
      closeBtn = $('.modal-juvenali__close');
  modalBtn.on('click', function () {
    modalJuvinali.toggleClass('modal-juvenali--visible');
    });
  closeBtn.on('click', function() {
    modalJuvinali.toggleClass('modal-juvenali--visible');
  });

  //Шестая модалка
  var modalJuvinaliTwo = $('.modal-juvenali-two'),
      modalBtn = $('[data-toggle=modal-juvenali-two]'),
      closeBtn = $('.modal-juvenali-two__close');
  modalBtn.on('click', function () {
    modalJuvinaliTwo.toggleClass('modal-juvenali-two--visible');
    });
  closeBtn.on('click', function() {
    modalJuvinaliTwo.toggleClass('modal-juvenali-two--visible');
  });

  //Шестая Седьмая
  var modalJunior = $('.modal-junior'),
      modalBtn = $('[data-toggle=modal-junior]'),
      closeBtn = $('.modal-junior__close');
  modalBtn.on('click', function () {
    modalJunior.toggleClass('modal-junior--visible');
    });
  closeBtn.on('click', function() {
    modalJunior.toggleClass('modal-junior--visible');
  });

  //Маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Ваш номер телефона"});

  //Youtube API
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '460',
      width: '100%',
      videoId: 'icOCoyI4LcU',
      events: {
        'onReady': videoPlay,
      }
    }); 
  });

  function videoPlay(event) {
    event.target.playVideo();
  };

  var player;

  //Валидация Форм
  $('.modal__form').validate({
    rules: {
      // строчное правило
      userName: {
        required: true,
      },
      userPhone: "required",
      // правило обьект
    },// сообщения
    messages: {
      userName: {
        required: "Заполните поле",
      },
      userPhone: "Неверный номер",
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    errorElement: "div",
    errorClass: "invalid",

    // Jquery Ajax form
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
         let ownModal = document.getElementById('ownModal');
         ownModal.classList.add('active-own');
         const RemoveOwnModal = () => {
          ownModal.classList.remove('active-own')
         };
         setTimeout(RemoveOwnModal, 3000); 
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса! ' + response);
          ym('65026879', 'reachGoal', 'button'); return true;
        }
      });
     },
  });

  //Валидация Формы Baby Star
  $('.modal-baby__form').validate({
    rules: {
      // строчное правило
      userName: {
        required: true,
        maxlength: 15,
        minlength: 2
      },
      userPhone: "required",
      // правило обьект
    },// сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не должно быть короче 2 символов",
        maxlength: "Имя не должно превышать 15 символов"
      },
      userPhone: "Номер Обязательно",
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    errorElement: "div",
    errorClass: "invalid",

    // Jquery Ajax form
    submitHandler: function(form) {
     $.ajax({
       type: "POST",
       url: "send.php",
       data: $(form).serialize(),
       success: function (response) {
        let ownModal = document.getElementById('ownModal');
        ownModal.classList.add('active-own');
        const RemoveOwnModal = () => {
         ownModal.classList.remove('active-own')
        };
        setTimeout(RemoveOwnModal, 3000); 
         $(form)[0].reset();
         modalBaby.removeClass('modal-beginer--visible');
       },
       error: function (response) {
         console.error('Ошибка запроса! ' + response);
         ym('65026879', 'reachGoal', 'button'); return true;
       }
     });
    },
  });

  //Валидация Формы Ювеналы
  $('.modal-juvenali__form').validate({
    rules: {
      // строчное правило
      userName: {
        required: true,
        maxlength: 15,
        minlength: 2
      },
      userPhone: "required",
      // правило обьект
    },// сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не должно быть короче 2 символов",
        maxlength: "Имя не должно превышать 15 символов"
      },
      userPhone: "Номер Обязательно",
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    errorElement: "div",
    errorClass: "invalid",

    // Jquery Ajax form
    submitHandler: function(form) {
     $.ajax({
       type: "POST",
       url: "send.php",
       data: $(form).serialize(),
       success: function (response) {
        let ownModal = document.getElementById('ownModal');
        ownModal.classList.add('active-own');
        const RemoveOwnModal = () => {
         ownModal.classList.remove('active-own')
        };
        setTimeout(RemoveOwnModal, 3000); 
         $(form)[0].reset();
         modalJuvinali.removeClass('modal-juvenali--visible');
       },
       error: function (response) {
         console.error('Ошибка запроса! ' + response);
         ym('65026879', 'reachGoal', 'button'); return true;
       }
     });
    },
  });

  //Валидация Формы Ювеналы 2
  $('.modal-juvenali-two__form').validate({
    rules: {
      // строчное правило
      userName: {
        required: true,
        maxlength: 15,
        minlength: 2
      },
      userPhone: "required",
      // правило обьект
    },// сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не должно быть короче 2 символов",
        maxlength: "Имя не должно превышать 15 символов"
      },
      userPhone: "Номер Обязательно",
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    errorElement: "div",
    errorClass: "invalid",

    // Jquery Ajax form
    submitHandler: function(form) {
     $.ajax({
       type: "POST",
       url: "send.php",
       data: $(form).serialize(),
       success: function (response) {
        let ownModal = document.getElementById('ownModal');
        ownModal.classList.add('active-own');
        const RemoveOwnModal = () => {
         ownModal.classList.remove('active-own')
        };
        setTimeout(RemoveOwnModal, 3000); 
         $(form)[0].reset();
         modalJuvinaliTwo.removeClass('modal-juvenali-two--visible');
       },
       error: function (response) {
         console.error('Ошибка запроса! ' + response);
         ym('65026879', 'reachGoal', 'button'); return true;
       }
     });
    },
  });

  //Валидация Формы Юниоры
  $('.modal-junior__form').validate({
    rules: {
      // строчное правило
      userName: {
        required: true,
        maxlength: 15,
        minlength: 2
      },
      userPhone: "required",
      // правило обьект
    },// сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не должно быть короче 2 символов",
        maxlength: "Имя не должно превышать 15 символов"
      },
      userPhone: "Номер Обязательно",
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    errorElement: "div",
    errorClass: "invalid",

    // Jquery Ajax form
    submitHandler: function(form) {
     $.ajax({
       type: "POST",
       url: "send.php",
       data: $(form).serialize(),
       success: function (response) {
        let ownModal = document.getElementById('ownModal');
        ownModal.classList.add('active-own');
        const RemoveOwnModal = () => {
         ownModal.classList.remove('active-own')
        };
        setTimeout(RemoveOwnModal, 3000); 
         $(form)[0].reset();
         modalJunior.removeClass('modal-junior--visible');
       },
       error: function (response) {
         console.error('Ошибка запроса! ' + response);
         ym('65026879', 'reachGoal', 'button'); return true;
       }
     });
    },
  });

  //Валидация Формы Beginer
  $('.modal-beginer__form').validate({
    rules: {
      // строчное правило
      userName: {
        required: true,
        maxlength: 15,
        minlength: 2
      },
      userPhone: "required",
      // правило обьект
    },// сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не должно быть короче 2 символов",
        maxlength: "Имя не должно превышать 15 символов"
      },
      userPhone: "Номер Обязательно",
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    errorElement: "div",
    errorClass: "invalid",

    // Jquery Ajax form
    submitHandler: function(form) {
     $.ajax({
       type: "POST",
       url: "send.php",
       data: $(form).serialize(),
       success: function (response) {
        let ownModal = document.getElementById('ownModal');
        ownModal.classList.add('active-own');
        const RemoveOwnModal = () => {
         ownModal.classList.remove('active-own')
        };
        setTimeout(RemoveOwnModal, 3000); 
         $(form)[0].reset();
         modalBeginer.removeClass('modal-beginer--visible');
       },
       error: function (response) {
         console.error('Ошибка запроса! ' + response);
         ym('65026879', 'reachGoal', 'button'); return true;
       }
     });
    },
  });

  //Валидация Формы Intensive
  $('.modal-intensive__form').validate({
    rules: {
      // строчное правило
      userName: {
        required: true,
      },
      userPhone: "required",
      // правило обьект
    },// сообщения
    messages: {
      userName: {
        required: "Заполните поле",
      },
      userPhone: "Неверный номер",
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    errorElement: "div",
    errorClass: "invalid",

    // Jquery Ajax form
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
         let ownModal = document.getElementById('ownModal');
         ownModal.classList.add('active-own');
         const RemoveOwnModal = () => {
          ownModal.classList.remove('active-own')
         };
         setTimeout(RemoveOwnModal, 3000); 
          $(form)[0].reset();
          modalIntensive.removeClass('modal-intensive--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса! ' + response);
          ym('65026879', 'reachGoal', 'button'); return true;
        }
      });
     },
  });

  //Валидация Формы Header
  $('.header__form').validate({
    rules: {
      // строчное правило
      userName: {
        required: true,
        maxlength: 15,
        minlength: 2
      },
      userPhone: "required",
      // правило обьект
    },// сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не должно быть короче 2 символов",
        maxlength: "Имя не должно превышать 15 символов"
      },
      userPhone: "Номер Обязательно",
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    errorElement: "span",
    errorClass: "invalid",

    // Jquery Ajax form
    submitHandler: function(form) {
     $.ajax({
       type: "POST",
       url: "send.php",
       data: $(form).serialize(),
       success: function (response) {
        let ownModal = document.getElementById('ownModal');
        ownModal.classList.add('active-own');
        const RemoveOwnModal = () => {
         ownModal.classList.remove('active-own')
        };
        setTimeout(RemoveOwnModal, 3000); 
         $(form)[0].reset();
         modal.removeClass('modal--visible');
       },
       error: function (response) {
         console.error('Ошибка запроса! ' + response);
         ym('65026879', 'reachGoal', 'button'); return true;
       }
     });
    },
  });

  // Валидация формы на Страницк Контакты секция
  $('.questions__form').validate({
    rules: {
      // строчное правило
      userName: {
        required: true,
        maxlength: 15,
        minlength: 2
      },
      userPhone: "required",
      userEmail: "required",
      userMessage: "required",
      // правило обьект
    },// сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть короче 2 символов",
        maxlength: "Имя не должно превышать 15 символов"
      },
      userPhone: "Телефон обязателен",
      userEmail: "E-mail обязателен",
      userMessage: "Введите сообщения",
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    errorElement: "p",
    errorClass: "invalid",

    // Jquery Ajax form
    submitHandler: function(form) {
     $.ajax({
       type: "POST",
       url: "send.php",
       data: $(form).serialize(),
       success: function (response) {
        let ownModal = document.getElementById('ownModal');
        ownModal.classList.add('active-own');
        const RemoveOwnModal = () => {
         ownModal.classList.remove('active-own')
        };
        setTimeout(RemoveOwnModal, 3000); 
         $(form)[0].reset();
         modal.removeClass('modal--visible');
       },
       error: function (response) {
         console.error('Ошибка запроса! ' + response);
       }
     });
    },
  });

  //recapcha
  var onloadCallback = function() {
    alert("grecaptcha is ready!");
  };
  
  //Вкладки с картами в Контактах
  $(".contacts-tabs .contacts__tab").click(function() {
	  $(".contacts-tabs .contacts__tab").removeClass("contacts-active").eq($(this).index()).addClass("contacts-active");
	  $(".contacts-tab__item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("contacts-active");
  $(".contacts-tab__item").not(":first").hide();
  
  // Вкладки с картами
  $(".branches__tabs-map .tab").click(function() {
    $(".branches__tabs-map .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
  $(".tab_item").not(":first").hide();
});