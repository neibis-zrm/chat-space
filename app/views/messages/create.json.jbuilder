json.body @message.body
json.create_at @message.created_at.strftime("%Y/%m/%d(%a) %H:%M:%S")
json.user_name @message.user.name
json.image @message.image_url