$(function(){
  function buildHTML_noMatch(){
    let html = `
                <div class="ChatMember clearfix">
                  <p class="ChatMember__name">ユーザーが見つかりません</p>
                </div>
              `;
    return html;
  }
  function buildHTML_addMatch(user){
    let html = `
                <div class="ChatMember clearfix">
                  <p class="ChatMember__name">${user.name}</p>
                  <div class="ChatMember__add ChatMember__button" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>
              `;
    return html;
  }
  function buildHTML_addUser(name,id){
    let html = `
                <div class="ChatMember">
                  <p class="ChatMember__name">${name}</p>
                  <input name="group[user_ids][]" type="hidden" value="${id}" />
                  <div class="ChatMember__remove ChatMember__button" data-user-id="${id}" data-user-name="${name}">削除</div>
                </div>
                `;
    return html;
  }

  // ユーザーの検索
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
        let html = buildHTML_noMatch();
        $("#UserSearchResult").append(html);
      }
      else {
        users.forEach(function(user) {
        let html = buildHTML_addMatch(user);
        $("#UserSearchResult").append(html);
        })
      }
    })
    .fail(function(){
      alert("ユーザー検索に失敗しました");
    })
  })

  //ユーザーの追加
  $("#UserSearchResult").on('click', ".ChatMember__add", function(){
    let selectData = $(".ChatMember__add");
    const selectUser = selectData.data("user-name");
    const selectId = selectData.data("user-id");
    $(this).parent().remove();
    let html = buildHTML_addUser(selectUser,selectId);
    $(".ChatMembers").append(html);
  })

  //ユーザーの削除
  $(".ChatMembers").on('click', ".ChatMember__remove", function(){
    $(this).parent().remove();
  })

})