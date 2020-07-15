$(function(){
  function buildHTML_nouser(){
    let html = `
                <div class="ChatMember clearfix">
                  <p class="ChatMember__name">ユーザーが見つかりません</p>
                </div>
              `;
    return html;
  }
  function buildHTML(user){
    let html = `
                <div class="ChatMember clearfix">
                  <p class="ChatMember__name">${user.name}</p>
                  <div class="ChatMember__add ChatMember__button" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>
              `;
    return html;
  }

  $("#UserSearch__field").on("keyup", function(){
    let input = $("#UserSearch__field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      dataType: 'json',
      data: {keyword: input}
    })
    .done(function(users){
      $("#UserSearchResult").empty();
      if (input.length == 0) {
        return;
      }
      if (users.length == 0) {
        let html = buildHTML_nouser();
        $("#UserSearchResult").append(html);
      }
      else {
        users.forEach(function(user) {
        let html = buildHTML(user);
        console.log(user);
        $("#UserSearchResult").append(html);
        })
      }
    })
    .fail(function(){
      alert("ユーザー検索に失敗しました");
    })
  })
})