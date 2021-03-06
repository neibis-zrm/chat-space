class Group < ApplicationRecord
  has_many :user_groups
  has_many :messages
  has_many :users, through: :user_groups
  validates :name, presence: true, uniqueness: true

  def user_list_message
    user_list = ""
    users.each do |user|
      user_list = "#{user_list} #{user.name}"
    end
    return user_list
  end

  def show_last_message
    if (last_message = messages.last).present?
      if last_message.body?
        last_message.body
      else
        '画像が投稿されています'
      end
    else
      'まだメッセージはありません。'
    end
  end

end
