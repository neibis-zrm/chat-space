# README

## Database creation
### users table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

#### Association
- has_many :groups, through: :users_groups
- has_many :messages

### groups table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

#### Association
- has_many :users, through: :users_groups
- has_many :messages

### messages table
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

#### Association
- belongs_to :user
- belongs_to :group

### users_groups table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

#### Association
- belongs_to :user
- belongs_to :group