# README

## Database creation
### users table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### groups table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### messages table
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|null: false|
|user_id|integer|null: false|