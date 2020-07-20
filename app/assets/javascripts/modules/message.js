$(function(){
  function buildHTML(message){
    if ((message.image) && (message.body)) {
      let html = `<ul>
                    <li>
                      <div class="MainChat__showmessage__box" data-message-id="${message.id}">
                        <div class="MainChat__showmessage__user">
                          ${message.user_name}
                          <div class="MainChat__showmessage__time">
                            ${message.create_at}
                          </div>
                        </div>
                        <div class="MainChat__showmessage__text">
                          ${message.body}
                        </div>
                        <img class="MainChat__showmessage__image" src="${message.image}">
                      </div>
                    </li>
                  </ul>`
      return html;
    } 
    else if (message.image) {
      let html = `<ul>
                    <li>
                      <div class="MainChat__showmessage__box" data-message-id="${message.id}">
                        <div class="MainChat__showmessage__user">
                          ${message.user_name}
                          <div class="MainChat__showmessage__time">
                            ${message.create_at}
                          </div>
                        </div>
                        <img class="MainChat__showmessage__image" src="${message.image}">
                      </div>
                    </li>
                  </ul>`
      return html;
    } 
    else {
      let html = `<ul>
                    <li>
                      <div class="MainChat__showmessage__box" data-message-id="${message.id}">
                        <div class="MainChat__showmessage__user">
                          ${message.user_name}
                          <div class="MainChat__showmessage__time">
                            ${message.create_at}
                          </div>
                        </div>
                        <div class="MainChat__showmessage__text">
                          ${message.body}
                        </div>
                      </div>
                    </li>
                  </ul>`
      return html;
    }
  }

  $(".MainChat__format").on("submit", function(e) {
    e.preventDefault()
    let formData = new FormData(this)
    let url = $(this).attr("action")
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.MainChat__showmessage').append(html);
      $('.MainChat__showmessage').animate({ scrollTop: $('.MainChat__showmessage')[0].scrollHeight});
      $('form')[0].reset();
      $('.MainChat__format__btm').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  })
})