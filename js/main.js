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

  //Маска для телефона
  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "Ваш номер телефона"});

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
        ownModal.classList.add('active');
        const RemoveOwnModal = () => {
         ownModal.classList.remove('active')
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

  //Валидация Формы Beginer
  $('.modal-beginer__form').validate({
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
        ownModal.classList.add('active');
        const RemoveOwnModal = () => {
         ownModal.classList.remove('active')
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
        ownModal.classList.add('active');
        const RemoveOwnModal = () => {
         ownModal.classList.remove('active')
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

  //Активная ссылка
  
  // Вкладки с картами
  $(".branches__tabs-map .tab").click(function() {
    $(".branches__tabs-map .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
  $(".tab_item").not(":first").hide();
});